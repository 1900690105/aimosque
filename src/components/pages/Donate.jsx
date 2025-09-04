import React from "react";
import { useState } from "react";

export default function Donate() {
  const [activeTab, setActiveTab] = useState("credit-card");

  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  const [selectedAmount, setSelectedAmount] = useState(null);
  const amounts = [10, 25, 50, 100];
  const conversionRate = 83;
  return (
    <main class="flex-1">
      <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-2">Donate Sadaqa</h1>
        <p class="text-muted-foreground mb-8">
          Support your local mosques with your contribution
        </p>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2">
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div class="flex flex-col space-y-1.5 p-6">
                <div class="text-2xl font-semibold leading-none tracking-tight">
                  Make a Donation
                </div>
                <div class="text-sm text-muted-foreground">
                  Choose a mosque and donation amount
                </div>
              </div>
              <div class="p-6 pt-0 space-y-6">
                <div class="space-y-2">
                  <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="mosque"
                  >
                    Select Mosque
                  </label>
                  <select
                    id="mosque"
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select a mosque</option>
                    <option value="1">Al-Noor Mosque</option>
                    <option value="2">Islamic Center</option>
                    <option value="3">Masjid Al-Rahman</option>
                  </select>
                </div>
                <div class="space-y-2">
                  <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Donation Amount
                  </label>
                  <div
                    role="radiogroup"
                    aria-required="false"
                    dir="ltr"
                    className="grid gap-2"
                    tabIndex={0}
                    style={{ outline: "none" }}
                  >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {amounts.map((amount) => (
                        <div
                          key={amount}
                          className="flex items-center space-x-2"
                        >
                          <button
                            type="button"
                            role="radio"
                            aria-checked={selectedAmount === amount}
                            value={amount}
                            onClick={() => setSelectedAmount(amount)}
                            className={`aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                              selectedAmount === amount ? "bg-blue-500" : ""
                            }`}
                            id={`amount-${amount}`}
                            tabIndex={-1}
                            data-radix-collection-item=""
                          >
                            {selectedAmount === amount && (
                              <span className="flex items-center justify-center">
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
                                  className="lucide lucide-circle h-2.5 w-2.5 fill-current text-current"
                                >
                                  <circle cx="12" cy="12" r="10"></circle>
                                </svg>
                              </span>
                            )}
                          </button>
                          <label
                            htmlFor={`amount-${amount}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            ₹{amount * conversionRate}
                          </label>
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-sm">
                      Selected Amount:{" "}
                      <strong>
                        {selectedAmount
                          ? `₹${selectedAmount * conversionRate}`
                          : "None"}
                      </strong>
                    </p>
                  </div>
                  <div class="pt-2">
                    <label
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="custom-amount"
                    >
                      Custom Amount
                    </label>
                    <input
                      class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      id="custom-amount"
                      placeholder="Enter amount"
                      min="1"
                      type="number"
                    />
                  </div>
                </div>
                <div dir="ltr" data-orientation="horizontal">
                  <div
                    role="tablist"
                    aria-orientation="horizontal"
                    class="h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid w-full grid-cols-2"
                    tabindex="0"
                    data-orientation="horizontal"
                    style={{ outline: "none" }}
                  >
                    <button
                      type="button"
                      role="tab"
                      aria-selected="false"
                      aria-controls="credit-card-content"
                      data-state="inactive"
                      id="credit-card-tab"
                      class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                      tabindex="-1"
                      data-orientation="horizontal"
                      data-radix-collection-item=""
                      onClick={() => switchTab("credit-card")}
                      aria-selected={
                        activeTab === "credit-card" ? "true" : "false"
                      }
                      data-state={
                        activeTab === "credit-card" ? "active" : "inactive"
                      }
                    >
                      Credit Card
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-controls="content-paypal"
                      data-state="active"
                      id="paypal-tab"
                      class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                      tabindex="0"
                      data-orientation="horizontal"
                      data-radix-collection-item=""
                      onClick={() => switchTab("paypal")}
                      aria-selected={activeTab === "paypal" ? "true" : "false"}
                      data-state={
                        activeTab === "paypal" ? "active" : "inactive"
                      }
                    >
                      PayPal
                    </button>
                  </div>
                  {activeTab === "credit-card" && (
                    <div
                      data-state="active"
                      data-orientation="horizontal"
                      role="tabpanel"
                      aria-labelledby="trigger-card"
                      id="credit-card-content"
                      tabindex="0"
                      class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-4"
                    >
                      <div class="space-y-2">
                        <label
                          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          for="card-number"
                        >
                          Card Number
                        </label>
                        <input
                          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                          id="card-number"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>
                      <div class="grid grid-cols-2 gap-4">
                        <div class="space-y-2">
                          <label
                            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="expiry"
                          >
                            Expiry Date
                          </label>
                          <input
                            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                            id="expiry"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div class="space-y-2">
                          <label
                            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="cvc"
                          >
                            CVC
                          </label>
                          <input
                            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                            id="cvc"
                            placeholder="123"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div
                    data-state="inactive"
                    data-orientation="horizontal"
                    role="tabpanel"
                    aria-labelledby="trigger-card"
                    id="content-card"
                    tabindex="0"
                    class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-4"
                    hidden=""
                  ></div>
                  {activeTab === "paypal" && (
                    <div
                      data-state="active"
                      data-orientation="horizontal"
                      role="tabpanel"
                      aria-labelledby="trigger-paypal"
                      id="paypal-content"
                      tabindex="0"
                      class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 py-4 text-center"
                    >
                      <p class="mb-4">
                        You will be redirected to PayPal to complete your
                        donation.
                      </p>
                      <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                        Continue with PayPal
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div class="flex items-center p-6 pt-0">
                <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
          <div class="space-y-6">
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div class="flex flex-col space-y-1.5 p-6">
                <div class="font-semibold tracking-tight text-xl">
                  Why Donate?
                </div>
              </div>
              <div class="p-6 pt-0 space-y-4">
                <p class="text-sm">
                  Your donations help mosques maintain their facilities, provide
                  services to the community, and continue their important work.
                </p>
                <ul class="text-sm space-y-2">
                  <li class="flex items-start">
                    <span class="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
                      1
                    </span>
                    <span>Support mosque maintenance and utilities</span>
                  </li>
                  <li class="flex items-start">
                    <span class="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
                      2
                    </span>
                    <span>Fund educational programs and classes</span>
                  </li>
                  <li class="flex items-start">
                    <span class="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
                      3
                    </span>
                    <span>Help with community outreach initiatives</span>
                  </li>
                  <li class="flex items-start">
                    <span class="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
                      4
                    </span>
                    <span>Support charitable activities for those in need</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div class="flex flex-col space-y-1.5 p-6">
                <div class="font-semibold tracking-tight text-xl">
                  Recent Donations
                </div>
              </div>
              <div class="p-6 pt-0">
                <ul class="space-y-3">
                  <li class="flex justify-between items-center text-sm">
                    <span>Anonymous</span>
                    <span class="font-medium">₹4,150</span>
                  </li>
                  <li class="flex justify-between items-center text-sm">
                    <span>Fatima S.</span>
                    <span class="font-medium">₹2,075</span>
                  </li>
                  <li class="flex justify-between items-center text-sm">
                    <span>Mohammed A.</span>
                    <span class="font-medium">₹8,300</span>
                  </li>
                  <li class="flex justify-between items-center text-sm">
                    <span>Anonymous</span>
                    <span class="font-medium">₹830</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
