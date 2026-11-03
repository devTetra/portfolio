"use client";

import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
} as const;

export const Hero = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex h-180 flex-col justify-center px-6 pt-24 max-md:h-170 min-[768px]:px-[clamp(5rem,calc(23.4375vw_-_100px),12.5rem)]"
    >
      <motion.div
        variants={itemVariants}
        className="inline-flex self-start items-center gap-2 rounded-full border border-border bg-surface/50 px-3.5 py-1.5 text-[13px] text-muted max-md:px-3"
      >
        <span className="size-2 animate-pulse-ring rounded-full bg-available motion-reduce:animate-none" />
        Available for work
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="mt-7 font-display text-[clamp(5.25rem,10vw,8rem)] font-normal leading-[.98] tracking-[-3px] text-fg max-md:mt-6 max-md:text-[clamp(3.75rem,13vw,5.25rem)] max-md:leading-[.95] max-md:tracking-[-1.5px]"
      >
        Treasure <span className="text-primary font-light">Ejike</span>
      </motion.h1>

      <motion.div
        variants={itemVariants}
        className="mt-9 w-full max-w-190 border-t border-border pt-4 font-mono text-base tracking-[1px] text-muted max-md:mt-7 max-md:pt-3.5 max-md:text-[11px]"
      >
        SOFTWARE ENGINEER · FRONTEND &amp; BACKEND
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="mt-4 w-full max-w-150 leading-[1.6] text-muted max-md:mt-3.5 max-md:text-base"
      >
        I work across the stack to turn ideas into functional web applications,
        combining problem-solving, clean implementation, and attention to
        detail.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="mt-8 flex items-center gap-4 max-md:mt-7 max-md:flex-col max-md:gap-3"
      >
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[15px] font-medium text-on-primary transition-colors duration-200 hover:bg-primary/90 max-md:min-h-12 max-md:w-full max-md:py-3.75 max-md:text-center"
        >
          View projects <span aria-hidden="true">→</span>
        </motion.a>

        {/* Updated to your preferred hover state */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.25 text-[15px] text-fg transition-all duration-200 hover:border-primary hover:text-primary max-md:min-h-12 max-md:w-full max-md:px-5 max-md:py-3.5"
        >
          Get in touch
        </motion.a>
      </motion.div>
    </motion.section>
  );
};
