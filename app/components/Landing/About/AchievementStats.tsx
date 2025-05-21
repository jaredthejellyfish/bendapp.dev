import { motion, useScroll } from "motion/react";
import { useRef, useState, useEffect } from "react";

type Stat = {
  label: string;
  value: number;
  suffix: string;
  duration: number;
};

const AchievementStats = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [isInView, setIsInView] = useState(false);

  // Define our stats
  const stats: Stat[] = [
    {
      label: "Users Worldwide",
      value: 85000,
      suffix: "+",
      duration: 2.5,
    },
    {
      label: "Hours Saved",
      value: 2.5,
      suffix: "M+",
      duration: 3,
    },
    {
      label: "Satisfaction Rate",
      value: 98,
      suffix: "%",
      duration: 2,
    },
    {
      label: "Average Productivity Boost",
      value: 42,
      suffix: "%",
      duration: 2.8,
    },
  ];

  // Set isInView when component scrolls into view
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      if (value > 0) {
        setIsInView(true);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [scrollYProgress]);

  // Animated counter component
  const Counter = ({ stat }: { stat: Stat }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isInView) return;

      let startTime: number;
      let rafId: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (stat.duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(progress * stat.value));
          rafId = requestAnimationFrame(animate);
        } else {
          setCount(stat.value);
        }
      };

      rafId = requestAnimationFrame(animate);

      return () => {
        cancelAnimationFrame(rafId);
      };
    }, [stat.value, stat.duration]);

    return (
      <span className="text-foreground">
        {count}
        {stat.suffix}
      </span>
    );
  };

  return (
    <div ref={containerRef} className="relative py-16">
      {/* Background decoration - replacing the gradient with radial glows */}
      <div className="absolute w-full h-full overflow-hidden">
        <div className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px] opacity-40" />
        <div className="absolute right-1/4 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px] opacity-40" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto px-4"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-foreground text-3xl md:text-5xl font-bold mb-16 text-center"
        >
          Impact by the Numbers
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-border/10 text-center"
            >
              <motion.h3
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + 0.1 * index,
                  type: "spring",
                  bounce: 0.4,
                }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
              >
                {isInView ? <Counter stat={stat} /> : "0"}
              </motion.h3>

              <p className="text-muted-foreground text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AchievementStats;
