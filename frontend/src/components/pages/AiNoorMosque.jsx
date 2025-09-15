import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function AiNoorMosque() {
      const [activeTab, setActiveTab] = useState("prayer-schedule");
  
      const switchTab = (tab) => {
        setActiveTab(tab);
      };
  return (
       <>
    <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Link
              className="text-sm text-muted-foreground hover:text-primary"
              to="/"
              ><p>← Back to mosques</p></Link
            >
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="scroll-trigger">
                <div>
                  <div
                    className="rounded-lg border bg-card text-card-foreground shadow-sm"
                  >
                    <div className="flex flex-col space-y-1.5 p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-semibold tracking-tight text-2xl">
                            Al-Noor Mosque
                          </div>
                          <div
                            className="text-sm text-muted-foreground flex items-center mt-2"
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
                              className="lucide lucide-map-pin h-4 w-4 mr-2"
                            >
                              <path
                                d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                              ></path>
                              <circle cx="12" cy="10" r="3"></circle></svg
                            >123 Main Street, City
                          </div>
                        </div>
                        <div
                          className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
                        >
                          Dhuhr
                        </div>
                      </div>
                    </div>
                    <div className="p-6 pt-0">
                      <div className="mb-6">
                        <div
                          className="rounded-lg border text-card-foreground shadow-sm backdrop-blur-sm bg-background/80 border-primary/20"
                        >
                          <div
                            className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0 rounded-lg"
                          ></div>
                          <div className="p-6 pt-6 relative z-10">
                            <div className="text-center mb-4">
                              <h3
                                className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500"
                              >
                                Dhuhr
                                Prayer Progress
                              </h3>
                              <p className="text-3xl font-bold mt-2">
                                2
                                <span className="text-muted-foreground text-lg"
                                  >/
                                  4
                                  Rakats</span
                                >
                              </p>
                            </div>
                            <div
                              className="w-full bg-muted rounded-full h-3 mb-6 overflow-hidden"
                            >
                              <div
                                className="bg-gradient-to-r from-primary to-blue-500 h-3 rounded-full transition-all duration-500"
                                style={{width: "50%"}}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        dir="ltr"
                        data-orientation="horizontal"
                        className="space-y-4"
                      >
                        <div
                          role="tablist"
                          aria-orientation="horizontal"
                          className="h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid w-full grid-cols-2"
                          tabindex="-1"
                          data-orientation="horizontal"
                          style={{outline: "none"}}
                        >
                          {/* <!-- tabes of player, womens and schdeuled  --> */}
                          <button
                            type="button"
                            role="tab"
                            aria-controls="content-schedule"
                            id="prayer-schedule"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                            tabindex="-1"
                            onClick={() => switchTab("prayer-schedule")}
                            aria-selected={activeTab === "prayer-schedule" ? "true" : "false"}
                            data-state={activeTab === "prayer-schedule" ? "active" : "inactive"}
                            data-orientation="horizontal"
                            data-radix-collection-item=""
                          >
                            Prayer Schedule
                          </button>
                          <button
                            type="button"
                            role="tab"
                            aria-controls="content-about"
                            id="about"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                            tabindex="-1"
                            data-orientation="horizontal"
                            onClick={() => switchTab("about")}
                            aria-selected={activeTab === "about" ? "true" : "false"}
                            data-state={activeTab === "about" ? "active" : "inactive"}
                            data-radix-collection-item=""
                          >
                            About
                          </button>
                          {/* <!-- ---------------------------------------------  --> */}
                        </div>
                        {/* <!-- data of player schdeuled  --> */}
                        {activeTab === "prayer-schedule" && (
                        <div
                          data-state="active"
                          data-orientation="horizontal"
                          role="tabpanel"
                          aria-labelledby="radix-:R2kpuuulb:-trigger-schedule"
                          id="radix-:R2kpuuulb:-content-schedule"
                          tabindex="0"
                          className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          style={{animationDuration: "0s"}}
                        >
                          <div className="relative w-full overflow-auto">
                            <table className="w-full caption-bottom text-sm">
                              <thead className="[&amp;_tr]:border-b">
                                <tr
                                  className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                                >
                                  <th
                                    className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0"
                                  >
                                    Prayer
                                  </th>
                                  <th
                                    className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0"
                                  >
                                    Time
                                  </th>
                                  <th
                                    className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0"
                                  >
                                    Status
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="[&amp;_tr:last-child]:border-0">
                                <tr
                                  className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                                >
                                  <td
                                    className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium"
                                  >
                                    Fajr
                                  </td>
                                  <td
                                    className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                                  >
                                    5:30
                                  </td>
                                  <td
                                    className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                                  >
                                    <div
                                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                    >
                                      Upcoming
                                    </div>
                                  </td>
                                </tr>
                                <tr
                                  className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                                >
                                  <td
                                    className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium"
                                  >
                                    Dhuhr
                                  </td>
                                  <td
                                    className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                                  >
                                    13:15
                                  </td>
                                  <td
                                    className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                                  >
                                    <div
                                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                    >
                                      Upcoming
                                    </div>
                                  </td>
                                </tr>
                                <tr
                                  className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                                >
                                  <td
                                    className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium"
                                  >
                                    Asr
                                  </td>
                                  <td
                                    className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                                  >
                                    16:45
                                  </td>
                                  <td
                                    className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                                  >
                                    <div
                                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                    >
                                      Upcoming
                                    </div>
                                  </td>
                                </tr>
                                <tr
                                  className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                                >
                                  <td
                                    className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium"
                                  >
                                    Maghrib
                                  </td>
                                  <td
                                    className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                                  >
                                    19:30
                                  </td>
                                  <td
                                    className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                                  >
                                    <div
                                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                    >
                                      Upcoming
                                    </div>
                                  </td>
                                </tr>
                                <tr
                                  className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                                >
                                  <td
                                    className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium"
                                  >
                                    Isha
                                  </td>
                                  <td
                                    className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                                  >
                                    21:00
                                  </td>
                                  <td
                                    className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                                  >
                                    <div
                                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                    >
                                      Upcoming
                                    </div>
                                  </td>
                                </tr>
                                <tr
                                  className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                                >
                                  <td
                                    className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium"
                                  >
                                    Jummah
                                  </td>
                                  <td
                                    className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                                  >
                                    13:30
                                  </td>
                                  <td
                                    className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                                  >
                                    <div
                                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                    >
                                      Upcoming
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        )}
                        {/* <!-- ----------------------------------  --> */}
                        {/* <!-- about tab data  --> */}
                        {activeTab === "about" && (
                        <div className="p-6 pt-0">
                          <div
                            dir="ltr"
                            data-orientation="horizontal"
                            className="space-y-4"
                          >
                            <div
                              data-state="inactive"
                              data-orientation="horizontal"
                              role="tabpanel"
                              aria-labelledby="radix-:r2:-trigger-schedule"
                              id="radix-:r2:-content-schedule"
                              tabindex="0"
                              className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                              style={{}}
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
                            <div
                              data-state="active"
                              data-orientation="horizontal"
                              role="tabpanel"
                              aria-labelledby="radix-:r2:-trigger-about"
                              id="radix-:r2:-content-about"
                              tabindex="0"
                              className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            >
                              <div className="space-y-4">
                                <p>
                                  A beautiful mosque serving the community since
                                  1980.
                                </p>
                                <div className="flex flex-col space-y-2">
                                  <span className="text-sm font-medium"
                                    >Contact:</span
                                  ><span className="text-sm text-muted-foreground"
                                    >+1 (555) 123-4567</span
                                  ><span className="text-sm text-muted-foreground"
                                    >info@alnoor.mosque</span
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        )}
                        {/* <!-- ---------------------------------  --> */}
                        <div
                          data-state="inactive"
                          data-orientation="horizontal"
                          role="tabpanel"
                          aria-labelledby="radix-:R2kpuuulb:-trigger-women"
                          hidden=""
                          id="radix-:R2kpuuulb:-content-women"
                          tabindex="0"
                          className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        ></div>
                        <div
                          data-state="inactive"
                          data-orientation="horizontal"
                          role="tabpanel"
                          aria-labelledby="radix-:R2kpuuulb:-trigger-about"
                          hidden=""
                          id="radix-:R2kpuuulb:-content-about"
                          tabindex="0"
                          className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- sides cards  --> */}
            <div className="space-y-6">
              <div className="scroll-trigger">
                <div>
                  <div
                    className="rounded-lg border bg-card text-card-foreground shadow-sm"
                  >
                    <div className="flex flex-col space-y-1.5 p-6">
                      <div className="font-semibold tracking-tight text-xl">
                        Track Missed Prayer
                      </div>
                    </div>
                    <div className="p-6 pt-0">
                      <p className="text-sm text-muted-foreground mb-4">
                        Log if you missed this prayer for your personal
                        tracking.
                      </p>
                      <button
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full"
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
                          className="lucide lucide-heart h-4 w-4 mr-2"
                        >
                          <path
                            d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                          ></path></svg
                        >Log Missed Prayer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="scroll-trigger">
                <div>
                  <div
                    className="rounded-lg border bg-card text-card-foreground shadow-sm"
                  >
                    <div className="flex flex-col space-y-1.5 p-6">
                      <div className="font-semibold tracking-tight text-xl">
                        Prayer Resources
                      </div>
                    </div>
                    <div className="p-6 pt-0 space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Access audio recitations, duas, and guides for prayer.
                      </p>
                      <a
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                        href="../resources.html"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-book-open h-4 w-4 mr-2"
                        >
                          <path d="M12 7v14"></path>
                          <path
                            d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"
                          ></path></svg
                        >View Resources</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div className="scroll-trigger">
                <div>
                  <div
                    className="rounded-lg border bg-card text-card-foreground shadow-sm"
                  >
                    <div className="flex flex-col space-y-1.5 p-6">
                      <div className="font-semibold tracking-tight text-xl">
                        Donate Sadaqa
                      </div>
                    </div>
                    <div className="p-6 pt-0">
                      <p className="text-sm text-muted-foreground mb-4">
                        Support this mosque with your contribution.
                      </p>
                      <button
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
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
                          className="lucide lucide-dollar-sign h-4 w-4 mr-2"
                        >
                          <line x1="12" x2="12" y1="2" y2="22"></line>
                          <path
                            d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                          ></path></svg
                        >Donate Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- -----------------------------------------------  --> */}
          </div>
        </div>
      </main>
      </>
  )
}

export default AiNoorMosque
