"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LuArrowUp } from "react-icons/lu";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { Icon: FaGithub, href: "https://github.com/devTetra", label: "GitHub" },
    {
      Icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/treasure-ejike/",
      label: "LinkedIn",
    },
  ];

  return (
    <>
      <footer className="mx-auto mt-auto mb-8 flex w-full max-w-6xl items-center justify-between border-t border-border px-6 pt-5 text-[13px] text-muted min-[768px]:px-16 max-md:mb-7 max-md:pt-4.5">
        <span>© 2026 Treasure Ejike</span>

        <div className="flex gap-4 max-md:gap-5">
          {socialLinks.map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted transition-colors duration-200 hover:text-primary"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Icon size={20} aria-hidden="true" />
            </motion.a>
          ))}
        </div>
      </footer>

      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed right-6 cursor-pointer bottom-16  z-40 flex size-12 items-center justify-center rounded-full border border-border bg-bg/90 text-fg shadow-lg backdrop-blur-md transition-colors duration-200 hover:bg-surface hover:text-primary md:right-10 lg:bottom-10"
            aria-label="Back to top"
          >
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <LuArrowUp size={20} aria-hidden="true" />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};
