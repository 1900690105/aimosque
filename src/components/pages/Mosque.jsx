import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Mosque() {
  const [activeTab, setActiveTab] = useState("map-view");

  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-8">
        <div className="scroll-trigger ">
          <div>
            <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
              Nearby Mosques
            </h1>
          </div>
        </div>
        <div className="scroll-trigger ">
          <div>
            <div className="rounded-lg border text-card-foreground shadow-sm mb-8 backdrop-blur-sm bg-background/80 border-primary/20">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="font-semibold tracking-tight text-xl">
                  Find Mosques
                </div>
              </div>
              <div className="p-6 pt-0">
                <div className="relative mb-6">
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
                    placeholder="Search by name or location"
                    value=""
                    fdprocessedid="08j8s"
                  />
                </div>
                <div dir="ltr" data-orientation="horizontal">
                  <div
                    role="tablist"
                    aria-orientation="horizontal"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground mb-4"
                    tabindex="0"
                    data-orientation="horizontal"
                    style={{ outline: "none" }}
                  >
                    <button
                      type="button"
                      role="tab"
                      aria-selected="false"
                      aria-controls="content-map"
                      data-state="inactive"
                      id="map-view"
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                      tabindex="-1"
                      data-orientation="horizontal"
                      data-radix-collection-item=""
                      fdprocessedid="5m9qx5"
                      onClick={() => switchTab("map-view")}
                      aria-selected={
                        activeTab === "map-view" ? "true" : "false"
                      }
                      data-state={
                        activeTab === "map-view" ? "active" : "inactive"
                      }
                    >
                      Map View
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected="true"
                      aria-controls="content-list"
                      data-state="active"
                      id="list-view"
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                      tabindex="0"
                      data-orientation="horizontal"
                      data-radix-collection-item=""
                      fdprocessedid="jkm92"
                      onClick={() => switchTab("list-view")}
                      aria-selected={
                        activeTab === "list-view" ? "true" : "false"
                      }
                      data-state={
                        activeTab === "list-view" ? "active" : "inactive"
                      }
                    >
                      List View
                    </button>
                  </div>
                  <div
                    data-state="inactive"
                    data-orientation="horizontal"
                    role="tabpanel"
                    aria-labelledby="radix-:r2:-trigger-map"
                    id="radix-:r2:-content-map"
                    tabindex="0"
                    className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    hidden=""
                  ></div>
                  {activeTab === "map-view" && (
                    <div
                      data-state="active"
                      data-orientation="horizontal"
                      role="tabpanel"
                      aria-labelledby="radix-:r2:-trigger-map"
                      id="radix-:r2:-content-map"
                      tabindex="0"
                      className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                            Find Nearby Mosques
                          </h2>
                          <div className="flex gap-2">
                            <button
                              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground h-9 rounded-md px-3 border-primary/50 hover:bg-primary/10"
                              fdprocessedid="ok7g8k"
                            >
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
                                className="lucide lucide-navigation h-4 w-4 mr-2"
                              >
                                <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                              </svg>
                              My Location
                            </button>
                            <button
                              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground h-9 rounded-md px-3 border-primary/50 hover:bg-primary/10"
                              fdprocessedid="nfjo2c"
                            >
                              Expand Search (1km)
                            </button>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="md:col-span-2">
                            <div className="h-[400px] rounded-lg border border-primary/20 shadow-md overflow-hidden"></div>
                          </div>
                          <div className="h-[400px] overflow-y-auto pr-2 space-y-2">
                            <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
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
                                className="lucide lucide-map-pin h-8 w-8 mb-2"
                              >
                                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                              </svg>
                              <p className="text-center">
                                No mosques found nearby
                              </p>
                              <button
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary underline-offset-4 hover:underline h-10 px-4 py-2 mt-2"
                                fdprocessedid="3mvw78"
                              >
                                Increase search radius
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab === "list-view" && (
                    <div
                      data-state="active"
                      data-orientation="horizontal"
                      role="tabpanel"
                      aria-labelledby="radix-:r2:-trigger-list"
                      id="radix-:r2:-content-list"
                      tabindex="0"
                      className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div>
                          <a href="/mosque/1">
                            <div className="rounded-lg border text-card-foreground shadow-sm h-full hover:shadow-md transition-shadow border-primary/20 overflow-hidden backdrop-blur-sm bg-background/80">
                              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0"></div>
                              <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
                              <div className="flex flex-col space-y-1.5 p-6 relative z-10">
                                <div className="flex justify-between items-start">
                                  <div className="font-semibold tracking-tight text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                                    Al-Noor Mosque
                                  </div>
                                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 bg-gradient-to-r from-primary to-blue-500">
                                    Dhuhr: Rakat 2
                                  </div>
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
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-map-pin h-4 w-4 mr-2"
                                  >
                                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                  </svg>
                                  <span className="text-sm">
                                    123 Main Street, City
                                  </span>
                                </div>
                                <div className="flex items-center text-muted-foreground">
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
                                    className="lucide lucide-clock h-4 w-4 mr-2"
                                  >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                  </svg>
                                  <span className="text-sm">
                                    Prayer in progress
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center p-6 pt-0 relative z-10">
                                <div className="text-sm text-muted-foreground w-full">
                                  <div className="w-full bg-muted rounded-full h-2">
                                    <div
                                      className="bg-gradient-to-r from-primary to-blue-500 h-2 rounded-full"
                                      style={{ width: "50%" }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div style={{ transform: "translateY(-0.0030446px)" }}>
                          <a href="/mosque/2">
                            <div className="rounded-lg border text-card-foreground shadow-sm h-full hover:shadow-md transition-shadow border-primary/20 overflow-hidden backdrop-blur-sm bg-background/80">
                              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0"></div>
                              <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
                              <div className="flex flex-col space-y-1.5 p-6 relative z-10">
                                <div className="flex justify-between items-start">
                                  <div className="font-semibold tracking-tight text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                                    Islamic Center
                                  </div>
                                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                                    Asr
                                  </div>
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
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-map-pin h-4 w-4 mr-2"
                                  >
                                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                  </svg>
                                  <span className="text-sm">
                                    456 Oak Avenue, City
                                  </span>
                                </div>
                                <div className="flex items-center text-muted-foreground">
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
                                    className="lucide lucide-clock h-4 w-4 mr-2"
                                  >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                  </svg>
                                  <span className="text-sm">Starting soon</span>
                                </div>
                              </div>
                              <div className="flex items-center p-6 pt-0 relative z-10">
                                <div className="text-sm text-muted-foreground w-full"></div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div>
                          <a href="/mosque/3">
                            <div className="rounded-lg border text-card-foreground shadow-sm h-full hover:shadow-md transition-shadow border-primary/20 overflow-hidden backdrop-blur-sm bg-background/80">
                              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0"></div>
                              <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
                              <div className="flex flex-col space-y-1.5 p-6 relative z-10">
                                <div className="flex justify-between items-start">
                                  <div className="font-semibold tracking-tight text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                                    Masjid Al-Rahman
                                  </div>
                                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                                    Fajr
                                  </div>
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
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-map-pin h-4 w-4 mr-2"
                                  >
                                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                  </svg>
                                  <span className="text-sm">
                                    789 Pine Street, City
                                  </span>
                                </div>
                                <div className="flex items-center text-muted-foreground">
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
                                    className="lucide lucide-clock h-4 w-4 mr-2"
                                  >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                  </svg>
                                  <span className="text-sm">Completed</span>
                                </div>
                              </div>
                              <div className="flex items-center p-6 pt-0 relative z-10">
                                <div className="text-sm text-muted-foreground w-full"></div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
