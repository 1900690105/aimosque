import React, { useState } from "react";
// import { motion } from "framer-motion";

export default function Resource() {
  const [activeTab, setActiveTab] = useState("audio");

  const switchTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Prayer Resources</h1>
          <p className="text-muted-foreground mb-8">
            Access audio recitations, duas, and guides for prayer
          </p>
        </div>
        <div className="mb-6">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
              placeholder="Search resources..."
              value=""
            />
          </div>
        </div>
        <div dir="ltr" data-orientation="horizontal" className="space-y-6">
          <div
            role="tablist"
            aria-orientation="horizontal"
            className="h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid w-full grid-cols-2"
            tabindex="0"
            data-orientation="horizontal"
            style={{ outline: "none" }}
          >
            <button
              type="button"
              role="tab"
              aria-controls="audio"
              id="audio"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              tabindex="0"
              data-orientation="horizontal"
              data-radix-collection-item=""
              onClick={() => switchTab("audio")}
              aria-selected={activeTab === "audio" ? "true" : "false"}
              data-state={activeTab === "audio" ? "active" : "inactive"}
            >
              Audio Recitations
            </button>
            <button
              type="button"
              role="tab"
<<<<<<< HEAD:frontend/src/components/pages/Resource.jsx
              // aria-selected="false"
=======
>>>>>>> 216a4b1694ce3709df5d3029a21f045b361623b2:src/components/pages/Resource.jsx
              aria-controls="duas"
              id="duas"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              tabindex="-1"
              data-orientation="horizontal"
              data-radix-collection-item=""
              onClick={() => switchTab("duas")}
              aria-selected={activeTab === "duas" ? "true" : "false"}
              data-state={activeTab === "duas" ? "active" : "inactive"}
            >
              Duas for Prayer
            </button>
          </div>
          {/* audio start */}

          {activeTab === "audio" && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              data-state="active"
              data-orientation="horizontal"
              role="tabpanel"
              aria-labelledby="radix-:r2:-trigger-audio"
              id="radix-:r2:-content-audio"
              tabIndex={0}
              className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <div className="grid grid-cols-1 gap-6">
                <div className="scroll-trigger ">
                  <div>
                    <div className="rounded-lg border text-card-foreground shadow-sm backdrop-blur-sm bg-background/80 border-primary/20 hover:shadow-lg transition-all">
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                              Surah Al-Fatiha
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              Sheikh Mishary Rashid Alafasy
                            </p>
                          </div>
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 bg-gradient-to-r from-primary/80 to-blue-500/80">
                            Quran
                          </div>
                        </div>
                        <p className="text-sm mb-4">
                          The opening chapter of the Quran
                        </p>
                        <div className="mb-4">
                          <div className="w-full ">
                            <div
                              className="relative"
                              style={{ paddingBottom: "56.25%" }}
                            >
                              <iframe
                                className="absolute top-0 left-0 w-full h-full rounded-md"
                                src="https://www.youtube.com/embed/ZYaZ6Odbx_Y?rel=0"
                                title="Surah Al-Fatiha"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen=""
                              ></iframe>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">
                            1:05
                          </span>
                          <div className="flex space-x-2">
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground h-9 rounded-md px-3 border-primary/50 hover:bg-primary/10">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-download h-4 w-4"
                              >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" x2="12" y1="15" y2="3"></line>
                              </svg>
                              <span className="sr-only">Download</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="scroll-trigger ">
                  <div>
                    <div className="rounded-lg border text-card-foreground shadow-sm backdrop-blur-sm bg-background/80 border-primary/20 hover:shadow-lg transition-all">
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                              Dua for Beginning Prayer
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              Sheikh Abdul Rahman Al-Sudais
                            </p>
                          </div>
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 bg-gradient-to-r from-primary/80 to-blue-500/80">
                            Dua
                          </div>
                        </div>
                        <p className="text-sm mb-4">
                          Supplication recited at the beginning of prayer
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">
                            0:45
                          </span>
                          <div className="flex space-x-2">
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground h-9 rounded-md px-3 border-primary/50 hover:bg-primary/10">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-play h-4 w-4 mr-2"
                              >
                                <polygon points="6 3 20 12 6 21 6 3"></polygon>
                              </svg>{" "}
                              Play{" "}
                            </button>
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground h-9 rounded-md px-3 border-primary/50 hover:bg-primary/10">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-download h-4 w-4"
                              >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" x2="12" y1="15" y2="3"></line>
                              </svg>
                              <span className="sr-only">Download</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="scroll-trigger ">
                  <div>
                    <div className="rounded-lg border text-card-foreground shadow-sm backdrop-blur-sm bg-background/80 border-primary/20 hover:shadow-lg transition-all">
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                              Taraweeh Night 1
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              Sheikh Omar Hisham Al Arabi
                            </p>
                          </div>
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 bg-gradient-to-r from-primary/80 to-blue-500/80">
                            Taraweeh
                          </div>
                        </div>
                        <p className="text-sm mb-4">
                          First night of Taraweeh prayers
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">
                            32:15
                          </span>
                          <div className="flex space-x-2">
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground h-9 rounded-md px-3 border-primary/50 hover:bg-primary/10">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-play h-4 w-4 mr-2"
                              >
                                <polygon points="6 3 20 12 6 21 6 3"></polygon>
                              </svg>{" "}
                              Play{" "}
                            </button>
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground h-9 rounded-md px-3 border-primary/50 hover:bg-primary/10">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-download h-4 w-4"
                              >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" x2="12" y1="15" y2="3"></line>
                              </svg>
                              <span className="sr-only">Download</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="scroll-trigger ">
                  <div>
                    <div className="rounded-lg border text-card-foreground shadow-sm backdrop-blur-sm bg-background/80 border-primary/20 hover:shadow-lg transition-all">
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                              Dua Qunoot
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              Sheikh Maher Al Muaiqly
                            </p>
                          </div>
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 bg-gradient-to-r from-primary/80 to-blue-500/80">
                            Dua
                          </div>
                        </div>
                        <p className="text-sm mb-4">
                          Supplication recited during Witr prayer
                        </p>
                        <div className="mb-4">
                          <div className="w-full ">
                            <div
                              className="relative"
                              style={{ paddingBottom: "56.25%" }}
                            >
                              <iframe
                                className="absolute top-0 left-0 w-full h-full rounded-md"
                                src="https://www.youtube.com/embed/Za0qW_Pur7M?rel=0"
                                title="Dua Qunoot"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen=""
                              ></iframe>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">
                            2:30
                          </span>
                          <div className="flex space-x-2">
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground h-9 rounded-md px-3 border-primary/50 hover:bg-primary/10">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-download h-4 w-4"
                              >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" x2="12" y1="15" y2="3"></line>
                              </svg>
                              <span className="sr-only">Download</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="scroll-trigger ">
                  <div>
                    <div className="rounded-lg border text-card-foreground shadow-sm backdrop-blur-sm bg-background/80 border-primary/20 hover:shadow-lg transition-all">
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                              Adhkar after Prayer
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              Sheikh Saad Al-Ghamdi
                            </p>
                          </div>
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 bg-gradient-to-r from-primary/80 to-blue-500/80">
                            Adhkar
                          </div>
                        </div>
                        <p className="text-sm mb-4">
                          Remembrances recited after completing prayer
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">
                            3:45
                          </span>
                          <div className="flex space-x-2">
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground h-9 rounded-md px-3 border-primary/50 hover:bg-primary/10">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-play h-4 w-4 mr-2"
                              >
                                <polygon points="6 3 20 12 6 21 6 3"></polygon>
                              </svg>{" "}
                              Play{" "}
                            </button>
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground h-9 rounded-md px-3 border-primary/50 hover:bg-primary/10">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-download h-4 w-4"
                              >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" x2="12" y1="15" y2="3"></line>
                              </svg>
                              <span className="sr-only">Download</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* audio end */}
          {/* dua start */}

          {activeTab === "duas" && (
            <div
              data-state="active"
              data-orientation="horizontal"
              role="tabpanel"
              aria-labelledby="radix-:r2:-trigger-duas"
              id="radix-:r2:-content-duas"
              tabIndex={0}
              className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Opening Dua (Istiftah)",
                    subtitle: "Recited At the beginning of prayer after Takbir",
                    arabic:
                      "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلَا إِلَهَ غَيْرُكَ",
                    translation:
                      "Glory be to You, O Allah, and praise be to You, and blessed is Your name, and exalted is Your majesty, and there is no deity worthy of worship except You.",
                  },
                  {
                    title: "Dua for Ruku (Bowing)",
                    subtitle: "Recited During Ruku (bowing position)",
                    arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
                    translation: "Glory be to my Lord, the Most Great",
                  },
                  {
                    title: "Dua for Sujood (Prostration)",
                    subtitle: "Recited During Sujood (prostration)",
                    arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
                    translation: "Glory be to my Lord, the Most High",
                  },
                  {
                    title: "Dua between Sajdah",
                    subtitle:
                      "Recited While sitting between the two prostrations",
                    arabic: "رَبِّ اغْفِرْ لِي، رَبِّ اغْفِرْ لِي",
                    translation: "My Lord, forgive me. My Lord, forgive me.",
                  },
                  {
                    title: "Tashahhud",
                    subtitle: "Recited During the sitting position in prayer",
                    arabic:
                      "التَّحِيَّاتُ لِلَّهِ، وَالصَّلَوَاتُ، وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
                    translation:
                      "All greetings of humility are for Allah, and all prayers and goodness. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous slaves of Allah. I bear witness that there is no deity worthy of worship except Allah, and I bear witness that Muhammad is His slave and His Messenger.",
                  },
                ].map((dua, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    whileHover={{
                      scale: 1.03,
                      rotateY: 5,
                      boxShadow: "0 10px 30px rgba(59,130,246,0.10)",
                    }}
                    className="rounded-lg border text-card-foreground shadow-sm backdrop-blur-sm bg-background/80 border-primary/20 hover:shadow-lg transition-all"
                  >
                    <div className="flex flex-col space-y-1.5 p-6">
                      <div className="font-semibold tracking-tight text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                        {dua.title}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {dua.subtitle}
                      </div>
                    </div>
                    <div className="p-6 pt-0 space-y-4">
                      <div className="bg-muted/50 p-4 rounded-md text-right backdrop-blur-sm">
                        <p className="font-arabic text-lg">{dua.arabic}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">
                          Translation:
                        </h4>
                        <p className="text-sm">{dua.translation}</p>
                      </div>
                      <div className="flex justify-end">
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background hover:text-accent-foreground h-9 rounded-md px-3 border-primary/50 hover:bg-primary/10">
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
                            className="lucide lucide-volume2 h-4 w-4 mr-2"
                          >
                            <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path>
                            <path d="M16 9a5 5 0 0 1 0 6"></path>
                            <path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path>
                          </svg>
                          Listen
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          {/* dua end */}

          <div
            data-state="inactive"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-:r2:-trigger-duas"
            id="radix-:r2:-content-duas"
            tabindex="0"
            className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            hidden=""
          ></div>
          <div
            data-state="inactive"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-:r2:-trigger-women"
            id="radix-:r2:-content-women"
            tabindex="0"
            className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            hidden=""
          ></div>
        </div>
      </div>
    </main>
  );
}
