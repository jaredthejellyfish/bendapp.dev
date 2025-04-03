"use client";

import { motion } from "motion/react";
import React from "react";

function CodeSnippetElement() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 0.2, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="absolute bottom-[35%] left-[12%] w-44 h-32 border border-white/10 rounded-lg bg-[#1A1A1A]/50 backdrop-blur-sm hidden md:block"
    >
      <div className="h-4 w-32 bg-white/10 rounded-full m-4"></div>
      <div className="h-4 w-24 bg-white/10 rounded-full mx-4 my-2"></div>
      <div className="h-4 w-36 bg-white/10 rounded-full mx-4 my-2"></div>
    </motion.div>
  );
}

export default CodeSnippetElement;
