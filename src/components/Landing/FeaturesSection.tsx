"use client";

import { motion } from "motion/react";

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
            icon: (
              <svg
                width="60"
                height="51"
                viewBox="0 0 60 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="60" height="24" rx="12" fill="#FF333D" />
                <rect y="27" width="60" height="24" rx="12" fill="#FF333D" />
              </svg>
            ),
            title: "Universal Integration",
            description:
              "Connect Bend to every aspect of your life—banking, fitness trackers, smart home, calendars, and more.",
          },
          {
            icon: (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="12" fill="white" />
              </svg>
            ),
            bgColor: "bg-[#FF56A9]",
            title: "Personalized Intelligence",
            description:
              "Bend learns your habits, preferences, and goals to provide tailored recommendations and automate routine tasks.",
          },
          {
            icon: (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L22 12L12 22L2 12L12 2Z"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="12" cy="12" r="4" fill="white" />
              </svg>
            ),
            bgColor: "bg-[#56C1FF]",
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
