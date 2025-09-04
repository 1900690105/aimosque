import React, { useState } from "react";

export default function MyPrayer() {
  const [activeTab, setActiveTab] = useState("stats");

  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Prayer Tracker</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="text-2xl font-semibold leading-none tracking-tight">
                  Prayer Statistics
                </div>
                <div className="text-sm text-muted-foreground">
                  Track your prayer consistency and missed prayers
                </div>
              </div>
              <div className="p-6 pt-0">
                <div dir="ltr" data-orientation="horizontal">
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
                      aria-selected="true"
                      aria-controls="stats"
                      data-state="active"
                      id="stats"
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                      tabindex="0"
                      data-orientation="horizontal"
                      data-radix-collection-item=""
                      onClick={() => switchTab("stats")}
                      aria-selected={activeTab === "stats" ? "true" : "false"}
                      data-state={activeTab === "stats" ? "active" : "inactive"}
                    >
                      Statistics
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected="false"
                      aria-controls="missed"
                      data-state="inactive"
                      id="missed"
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                      tabindex="-1"
                      data-orientation="horizontal"
                      data-radix-collection-item=""
                      onClick={() => switchTab("missed")}
                      aria-selected={activeTab === "missed" ? "true" : "false"}
                      data-state={
                        activeTab === "missed" ? "active" : "inactive"
                      }
                    >
                      Missed Prayers
                    </button>
                  </div>
                  {/* statistics start */}
                  {activeTab === "stats" && (
                    <div
                      data-state="active"
                      data-orientation="horizontal"
                      role="tabpanel"
                      aria-labelledby="radix-:r2:-trigger-stats"
                      id="radix-:r2:-content-stats"
                      tabindex="0"
                      className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-4"
                    >
                      <div className="space-y-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                            <div className="p-4">
                              <p className="text-sm text-muted-foreground">
                                Total Prayers
                              </p>
                              <p className="text-2xl font-bold mt-1">450</p>
                            </div>
                          </div>
                          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                            <div className="p-4">
                              <p className="text-sm text-muted-foreground">
                                Missed
                              </p>
                              <p className="text-2xl font-bold mt-1">23</p>
                            </div>
                          </div>
                          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                            <div className="p-4">
                              <p className="text-sm text-muted-foreground">
                                Made Up
                              </p>
                              <p className="text-2xl font-bold mt-1">18</p>
                            </div>
                          </div>
                          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                            <div className="p-4">
                              <p className="text-sm text-muted-foreground">
                                Current Streak
                              </p>
                              <p className="text-2xl font-bold mt-1">7 days</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium mb-2">
                            Overall Completion
                          </h3>
                          <div className="w-full bg-muted rounded-full h-3">
                            <div
                              className="bg-primary h-3 rounded-full"
                              style={{ width: "99%" }}
                            ></div>
                          </div>
                          <p className="text-sm text-muted-foreground mt-2 text-right">
                            99%
                          </p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium mb-4">
                            Prayer Breakdown
                          </h3>
                          <div className="grid grid-cols-5 gap-2">
                            <div className="text-center">
                              <div className="w-full bg-muted rounded-full h-24 relative mb-2">
                                <div
                                  className="bg-primary absolute bottom-0 left-0 right-0 rounded-b-full"
                                  style={{ height: "85%" }}
                                ></div>
                              </div>
                              <p className="text-xs font-medium">Fajr</p>
                              <p className="text-xs text-muted-foreground">
                                85%
                              </p>
                            </div>
                            <div className="text-center">
                              <div className="w-full bg-muted rounded-full h-24 relative mb-2">
                                <div
                                  className="bg-primary absolute bottom-0 left-0 right-0 rounded-b-full"
                                  style={{ height: "95%" }}
                                ></div>
                              </div>
                              <p className="text-xs font-medium">Dhuhr</p>
                              <p className="text-xs text-muted-foreground">
                                95%
                              </p>
                            </div>
                            <div className="text-center">
                              <div className="w-full bg-muted rounded-full h-24 relative mb-2">
                                <div
                                  className="bg-primary absolute bottom-0 left-0 right-0 rounded-b-full"
                                  style={{ height: "90%" }}
                                ></div>
                              </div>
                              <p className="text-xs font-medium">Asr</p>
                              <p className="text-xs text-muted-foreground">
                                90%
                              </p>
                            </div>
                            <div className="text-center">
                              <div className="w-full bg-muted rounded-full h-24 relative mb-2">
                                <div
                                  className="bg-primary absolute bottom-0 left-0 right-0 rounded-b-full"
                                  style={{ height: "98%" }}
                                ></div>
                              </div>
                              <p className="text-xs font-medium">Maghrib</p>
                              <p className="text-xs text-muted-foreground">
                                98%
                              </p>
                            </div>
                            <div className="text-center">
                              <div className="w-full bg-muted rounded-full h-24 relative mb-2">
                                <div
                                  className="bg-primary absolute bottom-0 left-0 right-0 rounded-b-full"
                                  style={{ height: "88%" }}
                                ></div>
                              </div>
                              <p className="text-xs font-medium">Isha</p>
                              <p className="text-xs text-muted-foreground">
                                88%
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* statistics end */}
                  {/* missed player start */}
                  {activeTab === "missed" && (
                    <>
                      <div
                        data-state="inactive"
                        data-orientation="horizontal"
                        role="tabpanel"
                        aria-labelledby="radix-:r2:-trigger-stats"
                        id="radix-:r2:-content-stats"
                        tabindex="0"
                        class="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-4"
                        hidden
                      ></div>
                      <div
                        data-state="active"
                        data-orientation="horizontal"
                        role="tabpanel"
                        aria-labelledby="radix-:r2:-trigger-missed"
                        id="radix-:r2:-content-missed"
                        tabindex="0"
                        class="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-4"
                      >
                        <div>
                          <div class="relative w-full overflow-auto">
                            <table class="w-full caption-bottom text-sm">
                              <thead class="[&_tr]:border-b">
                                <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                  <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                                    Date
                                  </th>
                                  <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                                    Prayer
                                  </th>
                                  <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                                    Mosque
                                  </th>
                                  <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                                    Status
                                  </th>
                                  <th class="h-12 px-4 align-middle font-medium text-muted-foreground text-right">
                                    Action
                                  </th>
                                </tr>
                              </thead>
                              <tbody class="[&_tr:last-child]:border-0">
                                <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                  <td class="p-4 align-middle">Mar 15, 2023</td>
                                  <td class="p-4 align-middle">Fajr</td>
                                  <td class="p-4 align-middle">
                                    Al-Noor Mosque
                                  </td>
                                  <td class="p-4 align-middle">
                                    <span class="text-green-500 flex items-center">
                                      <svg
                                        xmlns="../www.w3.org/2000/svg.html"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-check h-4 w-4 mr-1"
                                      >
                                        <path d="M20 6 9 17l-5-5"></path>
                                      </svg>
                                      Made up
                                    </span>
                                  </td>
                                  <td class="p-4 align-middle text-right"></td>
                                </tr>
                                <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                  <td class="p-4 align-middle">Mar 14, 2023</td>
                                  <td class="p-4 align-middle">Isha</td>
                                  <td class="p-4 align-middle">
                                    Islamic Center
                                  </td>
                                  <td class="p-4 align-middle">
                                    <span class="text-muted-foreground">
                                      Pending
                                    </span>
                                  </td>
                                  <td class="p-4 align-middle text-right">
                                    <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                                      Mark as Made Up
                                    </button>
                                  </td>
                                </tr>
                                <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                  <td class="p-4 align-middle">Mar 12, 2023</td>
                                  <td class="p-4 align-middle">Asr</td>
                                  <td class="p-4 align-middle">
                                    Masjid Al-Rahman
                                  </td>
                                  <td class="p-4 align-middle">
                                    <span class="text-green-500 flex items-center">
                                      <svg
                                        xmlns="../www.w3.org/2000/svg.html"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-check h-4 w-4 mr-1"
                                      >
                                        <path d="M20 6 9 17l-5-5"></path>
                                      </svg>
                                      Made up
                                    </span>
                                  </td>
                                  <td class="p-4 align-middle text-right"></td>
                                </tr>
                                <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                  <td class="p-4 align-middle">Mar 10, 2023</td>
                                  <td class="p-4 align-middle">Dhuhr</td>
                                  <td class="p-4 align-middle">
                                    Al-Noor Mosque
                                  </td>
                                  <td class="p-4 align-middle">
                                    <span class="text-muted-foreground">
                                      Pending
                                    </span>
                                  </td>
                                  <td class="p-4 align-middle text-right">
                                    <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                                      Mark as Made Up
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {/* missed player end */}

                  <div
                    data-state="inactive"
                    data-orientation="horizontal"
                    role="tabpanel"
                    aria-labelledby="radix-:r2:-trigger-missed"
                    id="radix-:r2:-content-missed"
                    tabindex="0"
                    className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-4"
                    hidden=""
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="font-semibold tracking-tight text-xl">
                  Quick Actions
                </div>
              </div>
              <div className="p-6 pt-0 space-y-4">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                  Log Missed Prayer
                </button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
                  Find Nearby Mosque
                </button>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="font-semibold tracking-tight text-xl">
                  My Donations
                </div>
              </div>
              <div className="p-6 pt-0">
                <p className="text-sm text-muted-foreground mb-4">
                  Total Sadaqa contributed: $250
                </p>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                  View Donation History
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
