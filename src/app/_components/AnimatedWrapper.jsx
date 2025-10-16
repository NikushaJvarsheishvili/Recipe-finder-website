"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnimatedWrapper({ children }) {
  const pathName = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <motion.div
      key={pathName}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}
