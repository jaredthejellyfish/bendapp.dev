import { motion } from "motion/react";

const MissionStatement = () => {
  return (
    <section className="relative mb-16">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] opacity-60" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center max-w-4xl mx-auto relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-foreground text-3xl md:text-5xl font-bold mb-10"
        >
          Our Mission
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-border/10 relative"
        >
          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-r-2xl">
            <div className="absolute top-0 right-0 w-14 h-14 transform rotate-45 translate-x-1/2 -translate-y-1/2 bg-primary/30"></div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-foreground/90 text-xl md:text-2xl font-medium italic mb-8"
          >
            &ldquo;To empower people to bend technology to their lives, not the
            other way around.&rdquo;
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-muted-foreground text-lg md:text-xl space-y-6"
          >
            <p>
              We&apos;re on a mission to create technology that adapts to you,
              understanding your unique needs and goals. By integrating AI
              seamlessly into your life, we help you reclaim your time, focus,
              and well-being.
            </p>
            <p>
              Our vision is a world where technology serves humanity&apos;s
              highest aspirations—enhancing creativity, connection, and meaning
              in everyday life.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MissionStatement;
