"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LuMenu, LuMoon, LuSun, LuX } from "react-icons/lu";
import { useThemeStore } from "@/store/useThemeStore";
import { MobileMenu } from "../ui/MobileMenu";

export const Navbar = () => {
  const { theme, toggleTheme } = useThemeStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration mismatch for theme icon
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <nav
      data-navbar
      className="fixed left-1/2 top-6 z-50 flex -translate-x-1/2 items-center gap-9 rounded-full border border-border bg-bg/90 py-2 pr-2 pl-6 text-sm text-fg backdrop-blur-md transition-colors duration-300 max-md:inset-x-4 max-md:left-4 max-md:top-4 max-md:w-auto max-md:translate-x-0 max-md:justify-between max-md:py-1.5 max-md:pr-1.5 max-md:pl-5"
      aria-label="Main navigation"
    >
      <a
        href="#top"
        className="shrink-0 whitespace-nowrap font-display text-2xl text-fg transition-colors hover:text-primary"
        aria-label="Treasure Ejike home"
      >
        T
        <span
          data-logo-dot
          aria-hidden="true"
          className="mx-[0.12em] inline-block size-[0.26em] rounded-full bg-primary align-[0.24em]"
        />
        E
      </a>

      {/* Desktop Links */}
      <div className="flex items-center gap-9 max-md:hidden">
        {["Projects", "About", "Skills", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative text-fg transition-colors duration-200 hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-1.5">
        {/* Theme Toggle */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex size-10 items-center cursor-pointer justify-center rounded-full border border-border bg-transparent text-fg transition-colors duration-200 hover:bg-surface hover:text-primary max-md:size-11"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          type="button"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isMounted ? theme : "light"}
              initial={{ y: -10, opacity: 0, rotate: -90 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: 10, opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              {isMounted && theme === "light" ? (
                <LuMoon size={18} aria-hidden="true" />
              ) : (
                <LuSun size={18} aria-hidden="true" />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.button>

        {/* Mobile Menu Toggle */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex size-11 cursor-pointer items-center justify-center rounded-full border border-border bg-transparent text-fg transition-colors duration-200 hover:bg-surface hover:text-primary md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          type="button"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isMenuOpen ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? (
                <LuX size={18} aria-hidden="true" />
              ) : (
                <LuMenu size={18} aria-hidden="true" />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Dropdown */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </nav>
  );
};
