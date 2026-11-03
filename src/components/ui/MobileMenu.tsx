import { motion, AnimatePresence } from "motion/react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const links = [
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute top-full left-0 mt-3 w-full rounded-2xl border border-border bg-bg/95 p-2 shadow-xl backdrop-blur-md md:hidden"
        >
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={`#${link.name.toLowerCase()}`}
                onClick={onClose}
                className="rounded-xl px-4 py-3 text-sm font-medium text-fg transition-colors duration-200 hover:bg-surface hover:text-primary"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
