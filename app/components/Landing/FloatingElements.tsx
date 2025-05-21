import { motion } from "motion/react";

const FloatingElements = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, rotate: 6 }}
        animate={{ opacity: 0.3, rotate: 12 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-[15%] right-[10%] w-24 h-24 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, rotate: -3 }}
        animate={{ opacity: 0.3, rotate: -6 }}
        transition={{
          duration: 2.5,
          delay: 0.2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-[40%] left-[7%] w-16 h-16 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, rotate: 40 }}
        animate={{ opacity: 0.3, rotate: 45 }}
        transition={{
          duration: 3,
          delay: 0.4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-[20%] right-[15%] w-20 h-20 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 0.3, rotate: 12 }}
        transition={{
          duration: 3,
          delay: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-[25%] left-[20%] w-56 h-14 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm opacity-20 hidden md:block"
      />
    </>
  );
};

export default FloatingElements;
