import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, Radio, Wifi, Sparkles, Server } from "lucide-react";
import Card, { CardHeader, CardContent, CardTitle } from "./ui/Card";
import Button from "./ui/Button"; // adjust path
import { RechargeDialog } from "./recharge-dialog"; // adjust path

// const plans = [
//     {
//         id: "monthly",
//         name: "Monthly",
//         priceINR: 499,
//         per: "month",
//         features: ["All core features", "Basic support", "1 device activation"],
//     },
//     {
//         id: "threeMonths",
//         name: "3 Months",
//         priceINR: 1199,
//         per: "3 months",
//         highlight: true,
//         features: ["All features", "Priority support", "1-2 devices activation"],
//     },
//     {
//         id: "sixMonths",
//         name: "6 Months",
//         priceINR: 2499,
//         per: "6 months",
//         features: ["All features", "Priority support", "Up to 2 devices activation"],
//     },
//     {
//         id: "annual",
//         name: "Annual",
//         priceINR: 4999,
//         per: "year",
//         features: ["All features", "24/7 priority support", "Up to 3 devices activation"],
//     },
// ];

// const productFeatures = [
//     { icon: <Radio className="h-6 w-6 text-primary" />, title: "Real-time Rakat Counter", desc: "Live congregation rakats broadcast to hall displays." },
//     { icon: <Wifi className="h-6 w-6 text-primary" />, title: "Cloud Sync", desc: "Prayer timings and updates synced across devices." },
//     { icon: <Server className="h-6 w-6 text-primary" />, title: "Centralized Control", desc: "Manage devices, timings, and updates from a unified dashboard." },
//     { icon: <ShieldCheck className="h-6 w-6 text-primary" />, title: "Secure Access", desc: "Admin password and OTP-based recharge verification." },
//     { icon: <Zap className="h-6 w-6 text-primary" />, title: "Low Latency", desc: "Optimized updates for accurate prayer progress." },
//     { icon: <Sparkles className="h-6 w-6 text-primary" />, title: "Futuristic UI", desc: "Matches Al-miqdar's gradient and glass design." },
// ];

// export function ProductSection() {
//     const [openPlan, setOpenPlan] = useState(null);

//     return (
//         <section className="py-16">
//             <div className="text-center mb-12">
//                 <motion.h2
//                     className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     Product & Facilities
//                 </motion.h2>
//                 <motion.p
//                     className="text-lg text-muted-foreground max-w-2xl mx-auto"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.1 }}
//                 >
//                     Showcase of our Al-miqdar mosque solution and the facilities we provide.
//                 </motion.p>
//             </div>

//             {/* Product overview */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
//                 <motion.div
//                     className="relative rounded-xl overflow-hidden border border-primary/20 bg-background/80 backdrop-blur-sm p-6"
//                     initial={{ opacity: 0, x: -50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.6, delay: 0.2 }}
//                 >
//                     <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
//                     <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
//                     <div className="relative z-10">
//                         <div className="mb-4 inline-flex items-center rounded-full border border-primary/20 px-3 py-1 text-xs text-primary bg-primary/10">
//                             Mosque Device + Cloud
//                         </div>
//                         <h3 className="text-2xl font-semibold mb-3">Al-miqdar Rakat Counter Device</h3>
//                         <p className="text-muted-foreground mb-6">
//                             A reliable, plug-and-play device that powers live rakat counting, prayer status, and cloud updates —
//                             designed for mosques with simplicity and security.
//                         </p>
//                         <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                             {productFeatures.map((f, i) => (
//                                 <motion.li
//                                     key={i}
//                                     initial={{ opacity: 0, y: 12 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ delay: 0.3 + 0.05 * i }}
//                                     className="flex items-start gap-3"
//                                 >
//                                     <div className="mt-0.5">{f.icon}</div>
//                                     <div>
//                                         <div className="font-medium">{f.title}</div>
//                                         <div className="text-sm text-muted-foreground">{f.desc}</div>
//                                     </div>
//                                 </motion.li>
//                             ))}
//                         </ul>
//                     </div>
//                 </motion.div>

