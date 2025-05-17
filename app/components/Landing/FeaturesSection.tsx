"use client";

import { Brain, Lock } from "lucide-react";
import { motion } from "motion/react";
import Icon from "../Icon";
const FeaturesSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      id="features"
      className="mt-32 md:mt-40 relative"
    >
      {/* Raycast floating element for features section */}
      <motion.div
        initial={{ opacity: 0, rotate: 6, y: -10 }}
        animate={{ opacity: 0.2, rotate: 12, y: 0 }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-10 -left-10 w-28 h-28 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm hidden md:block"
      />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-white text-4xl font-bold mb-8"
      >
        Features
      </motion.h2>
      <motion.div
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
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {[
          {
            icon: <Icon className="w-6 h-6 fill-white" />,
            title: "Universal Integration",
            bgColor: "bg-[#FF333D]",
            description:
              "Connect Bend to every aspect of your life—banking, fitness trackers, smart home, calendars, and more.",
          },
          {
            icon: <Brain className="w-6 h-6 text-white" />,
            bgColor: "bg-[#6C40FA]",
            title: "Personalized Intelligence",
            description:
              "Bend learns your habits, preferences, and goals to provide tailored recommendations and automate routine tasks.",
          },
          {
            icon: <Lock className="w-6 h-6 text-white" />,
            bgColor: "bg-[#20EDC5]/70",
            title: "Privacy-First Design",
            description:
              "Your data stays yours with end-to-end encryption and granular control over what information Bend can access.",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-[#1A1A1A] p-6 rounded-lg hover:shadow-lg hover:shadow-[#FF333D]/10"
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 ${
                  feature.bgColor || ""
                } rounded-lg mb-5 flex items-center justify-center`}
              >
                {feature.icon}
              </div>
              <h3 className="text-white text-xl font-bold mb-3">
                {feature.title}
              </h3>
            </div>
            <p className="text-white/80">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default FeaturesSection;
