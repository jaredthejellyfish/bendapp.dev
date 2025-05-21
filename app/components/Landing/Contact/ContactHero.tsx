import { motion } from "motion/react";

const ContactHero = () => {
  return (
    <div className="relative overflow-hidden mb-16">
      {/* Floating elements */}
      <motion.div
        initial={{ opacity: 0, rotate: 15 }}
        animate={{ opacity: 0.3, rotate: 25 }}
        transition={{
          duration: 3,
          delay: 0.2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute -top-10 right-10 w-40 h-40 border border-border/10 rounded-xl bg-background/5 backdrop-blur-sm hidden md:block"
      />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center max-w-3xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-foreground text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight"
          >
            <span className="relative">
              Get in Touch
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "40%" }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute -bottom-2 left-0 right-0 mx-auto h-1 bg-primary"
              ></motion.span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted-foreground text-xl md:text-2xl max-w-2xl mx-auto"
          >
            Have questions about Bend? Ready to transform your digital
            experience? We&apos;d love to hear from you.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactHero;
