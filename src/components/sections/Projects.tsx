"use client";

import { motion } from "motion/react";
import { ProjectCard } from "../ui/ProjectCard";
import { projects } from "@/data/projects";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 80, damping: 20 },
  },
} as const;

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="px-6 pt-15 max-md:pt-10 min-[768px]:px-[clamp(4rem,calc(23.4375vw-116px),8.75rem)]"
    >
      <motion.div
        variants={itemVariants}
        className="font-mono text-xs tracking-[1px] text-primary"
      >
        PROJECTS
      </motion.div>

      <motion.h2
        variants={itemVariants}
        className="mt-3 font-display text-[clamp(2.5rem,13vw,3.75rem)] font-normal tracking-[-1px] text-fg max-md:mt-2.5"
      >
        Selected work
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="mt-3 mb-12 text-[18px] text-muted max-md:mt-2.5 max-md:mb-9 max-md:text-base max-md:leading-normal"
      >
        A selection of what I&apos;ve built and the decisions behind it.
      </motion.p>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-2 gap-8 min-[1101px]:gap-14 max-md:flex max-md:flex-col max-md:gap-12"
      >
        {projects.map((project, i) => (
          <motion.div key={i} variants={itemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
