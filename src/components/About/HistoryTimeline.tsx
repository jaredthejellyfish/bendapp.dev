"use client";

import { motion, useScroll } from "motion/react";
import { useRef } from "react";

type TimelineEvent = {
  year: string;
  title: string;
  description: string;
};

const timelineEvents: TimelineEvent[] = [
  {
    year: "2021",
    title: "The Beginning",
    description:
      "Bend was founded with a simple mission: create technology that adapts to people, not the other way around.",
  },
  {
    year: "2022",
    title: "First Prototype",
    description:
      "We launched our first AI prototype, demonstrating how technology could understand and anticipate human needs.",
  },
  {
    year: "2023",
    title: "Series A Funding",
    description:
      "Secured $12M in funding to expand our team and accelerate development of our core platform.",
  },
  {
    year: "2024",
    title: "Public Beta",
    description:
      "Launched our public beta, bringing Bend's technology to thousands of early users around the world.",
  },
  {
    year: "Today",
    title: "Looking Forward",
    description:
      "We're expanding our platform and bringing Bend to more people, with exciting new features on the horizon.",
  },
];

const HistoryTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section className="relative mb-16" ref={containerRef}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white text-3xl md:text-5xl font-bold mb-16 text-center"
      >
        Our Journey
      </motion.h2>

      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/10 z-0 top-32"></div>

      <div className="relative z-10">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={event.year}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 * index }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex items-center mb-32 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } relative`}
          >
            {/* Year badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
              viewport={{ once: true }}
              className="absolute left-1/2 transform -translate-x-1/2 z-20 bg-[#FF333D] text-white font-bold py-2 px-4 rounded-lg shadow-lg"
            >
              {event.year}
            </motion.div>

            {/* Content */}
            <div
              className={`w-full md:w-5/12 ${
                index % 2 === 0 ? "pr-16 md:text-right" : "pl-16"
              }`}
            >
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10"
              >
                <h3 className="text-white text-2xl font-bold mb-4">
                  {event.title}
                </h3>
                <p className="text-white/70">{event.description}</p>
              </motion.div>
            </div>

            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#FF333D] rounded-full border-4 border-[#121212] z-10"></div>

            {/* Empty space for the other side */}
            <div className="w-full md:w-5/12"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HistoryTimeline;
