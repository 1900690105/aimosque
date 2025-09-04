import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";

export default function HomeMain() {
  const boxVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const scaleOnHover = { scale: 1.03 };
  const glowOnHover = { boxShadow: "0 4px 32px 0 rgba(59,130,246,0.10)" };
  return (
    <div>
      <div className="flex-1">
        <div className="relative bg-gradient-to-b from-primary/10 via-background/95 to-background pt-16 pb-24">
          <div className="container relative z-10 mx-auto px-4 text-center">
            <div>
              <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                  Al-miqdar
                </span>
                <span className="block mt-2">Real-Time Prayer Tracking</span>
              </h1>
            </div>
            <div>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
                Track prayer progress in real-time at nearby mosques, log missed
                prayers, and contribute Sadaqa. Stay connected with your local
                Islamic community.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-600"
                  to="/mosque"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin mr-2 h-5 w-5"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  Find Nearby Mosques
                </Link>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background hover:text-accent-foreground h-11 rounded-md px-8 border-primary hover:bg-primary/10"
                  to="/chat"
                >
                  Ask Islamic Questions
                </Link>
              </motion.button>
            </div>
            <AnimatePresence>
              <motion.div drag dragConstraints={{ left: 0, right: 300 }}>
                <div className="mt-16">
                  <div className="relative mx-auto h-[300px] w-full max-w-4xl overflow-hidden rounded-xl border bg-background/80 shadow-xl backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10"></div>
                    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                    <div className="flex h-full items-center justify-center">
                      <div className="space-y-4 p-6 text-center">
                        <h3 className="text-2xl font-bold">
                          Mosque Dashboard Preview
                        </h3>
                        <p className="text-muted-foreground">
                          Interactive real-time prayer tracking
                        </p>
                        <div className="flex justify-center space-x-4">
                          <div className="rounded-lg bg-primary/10 p-4 text-center backdrop-blur-sm">
                            <div className="text-sm font-medium">Fajr</div>
                            <div className="text-2xl font-bold">5:30 AM</div>
                          </div>
                          <div className="rounded-lg bg-gradient-to-r from-primary to-blue-500 p-4 text-center text-primary-foreground">
                            <div className="text-sm font-medium">Dhuhr</div>
                            <div className="text-2xl font-bold">1:15 PM</div>
                          </div>
                          <div className="rounded-lg bg-primary/10 p-4 text-center backdrop-blur-sm">
                            <div className="text-sm font-medium">Asr</div>
                            <div className="text-2xl font-bold">4:45 PM</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                to: "/ai_noor_mosque",
                name: "Al-Noor Mosque",
                address: "123 Main Street, City",
                status: "Prayer in progress",
                rakat: "Dhuhr: Rakat 2",
                rakatClass:
                  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 bg-gradient-to-r from-primary to-blue-500",
                progress: "w-[50%]",
              },
              {
                to: "/mosque/2.html",
                name: "Islamic Center",
                address: "456 Oak Avenue, City",
                status: "Starting soon",
                rakat: "Asr",
                rakatClass:
                  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                progress: "",
                isExternal: true,
              },
              {
                to: "/mosque/3.html",
                name: "Masjid Al-Rahman",
                address: "789 Pine Street, City",
                status: "Completed",
                rakat: "Fajr",
                rakatClass:
                  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground",
                progress: "",
                isExternal: true,
              },
            ].map((mosque, idx) =>
              mosque.isExternal ? (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ ...scaleOnHover, ...glowOnHover }}
                  className="rounded-lg border text-card-foreground shadow-sm h-full hover:shadow-md transition-shadow border-primary/20 overflow-hidden backdrop-blur-sm bg-background/80"
                >
                  <a href={mosque.to}>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0"></div>
                    <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
                    <div className="flex flex-col space-y-1.5 p-6 relative z-10">
                      <div className="flex justify-between items-start">
                        <div className="font-semibold tracking-tight text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                          {mosque.name}
                        </div>
                        <div className={mosque.rakatClass}>{mosque.rakat}</div>
                      </div>
                    </div>
                    <div className="p-6 pt-0 relative z-10">
                      <div className="flex items-center text-muted-foreground mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-map-pin h-4 w-4 mr-2"
                        >
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span className="text-sm">{mosque.address}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-clock h-4 w-4 mr-2"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span className="text-sm">{mosque.status}</span>
                      </div>
                    </div>
                    <div className="flex items-center p-6 pt-0 relative z-10">
                      <div className="text-sm text-muted-foreground w-full">
                        {mosque.progress && (
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className={`bg-gradient-to-r from-primary to-blue-500 h-2 rounded-full ${mosque.progress}`}
                            ></div>
                          </div>
                        )}
                      </div>
                    </div>
                  </a>
                </motion.div>
              ) : (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ ...scaleOnHover, ...glowOnHover }}
                  className="rounded-lg border text-card-foreground shadow-sm h-full hover:shadow-md transition-shadow border-primary/20 overflow-hidden backdrop-blur-sm bg-background/80"
                >
                  <Link to={mosque.to}>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0"></div>
                    <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
                    <div className="flex flex-col space-y-1.5 p-6 relative z-10">
                      <div className="flex justify-between items-start">
                        <div className="font-semibold tracking-tight text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                          {mosque.name}
                        </div>
                        <div className={mosque.rakatClass}>{mosque.rakat}</div>
                      </div>
                    </div>
                    <div className="p-6 pt-0 relative z-10">
                      <div className="flex items-center text-muted-foreground mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-map-pin h-4 w-4 mr-2"
                        >
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span className="text-sm">{mosque.address}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-clock h-4 w-4 mr-2"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span className="text-sm">{mosque.status}</span>
                      </div>
                    </div>
                    <div className="flex items-center p-6 pt-0 relative z-10">
                      <div className="text-sm text-muted-foreground w-full">
                        {mosque.progress && (
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className={`bg-gradient-to-r from-primary to-blue-500 h-2 rounded-full ${mosque.progress}`}
                            ></div>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            )}
          </motion.div>

          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Key Features</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our platform offers a range of features to help Muslims stay
                connected with their local mosques and enhance their prayer
                experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-clock h-10 w-10 text-primary"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  ),
                  title: "Real-Time Prayer Tracking",
                  desc: "Stay updated with live Rakat counts during congregational prayers at your local mosque.",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-users h-10 w-10 text-primary"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  ),
                  title: "Mosque Directory",
                  desc: "Find nearby mosques and view their prayer schedules, contact information, and more.",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-heart h-10 w-10 text-primary"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                  ),
                  title: "Personal Prayer Tracker",
                  desc: "Log missed prayers and track your daily prayer consistency with detailed statistics.",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-dollar-sign h-10 w-10 text-primary"
                    >
                      <line x1="12" x2="12" y1="2" y2="22"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  ),
                  title: "Sadaqa Donations",
                  desc: "Contribute Sadaqa directly to your local mosque through secure online payments.",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-message-square h-10 w-10 text-primary"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  ),
                  title: "Islamic Knowledge Assistant",
                  desc: "Ask questions about Islam, Quran, Hadith, and Muslim practices to deepen your understanding.",
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "0 10px 30px rgba(59,130,246,0.10)",
                  }}
                  className="bg-background/80 rounded-lg border text-card-foreground shadow-sm h-full border-primary/20 hover:shadow-lg transition-shadow p-6 flex flex-col items-center"
                >
                  <div className="mb-4 bg-gradient-to-br from-primary/20 to-blue-500/20 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div className="text-2xl font-semibold leading-none tracking-tight mb-2 text-center">
                    {feature.title}
                  </div>
                  <div className="text-sm text-muted-foreground text-center">
                    {feature.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <motion.section
            className="text-center py-16"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Have Questions About Islam?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Our AI-powered Islamic knowledge assistant can help answer your
              questions about Islam, Quran, Hadith, and Muslim practices.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(59,130,246,0.4)",
                  "0 0 0 10px rgba(59,130,246,0)",
                  "0 0 0 0 rgba(59,130,246,0)",
                ],
              }}
              transition={{
                boxShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY },
              }}
              className="inline-block"
            >
              <Link
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8"
                to="/chat"
              >
                Chat with Assistant
              </Link>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