//                 <motion.div
//                     className="relative rounded-xl overflow-hidden border border-primary/20 bg-background/80 backdrop-blur-sm p-6 flex items-center justify-center"
//                     initial={{ opacity: 0, x: 50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.6, delay: 0.3 }}
//                 >
//                     <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
//                     <div className="absolute inset-0 bg-grid-pattern opacity-5" />
//                     <div className="relative z-10 w-full">
//                         <div className="rounded-lg border border-primary/20 overflow-hidden shadow-sm">
//                             <img
//                                 src="/placeholder.svg?height=420&width=840&text=Al-miqdar+Device"
//                                 alt="Al-miqdar Rakat Counter Device"
//                                 className="w-full h-auto"
//                             />
//                         </div>
//                         <p className="text-sm text-muted-foreground mt-3 text-center">
//                             Device illustration. Actual unit ships with compact enclosure and LED/LCD display.
//                         </p>
//                     </div>
//                 </motion.div>
//             </div>

//             {/* Plans */}
//             <motion.div
//                 className="text-center mb-8"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.4 }}
//             >
//                 <h3 className="text-3xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
//                     Recharge Plans
//                 </h3>
//                 <p className="text-muted-foreground max-w-2xl mx-auto">
//                     Choose a plan and recharge your device with secure OTP verification. Pricing in INR.
//                 </p>
//             </motion.div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {plans.map((plan, idx) => (
//                     <motion.div
//                         key={plan.id}
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.5 + 0.1 * idx, duration: 0.6 }}
//                     >
//                         <Card
//                             className={`h-full border-primary/20 bg-background/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 relative group ${plan.highlight ? "ring-2 ring-primary/30 scale-105" : "hover:scale-105"
//                                 }`}
//                         >
//                             <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
//                             {plan.highlight && (
//                                 <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
//                                     <span className="bg-gradient-to-r from-primary to-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
//                                         Most Popular
//                                     </span>
//                                 </div>
//                             )}
//                             <CardHeader className="relative z-10 pb-4">
//                                 <CardTitle className="text-center">
//                                     <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
//                                         {plan.name}
//                                     </span>
//                                 </CardTitle>
//                                 <div className="text-center mt-4">
//                                     <span className="text-4xl font-bold">₹{plan.priceINR.toLocaleString("en-IN")}</span>
//                                     <span className="text-muted-foreground text-sm"> / {plan.per}</span>
//                                 </div>
//                             </CardHeader>
//                             <CardContent className="relative z-10 pt-0">
//                                 <ul className="space-y-3 mb-6">
//                                     {plan.features.map((f, i) => (
//                                         <li key={i} className="flex items-start gap-2 text-sm">
//                                             <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
//                                             <span>{f}</span>
//                                         </li>
//                                     ))}
//                                 </ul>
//                                 <Button
//                                     className="w-full bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white font-medium"
//                                     onClick={() => setOpenPlan(plan)}
//                                 >
//                                     Recharge Now
//                                 </Button>
//                             </CardContent>
//                         </Card>
//                     </motion.div>
//                 ))}
//             </div>

//             <AnimatePresence>
//                 {openPlan && <RechargeDialog plan={openPlan} onOpenChange={(o) => !o && setOpenPlan(null)} />}
//             </AnimatePresence>
//         </section>
//     );
// }

const plans = [
    {
        id: "monthly",
        name: "Monthly",
        priceINR: 499,
        per: "month",
        features: ["All core features", "Basic support", "1 device activation"],
    },
    {
        id: "threeMonths",
        name: "3 Months",
        priceINR: 1199,
        per: "3 months",
        highlight: true,
        features: ["All features", "Priority support", "1-2 devices activation"],
    },
    {
        id: "sixMonths",
        name: "6 Months",
        priceINR: 2499,
        per: "6 months",
        features: ["All features", "Priority support", "Up to 2 devices activation"],
    },
    {
        id: "annual",
        name: "Annual",
        priceINR: 4999,
        per: "year",
        features: ["All features", "24/7 priority support", "Up to 3 devices activation"],
    },
]

