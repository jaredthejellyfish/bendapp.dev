"use client";

import { motion } from "motion/react";
import { Button } from "~/components/ui/button";

const ContactCTA = () => {
  return (
    <div className="relative py-20">
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 0.2, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute -z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#FF333D]/20 to-purple-600/20 blur-[80px]"
      />

      <motion.div
        initial={{ opacity: 0, rotate: 45, scale: 0.8 }}
        whileInView={{ opacity: 0.1, rotate: 0, scale: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="absolute -z-10 w-96 h-96 border border-white/10 rounded-3xl left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />

      <motion.div
        initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
        whileInView={{ opacity: 0.1, rotate: 0, scale: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="absolute -z-10 w-96 h-96 border border-white/10 rounded-3xl right-1/4 top-1/2 transform translate-x-1/2 -translate-y-1/2"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm p-10 md:p-16 rounded-2xl border border-white/10"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Bend Technology to Your Life?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Let&apos;s start a conversation about how Bend can transform your
            digital experience and help you live better.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-[#FF333D] text-white hover:bg-[#FF333D]/90 px-8 py-6 text-lg font-medium rounded-md border-0 transition-all hover:shadow-lg hover:shadow-[#FF333D]/20">
                Schedule a Demo
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white/50 px-8 py-6 text-lg font-medium rounded-md transition-all"
              >
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactCTA;
