"use client";
import Logo from "@/components/page";
import { Button } from "@/components/ui/button";
import { RaycastGradient } from "@/components/RaycastGradient";
import { motion } from "motion/react";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const slideUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <div className="bg-[#121212] min-h-screen relative overflow-hidden">
      <RaycastGradient />

      {/* Floating elements - Raycast style */}
      <motion.div
        initial={{ opacity: 0, rotate: 6 }}
        animate={{ opacity: 0.3, rotate: 12 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-[15%] right-[10%] w-24 h-24 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, rotate: -3 }}
        animate={{ opacity: 0.3, rotate: -6 }}
        transition={{
          duration: 2.5,
          delay: 0.2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-[40%] left-[7%] w-16 h-16 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, rotate: 40 }}
        animate={{ opacity: 0.3, rotate: 45 }}
        transition={{
          duration: 3,
          delay: 0.4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-[20%] right-[15%] w-20 h-20 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm"
      />

      {/* Command bar style element */}
      <div className="absolute top-[25%] left-[20%] w-56 h-14 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm opacity-20 hidden md:block" />

      {/* Code snippet style element */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-[35%] left-[12%] w-44 h-32 border border-white/10 rounded-lg bg-[#1A1A1A]/50 backdrop-blur-sm hidden md:block"
      >
        <div className="h-4 w-32 bg-white/10 rounded-full m-4"></div>
        <div className="h-4 w-24 bg-white/10 rounded-full mx-4 my-2"></div>
        <div className="h-4 w-36 bg-white/10 rounded-full mx-4 my-2"></div>
      </motion.div>

      <div className="max-w-[1200px] mx-auto px-4 py-6 relative">
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex flex-col sm:flex-row items-center justify-between mb-16 sm:mb-32"
        >
          <Logo className="h-10 w-auto mb-6 sm:mb-0" />
          <motion.nav>
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-x-8"
            >
              {["About", "Features", "Testimonials", "Contact"].map((item) => (
                <motion.li key={item} variants={slideUp}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white hover:text-[#FF333D] transition-colors text-lg"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        </motion.header>

        <main>
          <section
            id="hero"
            className="flex flex-col items-start justify-center min-h-[60vh] relative"
          >
            {/* Hero floating element */}
            <motion.div
              initial={{ opacity: 0, rotate: 6, x: 20 }}
              animate={{ opacity: 0.3, rotate: 12, x: 0 }}
              transition={{
                duration: 2,
                delay: 0.3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -top-10 -right-10 w-32 h-32 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm hidden md:block"
            />

            {/* Command bar style element in hero */}
            <div className="absolute bottom-0 right-0 w-72 h-16 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm opacity-20 hidden md:block">
              <div className="h-6 w-6 rounded-full bg-[#FF333D]/40 absolute left-4 top-1/2 transform -translate-y-1/2"></div>
              <div className="h-3 w-32 bg-white/10 rounded-full absolute left-14 top-1/2 transform -translate-y-1/2"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-10 relative"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white text-5xl sm:text-7xl md:text-[100px] font-bold leading-tight tracking-tight"
              >
                <span className="relative">
                  Bend Better.
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "50%" }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="absolute -bottom-2 left-0 h-1 bg-[#FF333D]"
                  ></motion.span>
                </span>
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white text-5xl sm:text-7xl md:text-[100px] font-bold leading-tight tracking-tight mt-2"
              >
                Live Better.
              </motion.h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/80 text-xl md:text-2xl max-w-2xl mb-12"
            >
              Your universal life assistant that connects with everything in
              your world—from work to home, finances to fitness, and beyond.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-[#FF333D] text-white hover:bg-[#FF333D]/90 px-8 py-4 text-lg font-medium rounded-md border-0 transition-all hover:shadow-lg hover:shadow-[#FF333D]/20 relative z-10 backdrop-blur-sm">
                  Get Started
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white/50 px-8 py-4 text-lg font-medium rounded-md transition-all backdrop-blur-sm"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            id="about"
            className="mt-32 md:mt-40 relative"
          >
            {/* Raycast floating element for about section */}
            <div className="absolute -top-20 -right-20 w-40 h-40 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm -rotate-12 opacity-20 hidden md:block" />

            <div className="flex flex-col md:flex-row gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="md:w-1/2"
              >
                <h2 className="text-white text-4xl font-bold mb-8">
                  About Bend
                </h2>
                <p className="text-white/80 text-lg mb-6">
                  Bend is your all-in-one life assistant that simplifies
                  everything from managing finances to organizing your home,
                  tracking fitness goals, and streamlining your work.
                </p>
                <p className="text-white/80 text-lg">
                  Our mission is to give you back control over all aspects of
                  your life by bending technology to work for you, not the other
                  way around.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="md:w-1/2 flex justify-center"
              >
                <div className="relative">
                  <motion.div
                    animate={{ opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -inset-1 bg-gradient-to-r from-[#FF333D] to-[#FF56A9] rounded-lg blur opacity-30"
                  ></motion.div>
                  <div className="relative bg-[#1A1A1A] p-8 rounded-lg">
                    <motion.div
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                      {[
                        { color: "[#FF333D]", text: "Finances handled ✓" },
                        { color: "[#56C1FF]", text: "Health optimized ✓" },
                        { color: "[#FF56A9]", text: "Life organized ✓" },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          variants={slideUp}
                          className="flex items-center gap-3"
                        >
                          <div
                            className={`w-10 h-10 rounded-full bg-${item.color}/20 flex items-center justify-center`}
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M21 6H3C2.4 6 2 6.4 2 7V17C2 17.6 2.4 18 3 18H21C21.6 18 22 17.6 22 17V7C22 6.4 21.6 6 21 6Z"
                                stroke="white"
                                strokeWidth="2"
                              />
                              <path
                                d="M16 14H18"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                              <path
                                d="M12 14H14"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                              <path
                                d="M8 14H10"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                              <path
                                d="M4 14H6"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                              <path
                                d="M2 10H22"
                                stroke="white"
                                strokeWidth="2"
                              />
                            </svg>
                          </div>
                          <span className="text-white/90">{item.text}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>

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
              variants={staggerContainer}
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
                      <rect
                        y="27"
                        width="60"
                        height="24"
                        rx="12"
                        fill="#FF333D"
                      />
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
                  variants={slideUp}
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

          <motion.section
            id="why-bend"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-32 flex flex-col md:flex-row items-center gap-8 md:gap-16"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h2 className="text-white text-4xl font-bold mb-8">Why Bend?</h2>
              <p className="text-white/80 text-lg mb-4">
                Bend provides a cohesive solution that brings together all
                aspects of your life in one place.
              </p>
              <p className="text-white/80 text-lg mb-6">
                Our platform adapts to your unique lifestyle and empowers you to
                take back control of your time and priorities.
              </p>
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="list-disc list-inside text-white/80 text-lg space-y-2 pl-4"
              >
                {[
                  "Save up to 10 hours weekly on routine tasks",
                  "Reduce financial waste through intelligent tracking",
                  "Achieve your personal and professional goals faster",
                ].map((item, index) => (
                  <motion.li key={index} variants={slideUp}>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:flex-1 flex justify-center"
            >
              <motion.svg
                whileHover={{ scale: 1.05 }}
                width="167"
                height="196"
                viewBox="0 0 167 196"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[250px] md:max-w-none"
              >
                <motion.path
                  initial={{ pathLength: 0, fill: "rgba(255, 51, 61, 0)" }}
                  whileInView={{ pathLength: 1, fill: "rgba(255, 51, 61, 1)" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  d="M0 20C0 8.9543 8.9543 0 20 0H103C127.853 0 148 20.1472 148 45C148 69.8528 127.853 90 103 90H20C8.9543 90 0 81.0457 0 70V20Z"
                />
                <motion.path
                  initial={{ pathLength: 0, fill: "rgba(255, 51, 61, 0)" }}
                  whileInView={{ pathLength: 1, fill: "rgba(255, 51, 61, 1)" }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  d="M0 120C0 108.954 8.95431 100 20 100H122C146.853 100 167 120.147 167 145V151C167 175.853 146.853 196 122 196H20C8.9543 196 0 187.046 0 176V120Z"
                />
              </motion.svg>
            </motion.div>
          </motion.section>

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
              variants={staggerContainer}
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
                  variants={slideUp}
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
                      <h4 className="text-white font-medium">
                        {testimonial.name}
                      </h4>
                      <p className="text-white/60 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-32 md:mt-40 grid grid-cols-1 md:grid-cols-3 gap-8 relative"
          >
            {/* Raycast floating element for this section */}
            <motion.div
              animate={{ opacity: [0.1, 0.2, 0.1], rotate: [10, 14, 10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 left-[40%] w-16 h-16 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm opacity-20 hidden md:block"
            />

            {[
              {
                icon: (
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="#FF333D"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM5 19V5H11V19H5ZM19 19H13V12H19V19ZM19 10H13V5H19V10Z" />
                  </svg>
                ),
                bgColor: "bg-[#FF333D]/10",
                title: "Financial Wellness",
                description:
                  "Track expenses, optimize investments, and receive personalized financial advice based on your goals and spending habits.",
              },
              {
                icon: (
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="#56C1FF"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3ZM4 19V5H11V19H4ZM20 19H13V12H20V19ZM20 10H13V5H20V10Z" />
                  </svg>
                ),
                bgColor: "bg-[#56C1FF]/10",
                title: "Health & Wellness",
                description:
                  "Integrate with fitness trackers, nutrition apps, and sleep monitors to optimize your physical and mental wellbeing.",
              },
              {
                icon: (
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="#FF56A9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM5 19V5H11V19H5ZM19 19H13V12H19V19ZM19 10H13V5H19V10Z" />
                  </svg>
                ),
                bgColor: "bg-[#FF56A9]/10",
                title: "Home & Life Management",
                description:
                  "Control smart home devices, manage shopping lists, plan meals, and organize household tasks effortlessly.",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                viewport={{ once: true }}
                className="bg-[#1A1A1A] p-8 rounded-lg border border-white/5 backdrop-blur-sm relative"
              >
                <div
                  className={`w-14 h-14 ${card.bgColor} rounded-xl flex items-center justify-center mb-6`}
                >
                  {card.icon}
                </div>
                <h3 className="text-white text-xl font-bold mb-3">
                  {card.title}
                </h3>
                <p className="text-white/80">{card.description}</p>
              </motion.div>
            ))}
          </motion.section>

          <motion.section
            id="cta"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-32 mb-16 bg-gradient-to-r from-[#1A1A1A] to-[#232323] p-10 rounded-xl border border-white/5 relative overflow-hidden"
          >
            {/* Raycast style elements for CTA */}
            <motion.div
              animate={{
                rotate: [10, 14, 10],
                x: [0, 5, 0],
                y: [0, -5, 0],
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-0 right-0 w-32 h-32 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm rotate-12 opacity-10"
            />
            <motion.div
              animate={{
                rotate: [-10, -14, -10],
                x: [0, -5, 0],
                y: [0, 5, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-0 left-0 w-24 h-24 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm -rotate-12 opacity-10"
            />

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-white text-4xl md:text-5xl font-bold mb-4 relative z-10"
            >
              Unf*ck your life.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-white/80 text-xl mb-10 max-w-2xl relative z-10"
            >
              Take control, bend technology to your will, and build a better
              life. Join thousands who are simplifying their world with Bend.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center gap-4 relative z-10"
            >
              <motion.input
                whileFocus={{ scale: 1.02, borderColor: "#FF333D" }}
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border border-white/30 text-white px-4 py-3 rounded-md w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-[#FF333D] focus:border-transparent transition-all"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-[#FF333D] text-white hover:bg-[#FF333D]/90 px-6 py-3 text-base font-medium rounded-md border-0 w-full sm:w-auto transition-all hover:shadow-lg hover:shadow-[#FF333D]/20">
                  Let&apos;s Bend it
                </Button>
              </motion.div>
            </motion.div>
          </motion.section>
        </main>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-32 border-t border-white/10 pt-8 pb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center gap-6"
            >
              <Logo className="h-8 w-auto" />
              <div className="flex gap-4">
                {[
                  {
                    path: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z",
                  },
                  {
                    path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                  },
                  {
                    path: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z",
                  },
                ].map((icon, index) => (
                  <motion.a
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    whileHover={{ y: -3, color: "#FF333D" }}
                    href="#"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d={icon.path} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-white/60 text-sm"
            >
              © 2024 Bend. All rights reserved.
            </motion.div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
