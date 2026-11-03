"use client";

import { useAnimate } from "motion/react";
import { useEffect, useState } from "react";

const DOT = 10;
const LINE_W = 160;
const LINE_H = 2;

const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;

const TIMING = {
  appear: { duration: 0.3, ease: EASE_OUT },
  expand: { duration: 0.5, ease: EASE_IN_OUT },
  retract: { duration: 0.4, ease: EASE_IN_OUT },
  travel: { duration: 0.75, ease: EASE_IN_OUT },
} as const;

const GAP = {
  afterAppear: 0.05,
  afterExpand: 0.1,
  afterRetract: 0.05,
} as const;

const wait = (seconds: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, seconds * 1000));

export const Loader = () => {
  const [active, setActive] = useState(false);
  const [scope, animate] = useAnimate<HTMLDivElement>();

  useEffect(() => {
    if (document.documentElement.dataset.loader === "running") setActive(true);
  }, []);

  useEffect(() => {
    if (!active) return;
    let cancelled = false;
    const root = document.documentElement;
    const dot = "[data-loader-dot]";

    const run = async () => {
      try {
        // Reset
        await animate(
          dot,
          { opacity: 0, x: 0, y: 0, width: DOT, height: DOT },
          { duration: 0 },
        );

        // 1. Dot appears
        await animate(dot, { opacity: 1, scale: [0.4, 1] }, TIMING.appear);
        await wait(GAP.afterAppear);
        if (cancelled) return;

        // 2. Expand to line
        await animate(dot, { width: LINE_W, height: LINE_H }, TIMING.expand);
        await wait(GAP.afterExpand);
        if (cancelled) return;

        // 3. Retract to dot
        await animate(dot, { width: DOT, height: DOT }, TIMING.retract);
        await wait(GAP.afterRetract);
        if (cancelled) return;

        // --- CRITICAL STEP: REVEAL PAGE ---
        // Flipping this to "done" triggers the CSS transitions in globals.css,
        // causing the Navbar and Main content to fade in from opacity 0 to 1.
        root.dataset.loader = "done";
        try {
          sessionStorage.setItem("loader-seen", "1");
        } catch {}

        // 4. Travel to logo
        // We measure the target now. Even though it is currently fading in (opacity < 1),
        // its geometry (getBoundingClientRect) is stable and correct.
        const target = document.querySelector<HTMLElement>("[data-logo-dot]");
        const host = scope.current;

        if (target && host) {
          const t = target.getBoundingClientRect();
          const h = host.getBoundingClientRect();
          const dx = t.left + t.width / 2 - (h.left + h.width / 2);
          const dy = t.top + t.height / 2 - (h.top + h.height / 2);

          // The dot travels while the page fades in behind it
          await animate(
            dot,
            { x: dx, y: dy, width: t.width, height: t.height },
            TIMING.travel,
          );
        }
      } finally {
        // --- CLEANUP ---
        // Only unmount the overlay after the travel is complete
        if (!cancelled) {
          // Failsafe: ensure page is visible even if animation crashed
          if (root.dataset.loader !== "done") root.dataset.loader = "done";
          setActive(false);
        }
      }
    };

    void run();
    return () => {
      cancelled = true;
    };
  }, [active, animate, scope]);

  if (!active) return null;

  return (
    <div
      ref={scope}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-60 grid place-items-center"
    >
      <div
        data-loader-dot
        className="rounded-full bg-primary opacity-0"
        style={{ width: DOT, height: DOT }}
      />
    </div>
  );
};
