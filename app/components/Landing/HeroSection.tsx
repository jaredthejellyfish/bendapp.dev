"use client";

import { motion } from "motion/react";
import { Button } from "~/components/ui/button";
import { Link } from "@tanstack/react-router";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="flex flex-col items-start justify-center min-h-[60vh] relative"
    >
      {/* Hero floating element */}
      <motion.div
        initial={{ opacity: 0, rotate: 6, x: 20 }}
        animate={{ opacity: 0.3, rotate: 12, x: 0 }}
        transition={{
          duration: 2,
          delay: 0.3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute -top-10 -right-10 w-32 h-32 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm hidden md:block"
      />

      {/* Command bar style element in hero */}
      <div className="absolute bottom-0 right-0 w-72 h-16 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm opacity-20 hidden md:block">
        <div className="h-6 w-6 rounded-full bg-[#FF333D]/40 absolute left-4 top-1/2 transform -translate-y-1/2"></div>
        <div className="h-3 w-32 bg-white/10 rounded-full absolute left-14 top-1/2 transform -translate-y-1/2"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-10 relative"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-5xl sm:text-7xl md:text-[100px] font-bold leading-tight tracking-tight"
        >
          <span className="relative">
            <span className="text-[#FF333D]">Bend</span> Better.
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "50%" }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute -bottom-2 left-0 h-1 bg-[#FF333D]"
            ></motion.span>
          </span>
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-5xl sm:text-7xl md:text-[100px] font-bold leading-tight tracking-tight mt-2"
        >
          Live Better.
        </motion.h1>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-white/80 text-xl md:text-2xl max-w-2xl mb-12"
      >
        Your universal life assistant that connects with everything in your
        world—from work to home, finances to fitness, and beyond.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 sm:gap-8"
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            asChild
            className="bg-[#FF333D] text-white hover:bg-[#FF333D]/90 text-lg font-medium py-6 px-7 rounded-md border-0 transition-all hover:shadow-lg hover:shadow-[#FF333D]/20 relative z-10 backdrop-blur-sm"
          >
            <Link to="/sign-in">Get Started</Link>
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="outline"
            asChild
            className="bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white/50 text-lg font-medium rounded-md transition-all backdrop-blur-sm py-6 px-7 "
          >
            <Link to="/about">Learn More</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
