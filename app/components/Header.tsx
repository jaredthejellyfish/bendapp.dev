"use client";

import { motion } from "motion/react";
import Logo from "./Logo";
import { Link } from "@tanstack/react-router";
import { cn } from "~/lib/utils";
import { useRouterState } from "@tanstack/react-router";
import { isNotFound } from "@tanstack/react-router";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

const Header = () => {
  const router = useRouterState();
  const pathname = router.location.pathname;

  if (isNotFound(router.matches[0])) {
    return null;
  }

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.6 } },
      }}
      className="flex flex-col sm:flex-row items-center justify-between mb-16 sm:mb-32"
    >
      <Logo className="h-10 w-auto mb-6 sm:mb-0" />
      <motion.nav>
        <motion.ul
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-x-8"
        >
          {links.map((link) => (
            <motion.li
              key={link.label}
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
              }}
            >
              <Link
                to={link.href}
                className={cn(
                  "text-white hover:text-[#FF333D] transition-colors text-lg",
                  pathname === link.href && "text-[#FF333D]"
                )}
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