const productFeatures = [
    {
        icon: <Radio className="h-6 w-6 text-primary" />,
        title: "Real-time Rakat Counter",
        desc: "Live congregation rakats broadcast to hall displays.",
    },
    {
        icon: <Wifi className="h-6 w-6 text-primary" />,
        title: "Cloud Sync",
        desc: "Prayer timings and updates synced across devices.",
    },
    {
        icon: <Server className="h-6 w-6 text-primary" />,
        title: "Centralized Control",
        desc: "Manage devices, timings, and updates from a unified dashboard.",
    },
    {
        icon: <ShieldCheck className="h-6 w-6 text-primary" />,
        title: "Secure Access",
        desc: "Admin password and OTP-based recharge verification.",
    },
    {
        icon: <Zap className="h-6 w-6 text-primary" />,
        title: "Low Latency",
        desc: "Optimized updates for accurate prayer progress.",
    },
    {
        icon: <Sparkles className="h-6 w-6 text-primary" />,
        title: "Futuristic UI",
        desc: "Matches Al-miqdar's gradient and glass design.",
    },
]

export function ProductSection() {
    const [openPlan, setOpenPlan] = useState(null)

    return (
        <section className="py-16">
            <div className="text-center mb-12">
                <motion.h2
                    className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Product & Facilities
                </motion.h2>
                <motion.p
                    className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Showcase of our Al-miqdar mosque solution and the facilities we provide.
                </motion.p>
            </div>

            {/* Product overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <motion.div
                    className="relative rounded-xl overflow-hidden border border-primary/20 bg-background/80 backdrop-blur-sm p-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
                    <div className="relative z-10">
                        <div className="mb-4 inline-flex items-center rounded-full border border-primary/20 px-3 py-1 text-xs text-primary bg-primary/10">
                            Mosque Device + Cloud
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">Al-miqdar Rakat Counter Device</h3>
                        <p className="text-muted-foreground mb-6">
                            A reliable, plug-and-play device that powers live rakat counting, prayer status, and cloud updates —
                            designed for mosques with simplicity and security.
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {productFeatures.map((f, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + 0.05 * i }}
                                    className="flex items-start gap-3"
                                >
                                    <div className="mt-0.5">{f.icon}</div>
                                    <div>
                                        <div className="font-medium">{f.title}</div>
                                        <div className="text-sm text-muted-foreground">{f.desc}</div>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                <motion.div
                    className="relative rounded-xl overflow-hidden border border-primary/20 bg-background/80 backdrop-blur-sm p-6 flex items-center justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                    <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                    <div className="relative z-10 w-full">
                        <div className="rounded-lg border border-primary/20 overflow-hidden shadow-sm">
                            <img
                                src="/images/product.png"
                                alt="Al-miqdar Rakat Counter Device"
                                width={320}
                                height={180}
                                className="mx-auto my-4 max-w-xs max-h-52 rounded-lg shadow"
                            />
                        </div>
                        <p className="text-sm text-muted-foreground mt-3 text-center">
                            Device illustration. Actual unit ships with compact enclosure and LED/LCD display.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Plans */}
            <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <h3 className="text-3xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                    Recharge Plans
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Choose a plan and recharge your device with secure OTP verification. Pricing in INR.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {plans.map((plan, idx) => (
                    <motion.div
                        key={plan.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + 0.1 * idx, duration: 0.6 }}
                    >
                        <Card
                            className={`h-full border-primary/20 bg-background/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 relative group ${plan.highlight ? "ring-2 ring-primary/30 scale-105" : "hover:scale-105"
                                }`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                            {plan.highlight && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-gradient-to-r from-primary to-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                                        Most Popular
                                    </span>
                                </div>
                            )}
                            <CardHeader className="relative z-10 pb-4">
                                <CardTitle className="text-center">
                                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                                        {plan.name}
                                    </span>
                                </CardTitle>
                                <div className="text-center mt-4">
                                    <span className="text-4xl font-bold">₹{plan.priceINR.toLocaleString("en-IN")}</span>
                                    <span className="text-muted-foreground text-sm"> / {plan.per}</span>
                                </div>
                            </CardHeader>
                            <CardContent className="relative z-10 pt-0">
                                <ul className="space-y-3 mb-6">
                                    {plan.features.map((f, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm">
                                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    className="w-full bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white font-medium"
                                    onClick={() => setOpenPlan(plan)}
                                >
                                    Recharge Now
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {openPlan && <RechargeDialog plan={openPlan} onOpenChange={(o) => !o && setOpenPlan(null)} />}
            </AnimatePresence>
        </section>
    )
}