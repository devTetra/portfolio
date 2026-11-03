"use client";

import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
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

export const About = () => {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="px-6 pt-30 max-md:pt-18 min-[768px]:px-[clamp(4rem,calc(23.4375vw-116px),8.75rem)]"
    >
      <motion.div
        variants={itemVariants}
        className="font-mono text-xs tracking-[1px] text-primary"
      >
        ABOUT
      </motion.div>

      <motion.h2
        variants={itemVariants}
        className="mt-3 font-display text-[clamp(2.5rem,7vw,4rem)] font-normal leading-[1.05] tracking-[-1px] text-fg max-md:mt-2.5 max-[400px]:text-[clamp(1.75rem,9vw,2rem)]"
      >
        Thoughtful engineering.
        <br className="hidden max-md:inline" />{" "}
        <i className="text-primary">Purposeful</i> software.
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="mt-5 w-full max-w-160 text-[18px] leading-[1.6] text-muted max-md:mt-4 max-md:text-base"
      >
        I’m a Software Engineer with experience building web applications across
        the frontend and backend. I enjoy turning ideas into functional
        products, developing APIs, integrating systems, and solving problems
        through clean, maintainable code. I’m particularly interested in
        building reliable applications and improving how different parts of a
        system work together.
      </motion.p>
    </motion.section>
  );
};
