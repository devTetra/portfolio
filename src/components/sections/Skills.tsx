"use client";

import { motion } from "motion/react";
import { SkillGroup } from "../ui/SkillGroup";
import { skills } from "@/data/skills";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
} as const;

export const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="px-6 pt-20 max-md:pt-18 min-[768px]:px-[clamp(4rem,calc(23.4375vw_-_116px),8.75rem)]"
    >
      <div className="grid grid-cols-[200px_1fr] gap-10 border-t border-border py-7 max-md:block max-md:border-0 max-md:py-0">
        <motion.div
          variants={itemVariants}
          className="font-mono text-xs tracking-[1px] text-primary max-md:mb-5"
        >
          SKILLS
        </motion.div>

        <div className="grid grid-cols-4 gap-6 min-[768px]:max-[1100px]:grid-cols-2 min-[768px]:max-[1100px]:gap-y-7 max-md:grid-cols-2 max-md:gap-x-5 max-md:gap-y-7 max-md:border-t max-md:border-border max-md:pt-6">
          {skills.map((group) => (
            <SkillGroup
              key={group.title}
              title={group.title}
              items={group.items}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};
