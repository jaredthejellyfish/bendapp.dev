"use client";

import { motion } from "motion/react";

const TestimonialsSection = () => {
  return (
    <motion.section
      id="testimonials"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="mt-32 md:mt-40 relative"
    >
      {/* Raycast floating element for testimonials */}
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [0.98, 1.02, 0.98] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -top-10 right-20 w-24 h-24 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm hidden md:block"
      />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-white text-4xl font-bold mb-12"
      >
        What Our Users Say
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
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {[
          {
            text: "Bend has completely transformed how I manage my life. From tracking my finances to optimizing my workout schedule—it's like having a personal assistant that knows exactly what I need.",
            name: "Jessica Davis",
            role: "Marketing Director & Mother of Two",
            initials: "JD",
            bgColor: "bg-[#FF333D]/20",
          },
          {
            text: "As someone juggling freelance work, personal projects, and a social life, Bend helps me stay organized without feeling overwhelmed. It's not just an app—it's peace of mind.",
            name: "Marcus Santiago",
            role: "Freelance Designer",
            initials: "MS",
            bgColor: "bg-[#56C1FF]/20",
          },
        ].map((testimonial, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
            }}
            whileHover={{ y: -5 }}
            className="bg-[#1A1A1A] p-8 rounded-lg border border-white/10"
          >
            <div className="flex gap-4 mb-6">
              {[...Array(5)].map((_, i) => (
                <motion.svg
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="#FF333D"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 1L13 7L19 8L14.5 13L16 19L10 16L4 19L5.5 13L1 8L7 7L10 1Z" />
                </motion.svg>
              ))}
            </div>
            <p className="text-white/80 text-lg italic mb-6">
              &ldquo;{testimonial.text}&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-full ${testimonial.bgColor} flex items-center justify-center text-white font-bold`}
              >
                {testimonial.initials}
              </div>
              <div>
                <h4 className="text-white font-medium">{testimonial.name}</h4>
                <p className="text-white/60 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default TestimonialsSection;
