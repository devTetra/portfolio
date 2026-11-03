"use client";

import { experiences } from "@/data/experience";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

export const Experience = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="px-6 pt-20 max-md:pt-18 min-[768px]:px-[clamp(4rem,calc(23.4375vw-116px),8.75rem)]"
    >
      <div className="grid grid-cols-[200px_1fr] gap-10 max-md:block">
        <motion.div
          variants={itemVariants}
          className="pt-7 font-mono text-xs tracking-[1px] text-primary max-md:mb-5 max-md:pt-0"
        >
          EXPERIENCE
        </motion.div>

        <div>
          {experiences.map((exp, index) => (
            <motion.article
              key={`${exp.date}-${index}`}
              variants={itemVariants}
              whileHover={{ y: -2 }}
              transition={{
                type: "spring" as const,
                stiffness: 300,
                damping: 20,
              }}
              className="grid grid-cols-[1fr_2fr] gap-6 border-t border-border py-7 max-md:block max-md:py-6"
            >
              <div className="pt-3 font-mono uppercase text-xs tracking-[1px] text-muted max-md:pt-0 max-md:mb-2">
                {exp.date}
              </div>
              <div>
                <div className="font-display text-4xl font-normal leading-[1.1] text-fg max-md:mt-2 max-md:text-[30px]">
                  {exp.title}, <span className="text-muted">{exp.company}</span>
                </div>
                <div>
                  {exp.description.map((desc, i) => (
                    <p
                      key={i}
                      className="mt-2.5 mb-0 text-[15px] leading-[1.6] text-muted transition-colors duration-200 group-hover:text-fg max-md:mt-2"
                    >
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
