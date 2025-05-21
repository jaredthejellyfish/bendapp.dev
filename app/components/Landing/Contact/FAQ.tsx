"use client";

import { motion } from "motion/react";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "What is Bend and how can it help me?",
      answer:
        "Bend is a universal life assistant that adapts to your unique needs, bringing together all aspects of your digital life. It helps you manage work, home, finances, health, and more in one intuitive platform, saving you time and reducing complexity.",
    },
    {
      question: "Is Bend available on all devices?",
      answer:
        "Yes! Bend works seamlessly across desktop, mobile, and tablet devices. Your experience and data synchronize automatically, so you can access everything wherever you are.",
    },
    {
      question: "How secure is my data with Bend?",
      answer:
        "Security is a top priority at Bend. We use industry-leading encryption, secure cloud storage, and strict access controls. We never sell your data, and you maintain complete control over what information Bend can access and use.",
    },
    {
      question: "Do I need to be tech-savvy to use Bend?",
      answer:
        "Not at all! Bend is designed to be intuitive and easy to use for everyone. Our AI adapts to your preferences and simplifies complex tasks, making technology more accessible regardless of your technical expertise.",
    },
    {
      question: "Can I try Bend before subscribing?",
      answer:
        "Absolutely! We offer a 14-day free trial that gives you full access to all of Bend's features. No credit card required to start—just sign up and experience how Bend can transform your digital life.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative py-16">
      {/* Background effect */}
      <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] opacity-30 -z-10" />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-foreground text-3xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Can&apos;t find what you&apos;re looking for? Contact our team for
            personalized assistance.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white/5 backdrop-blur-sm border border-border/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => {
                  toggleFAQ(index);
                }}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="text-foreground font-medium text-lg">
                  {item.question}
                </span>
                <span className="flex-shrink-0 ml-4">
                  <motion.svg
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-5 h-5 text-muted-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </span>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-muted-foreground">
                  {item.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
