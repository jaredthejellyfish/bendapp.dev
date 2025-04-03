"use client";

import { motion } from "motion/react";

type Value = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const CompanyValues = () => {
  const values: Value[] = [
    {
      title: "Human-Centered",
      description:
        "We design with humans at the core, not technology. Everything we build begins with understanding real human needs.",
      icon: (
        <svg
          className="w-8 h-8 text-[#FF333D]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      title: "Adaptable",
      description:
        "Our tools bend to fit your life, adapting to your unique needs and evolving as you do, not the other way around.",
      icon: (
        <svg
          className="w-8 h-8 text-[#FF333D]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
    },
    {
      title: "Transparent",
      description:
        "We believe in clear communication and building open, honest relationships with our users and partners.",
      icon: (
        <svg
          className="w-8 h-8 text-[#FF333D]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Seamless",
      description:
        "We create experiences that work together naturally, eliminating friction and complexity from your digital life.",
      icon: (
        <svg
          className="w-8 h-8 text-[#FF333D]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Ethical",
      description:
        "We develop AI with strong ethical principles, ensuring our technology empowers without exploiting.",
      icon: (
        <svg
          className="w-8 h-8 text-[#FF333D]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Innovative",
      description:
        "We constantly push the boundaries of what's possible, combining creativity with technical excellence.",
      icon: (
        <svg
          className="w-8 h-8 text-[#FF333D]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative py-16">
      {/* Background decoration */}
      <div className="absolute -right-64 top-1/3 w-[500px] h-[500px] rounded-full bg-[#FF333D]/5 blur-[120px] opacity-40" />
      <div className="absolute -left-64 bottom-1/3 w-[400px] h-[400px] rounded-full bg-[#FF333D]/5 blur-[100px] opacity-30" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto px-4"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-3xl md:text-5xl font-bold mb-16 text-center"
        >
          Our Values
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 flex flex-col"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + 0.1 * index }}
                viewport={{ once: true }}
                className="mb-6 bg-white/5 rounded-lg p-3 w-fit"
              >
                {value.icon}
              </motion.div>

              <h3 className="text-white text-xl font-bold mb-3">
                {value.title}
              </h3>
              <p className="text-white/70">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CompanyValues;
