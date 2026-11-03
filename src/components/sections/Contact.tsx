"use client";

import { motion } from "motion/react";
import { LuFileSymlink } from "react-icons/lu";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

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

export const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="px-6 pt-35 pb-30 max-md:pt-22 min-[768px]:px-[clamp(4rem,calc(23.4375vw-116px),8.75rem)]"
    >
      <motion.div
        variants={itemVariants}
        className="font-mono text-xs tracking-[1px] text-primary"
      >
        CONTACT
      </motion.div>

      <motion.h2
        variants={itemVariants}
        className="mt-3 font-display text-[clamp(3.75rem,8vw,6rem)] font-normal leading-[.98] tracking-[-1.5px] text-fg max-md:mt-2.5 max-[400px]:text-[clamp(2.5rem,13.3vw,3.125rem)]"
      >
        <span className="max-[400px]:block">Let&apos;s build</span>{" "}
        <span className="max-[400px]:block">
          something <i className="text-primary">useful</i>.
        </span>
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="mt-5 w-140 text-[18px] leading-[1.6] text-muted max-md:mt-4 max-md:w-auto max-md:text-base"
      >
        I'm currently open to new opportunities, collaborations, and interesting
        projects. If you'd like to work together or discuss an idea, I'd be glad
        to hear from you.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="mt-8 flex items-center gap-3 min-[768px]:max-[1100px]:flex-wrap max-md:mt-7 max-md:flex-wrap max-md:gap-3"
      >
        <motion.a
          href="mailto:tre.ejike@gmail.com"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[15px] font-medium text-on-primary transition-colors duration-200 hover:bg-primary/90 max-md:w-full max-md:py-3.75"
        >
          tre.ejike@gmail.com
        </motion.a>

        <motion.a
          href="https://github.com/devTetra"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.25 text-[15px] text-fg transition-all duration-200 hover:border-primary hover:text-primary max-md:flex-1 max-md:px-5 max-md:py-3.5"
        >
          <FaGithub size={20} aria-hidden="true" />
          GitHub
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/treasure-ejike/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.25 text-[15px] text-fg transition-all duration-200 hover:border-primary hover:text-primary max-md:flex-1 max-md:px-5 max-md:py-3.5"
        >
          <FaLinkedinIn size={20} aria-hidden="true" />
          LinkedIn
        </motion.a>

        <motion.a
          href="https://drive.google.com/file/d/1qlkjOHsJ59_prtI7YB3Ym7V9GwIAk4qD/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.25 text-[15px] text-fg transition-all duration-200 hover:border-primary hover:text-primary max-md:w-full max-md:px-5 max-md:py-3.5"
        >
          <LuFileSymlink size={18} aria-hidden="true" />
          View résumé
        </motion.a>
      </motion.div>
    </motion.section>
  );
};
