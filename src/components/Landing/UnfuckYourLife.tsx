"use client";

import { motion } from "motion/react";
import React from "react";
import { Button } from "@/components/ui/button";

function UnfuckYourLife() {
  return (
    <motion.section
      id="cta"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-32 mb-16 bg-gradient-to-r from-[#1A1A1A] to-[#232323] p-10 rounded-xl border border-white/5 relative overflow-hidden"
    >
      {/* Raycast style elements for CTA */}
      <motion.div
        animate={{
          rotate: [10, 14, 10],
          x: [0, 5, 0],
          y: [0, -5, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-32 h-32 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm rotate-12 opacity-10"
      />
      <motion.div
        animate={{
          rotate: [-10, -14, -10],
          x: [0, -5, 0],
          y: [0, 5, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 0.5 }}
        className="absolute bottom-0 left-0 w-24 h-24 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm -rotate-12 opacity-10"
      />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-white text-4xl md:text-5xl font-bold mb-4 relative z-10"
      >
        Unf*ck your life.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-white/80 text-xl mb-10 max-w-2xl relative z-10"
      >
        Take control, bend technology to your will, and build a better life.
        Join thousands who are simplifying their world with Bend.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row items-center gap-4 relative z-10"
      >
        <motion.input
          whileFocus={{ scale: 1.02, borderColor: "#FF333D" }}
          type="email"
          placeholder="Enter your email"
          className="bg-transparent border border-white/30 text-white px-4 py-3 rounded-md w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-[#FF333D] focus:border-transparent transition-all"
        />
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button className="bg-[#FF333D] text-white hover:bg-[#FF333D]/90 px-6 py-3 text-base font-medium rounded-md border-0 w-full sm:w-auto transition-all hover:shadow-lg hover:shadow-[#FF333D]/20">
            Let&apos;s Bend it
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default UnfuckYourLife;
