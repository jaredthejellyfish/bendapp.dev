import { motion } from "motion/react";

const Introduction = () => {
  return (
    <section className="relative overflow-hidden mb-16">
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-foreground text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight"
          >
            <span className="relative">
              About Bend
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "40%" }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute -bottom-2 left-0 h-1 bg-primary"
              ></motion.span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted-foreground text-xl md:text-2xl max-w-3xl"
          >
            We&apos;re building the universal life assistant that brings
            together every aspect of your world—empowering you to unlock your
            full potential.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 "
        >
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-border/10">
            <h3 className="text-foreground text-2xl font-bold mb-4">
              Our Philosophy
            </h3>
            <p className="text-muted-foreground">
              At Bend, we believe that life shouldn&apos;t be complicated.
              Technology should adapt to you, not the other way around.
              We&apos;re here to simplify your life through thoughtful,
              integrated solutions that bend to fit your needs.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-border/10">
            <h3 className="text-foreground text-2xl font-bold mb-4">
              Our Approach
            </h3>
            <p className="text-muted-foreground">
              We combine cutting-edge AI with intuitive design to create tools
              that understand how you work, think, and live. Bend adapts to your
              unique needs, helping you make better decisions and live a more
              fulfilling life.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;
