"use client";

import { motion } from "motion/react";
import { LuExternalLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";

type ProjectCardProps = {
  image: string;
  name: string;
  link: string;
  repo: string;
  description: string;
  decisions: string[];
  stacks: string[];
};

export const ProjectCard = ({ project }: { project: ProjectCardProps }) => {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
      className="flex flex-col gap-3.5 max-md:gap-3"
    >
      <div className="relative overflow-hidden rounded-xl border border-border bg-surface aspect-16/10">
        <Image
          src={project.image}
          alt="Project screenshot"
          width={1440}
          height={900}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="aspect-16/10 w-full rounded-xl object-cover object-top"
        />
      </div>

      <div className="flex items-center justify-between gap-3">
        <h3 className="m-0 min-w-0 wrap-break-word font-display text-[clamp(1.5rem,3vw,2.125rem)] font-normal text-fg">
          {project.name}
        </h3>

        <div className="flex gap-2">
          {/* Live Demo Button */}
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live demo"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex size-10 items-center justify-center rounded-full border border-border text-muted transition-colors duration-200 hover:border-primary hover:text-primary max-md:size-11"
          >
            <LuExternalLink size={18} aria-hidden="true" />
          </motion.a>

          <motion.a
            href={project.repo}

            target="_blank"
            rel="noopener noreferrer"
            aria-label="Source code"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex size-10 items-center justify-center rounded-full border border-border text-muted transition-colors duration-200 hover:border-primary hover:text-primary max-md:size-11"
          >
            <FaGithub size={20} aria-hidden="true" />
          </motion.a>
        </div>
      </div>

      <p className="m-0 text-[15px] leading-[1.6] text-muted">
        {project.description}
      </p>

      <div className="font-mono text-xs tracking-[1px] text-fg">
        TECHNICAL HIGHLIGHTS
      </div>

      <div className="flex flex-col gap-2 text-[15px] text-muted">
        {project.decisions.map((decision, i) => (
          <span key={i}>· {decision}</span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 border-t border-border pt-3.5">
        {project.stacks.map((stack, i) => (
          <span
            key={i}
            className="rounded-full bg-surface-strong px-2.5 py-1 font-mono text-xs text-muted"
          >
            {stack}
          </span>
        ))}
      </div>
    </motion.article>
  );
};
