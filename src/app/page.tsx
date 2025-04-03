import Logo from "@/components/page";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-[#121212] min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 py-6">
        <header className="flex flex-col sm:flex-row items-center justify-between mb-16 sm:mb-32">
          <Logo className="h-10 w-auto mb-6 sm:mb-0" />
          <nav>
            <ul className="flex items-center gap-x-8">
              <li>
                <a
                  href="#about"
                  className="text-white hover:text-[#FF333D] transition-colors text-lg"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-white hover:text-[#FF333D] transition-colors text-lg"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-white hover:text-[#FF333D] transition-colors text-lg"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white hover:text-[#FF333D] transition-colors text-lg"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <section
            id="hero"
            className="flex flex-col items-start justify-center min-h-[60vh]"
          >
            <div className="mb-10">
              <h1 className="text-white text-5xl sm:text-7xl md:text-[100px] font-bold leading-tight tracking-tight">
                <span className="relative">
                  Bend Better.
                  <span className="absolute -bottom-2 left-0 h-1 w-1/2 bg-[#FF333D]"></span>
                </span>
              </h1>
              <h1 className="text-white text-5xl sm:text-7xl md:text-[100px] font-bold leading-tight tracking-tight mt-2">
                Live Better.
              </h1>
            </div>
            <p className="text-white/80 text-xl md:text-2xl max-w-2xl mb-12">
              Your universal life assistant that connects with everything in
              your world—from work to home, finances to fitness, and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <Button className="bg-[#FF333D] text-white hover:bg-[#FF333D]/90 px-8 py-4 text-lg font-medium rounded-md border-0 transition-all hover:shadow-lg hover:shadow-[#FF333D]/20">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white/50 px-8 py-4 text-lg font-medium rounded-md transition-all"
              >
                Learn More
              </Button>
            </div>
          </section>

          <section id="about" className="mt-32 md:mt-40">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
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
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#FF333D] to-[#FF56A9] rounded-lg blur opacity-30"></div>
                  <div className="relative bg-[#1A1A1A] p-8 rounded-lg">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#FF333D]/20 flex items-center justify-center">
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
                            <path d="M2 10H22" stroke="white" strokeWidth="2" />
                          </svg>
                        </div>
                        <span className="text-white/90">
                          Finances handled ✓
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#56C1FF]/20 flex items-center justify-center">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <span className="text-white/90">
                          Health optimized ✓
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#FF56A9]/20 flex items-center justify-center">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 2L2 7L12 12L22 7L12 2Z"
                              stroke="white"
                              strokeWidth="2"
                            />
                            <path
                              d="M2 17L12 22L22 17"
                              stroke="white"
                              strokeWidth="2"
                            />
                            <path
                              d="M2 12L12 17L22 12"
                              stroke="white"
                              strokeWidth="2"
                            />
                          </svg>
                        </div>
                        <span className="text-white/90">Life organized ✓</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="mt-32 md:mt-40">
            <h2 className="text-white text-4xl font-bold mb-8">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#1A1A1A] p-6 rounded-lg transform hover:scale-105 transition-all hover:shadow-lg hover:shadow-[#FF333D]/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg mb-5 flex items-center justify-center">
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
                  </div>
                  <h3 className="text-white text-xl font-bold mb-3">
                    Universal Integration
                  </h3>
                </div>
                <p className="text-white/80">
                  Connect Bend to every aspect of your life—banking, fitness
                  trackers, smart home, calendars, and more.
                </p>
              </div>

              <div className="bg-[#1A1A1A] p-6 rounded-lg transform hover:scale-105 transition-all hover:shadow-lg hover:shadow-[#FF56A9]/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FF56A9] rounded-lg mb-5 flex items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="12" fill="white" />
                    </svg>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-3">
                    Personalized Intelligence
                  </h3>
                </div>
                <p className="text-white/80">
                  Bend learns your habits, preferences, and goals to provide
                  tailored recommendations and automate routine tasks.
                </p>
              </div>

              <div className="bg-[#1A1A1A] p-6 rounded-lg transform hover:scale-105 transition-all hover:shadow-lg hover:shadow-[#56C1FF]/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#56C1FF] rounded-lg mb-5 flex items-center justify-center">
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
                  </div>
                  <h3 className="text-white text-xl font-bold mb-3">
                    Privacy-First Design
                  </h3>
                </div>
                <p className="text-white/80">
                  Your data stays yours with end-to-end encryption and granular
                  control over what information Bend can access.
                </p>
              </div>
            </div>
          </section>

          <section
            id="why-bend"
            className="mt-32 flex flex-col md:flex-row items-center gap-8 md:gap-16"
          >
            <div className="flex-1">
              <h2 className="text-white text-4xl font-bold mb-8">Why Bend?</h2>
              <p className="text-white/80 text-lg mb-4">
                Bend provides a cohesive solution that brings together all
                aspects of your life in one place.
              </p>
              <p className="text-white/80 text-lg mb-6">
                Our platform adapts to your unique lifestyle and empowers you to
                take back control of your time and priorities.
              </p>
              <ul className="list-disc list-inside text-white/80 text-lg space-y-2 pl-4">
                <li>Save up to 10 hours weekly on routine tasks</li>
                <li>Reduce financial waste through intelligent tracking</li>
                <li>Achieve your personal and professional goals faster</li>
              </ul>
            </div>
            <div className="md:flex-1 flex justify-center">
              <svg
                width="167"
                height="196"
                viewBox="0 0 167 196"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[250px] md:max-w-none"
              >
                <path
                  d="M0 20C0 8.9543 8.9543 0 20 0H103C127.853 0 148 20.1472 148 45C148 69.8528 127.853 90 103 90H20C8.9543 90 0 81.0457 0 70V20Z"
                  fill="#FF333D"
                />
                <path
                  d="M0 120C0 108.954 8.95431 100 20 100H122C146.853 100 167 120.147 167 145V151C167 175.853 146.853 196 122 196H20C8.9543 196 0 187.046 0 176V120Z"
                  fill="#FF333D"
                />
              </svg>
            </div>
          </section>

          <section id="testimonials" className="mt-32 md:mt-40">
            <h2 className="text-white text-4xl font-bold mb-12">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#1A1A1A] p-8 rounded-lg border border-white/10">
                <div className="flex gap-4 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="#FF333D"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 1L13 7L19 8L14.5 13L16 19L10 16L4 19L5.5 13L1 8L7 7L10 1Z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/80 text-lg italic mb-6">
                  &ldquo;Bend has completely transformed how I manage my life.
                  From tracking my finances to optimizing my workout
                  schedule—it&apos;s like having a personal assistant that knows
                  exactly what I need.&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FF333D]/20 flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Jessica Davis</h4>
                    <p className="text-white/60 text-sm">
                      Marketing Director & Mother of Two
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A] p-8 rounded-lg border border-white/10">
                <div className="flex gap-4 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="#FF333D"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 1L13 7L19 8L14.5 13L16 19L10 16L4 19L5.5 13L1 8L7 7L10 1Z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/80 text-lg italic mb-6">
                  &ldquo;As someone juggling freelance work, personal projects,
                  and a social life, Bend helps me stay organized without
                  feeling overwhelmed. It&apos;s not just an app—it&apos;s peace
                  of mind.&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#56C1FF]/20 flex items-center justify-center text-white font-bold">
                    MS
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Marcus Santiago</h4>
                    <p className="text-white/60 text-sm">Freelance Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-32 md:mt-40 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-white/5">
              <div className="w-14 h-14 bg-[#FF333D]/10 rounded-xl flex items-center justify-center mb-6">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="#FF333D"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM5 19V5H11V19H5ZM19 19H13V12H19V19ZM19 10H13V5H19V10Z" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-bold mb-3">
                Financial Wellness
              </h3>
              <p className="text-white/80">
                Track expenses, optimize investments, and receive personalized
                financial advice based on your goals and spending habits.
              </p>
            </div>

            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-white/5">
              <div className="w-14 h-14 bg-[#56C1FF]/10 rounded-xl flex items-center justify-center mb-6">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="#56C1FF"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3ZM4 19V5H11V19H4ZM20 19H13V12H20V19ZM20 10H13V5H20V10Z" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-bold mb-3">
                Health & Wellness
              </h3>
              <p className="text-white/80">
                Integrate with fitness trackers, nutrition apps, and sleep
                monitors to optimize your physical and mental wellbeing.
              </p>
            </div>

            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-white/5">
              <div className="w-14 h-14 bg-[#FF56A9]/10 rounded-xl flex items-center justify-center mb-6">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="#FF56A9"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM5 19V5H11V19H5ZM19 19H13V12H19V19ZM19 10H13V5H19V10Z" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-bold mb-3">
                Home & Life Management
              </h3>
              <p className="text-white/80">
                Control smart home devices, manage shopping lists, plan meals,
                and organize household tasks effortlessly.
              </p>
            </div>
          </section>

          <section
            id="cta"
            className="mt-32 mb-16 bg-gradient-to-r from-[#1A1A1A] to-[#232323] p-10 rounded-xl border border-white/5"
          >
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Unf*ck your life.
            </h2>
            <p className="text-white/80 text-xl mb-10 max-w-2xl">
              Take control, bend technology to your will, and build a better
              life. Join thousands who are simplifying their world with Bend.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border border-white/30 text-white px-4 py-3 rounded-md w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-[#FF333D] focus:border-transparent transition-all"
              />
              <Button className="bg-[#FF333D] text-white hover:bg-[#FF333D]/90 px-6 py-3 text-base font-medium rounded-md border-0 w-full sm:w-auto transition-all hover:shadow-lg hover:shadow-[#FF333D]/20">
                Let&apos;s Bend it
              </Button>
            </div>
          </section>
        </main>

        <footer className="mt-32 border-t border-white/10 pt-8 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <Logo className="h-8 w-auto" />
              <div className="flex gap-4">
                <a
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
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </a>
                <a
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
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
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
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="text-white/60 text-sm">
              © 2024 Bend. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
