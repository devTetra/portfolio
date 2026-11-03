import { motion } from "motion/react";
type SkillGroupProps = {
  title: string;
  items: string[];
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
} as const;

export const SkillGroup = ({ title, items }: SkillGroupProps) => {
  return (
    <motion.div variants={itemVariants}>
      <div className="mb-3 font-mono text-xs tracking-[1px] text-fg max-md:mb-2">
        {title}
      </div>
      <div className="flex flex-col gap-2 text-[15px]">
        {items.map((item) => (
          <motion.span
            key={item}
            whileHover={{ x: 4 }}
            transition={{
              type: "spring" as const,
              stiffness: 400,
              damping: 20,
            }}
            className="cursor-default text-muted transition-colors duration-200 hover:text-fg"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};
