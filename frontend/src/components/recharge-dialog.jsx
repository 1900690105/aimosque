import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/Dialog";
import Label from "./ui/Label";
import Input  from "./ui/Input";
import Button from "./ui/Button";
import { useToast } from "../hooks/use-toast";
import { ArrowLeft, Copy, ExternalLink } from "lucide-react";

const DEMO_OTP = "123456";

export function RechargeDialog({ plan, onOpenChange }) {
    const { toast } = useToast();
    const [open, setOpen] = useState(true);

    const [step, setStep] = useState("details"); // "details" | "otp" | "upi"
    const [sending, setSending] = useState(false);
    const [verifying, setVerifying] = useState(false);
    const [otpSent, setOtpSent] = useState(false);

    const [modelNumber, setModelNumber] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");

    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const inputsRef = useRef([]);

    const [upiId, setUpiId] = useState("almiqdar@ybl");
    const [preferredApp, setPreferredApp] = useState("any");
    const [upiLink, setUpiLink] = useState("");

    useEffect(() => {
        if (step === "otp" && otpSent && inputsRef.current[0]) {
            inputsRef.current[0].focus();
        }
    }, [step, otpSent]);

    const canSend =
        modelNumber.trim().length > 0 &&
        password.trim().length > 0 &&
        /^\d{10}$/.test(mobile);

    const handleSendOtp = async () => {
        if (!canSend) {
            toast({
                title: "Check details",
                description: "Enter valid model number, password and 10-digit mobile number.",
                variant: "destructive",
            });
            return;
        }
        setSending(true);
        await new Promise((r) => setTimeout(r, 600));
        setSending(false);
        setOtpSent(true);
        setStep("otp");
        toast({
            title: "OTP sent",
            description: `Demo OTP for ${mobile}: ${DEMO_OTP}`,
        });
    };

    const handleOtpChange = (i, v) => {
        if (!/^\d?$/.test(v)) return;
        const next = [...otp];
        next[i] = v;
        setOtp(next);
        if (v && i < 5) inputsRef.current[i + 1]?.focus();
        if (!v && i > 0) inputsRef.current[i - 1]?.focus();
    };

    const handlePasteOtp = (e) => {
        const data = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
        if (!data) return;
        e.preventDefault();
        const next = [...otp];
        for (let i = 0; i < 6; i++) next[i] = data[i] || "";
        setOtp(next);
        inputsRef.current[Math.min(data.length, 5)]?.focus();
    };

    const handleVerify = async () => {
        const entered = otp.join("");
        if (entered.length !== 6) {
            toast({ title: "Enter full OTP", description: "Please enter all 6 digits.", variant: "destructive" });
            return;
        }
        setVerifying(true);
        await new Promise((r) => setTimeout(r, 700));
        setVerifying(false);

        if (entered === DEMO_OTP) {
            setStep("upi");
            toast({
                title: "OTP verified",
                description: "Enter your UPI details to proceed with the payment.",
            });
        } else {
            toast({ title: "Invalid OTP", description: "Please check and try again.", variant: "destructive" });
        }
    };

    const buildUpiUrl = () => {
        const params = new URLSearchParams({
            pa: upiId,
            pn: "Al-miqdar",
            tn: `${plan.name} Recharge - Model ${modelNumber}`,
            am: String(plan.priceINR),
            cu: "INR",
        });
        let base = "upi://pay?";
        if (preferredApp === "googlepay") base = "tez://upi/pay?";
        if (preferredApp === "phonepe") base = "phonepe://pay?";
        return `${base}${params.toString()}`;
    };

    const handleProceedToPay = () => {
        if (!/^[\w.-]+@[\w-]{2,}$/.test(upiId)) {
            toast({
                title: "Invalid UPI ID",
                description: "Please enter a valid UPI ID, e.g., name@bank.",
                variant: "destructive",
            });
            return;
        }
        const url = buildUpiUrl();
        setUpiLink(url);

        try {
            window.location.href = url;
        } catch {
            // keep UPI section visible
        }
    };

    const getStepTitle = () => {
        switch (step) {
            case "details": return "Device Details";
            case "otp": return "Verify OTP";
            case "upi": return "UPI Payment";
            default: return "Recharge";
        }
    };

    return (
        <Dialog
            open={open}
            onOpenChange={(v) => {
                setOpen(v);
                onOpenChange(v);
            }}
        >
            <DialogContent className="sm:max-w-lg border-primary/20 bg-background/95 backdrop-blur-sm">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                            {getStepTitle()} - {plan.name}
                        </span>
                    </DialogTitle>
                    <p className="text-sm text-muted-foreground">
                        ₹{plan.priceINR.toLocaleString("en-IN")} / {plan.per}
                    </p>
                </DialogHeader>

                <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    {step === "details" && (
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="model">Model Number</Label>
                                    <Input
                                        id="model"
                                        placeholder="e.g., AMQ-2025-01"
                                        value={modelNumber}
                                        onChange={(e) => setModelNumber(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="pass">Password</Label>
                                    <Input
                                        id="pass"
                                        type="password"
                                        placeholder="Admin password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="mobile">Mobile Number (for OTP)</Label>
                                <Input
                                    id="mobile"
                                    inputMode="numeric"
                                    maxLength={10}
                                    placeholder="10-digit mobile"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
                                />
                            </div>

                            <Button
                                className="w-full bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90"
                                onClick={handleSendOtp}
                                disabled={sending || !canSend}
                            >
                                {sending ? "Sending OTP..." : "Send OTP"}
                            </Button>
                        </div>
                    )}

                    {step === "otp" && (
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-muted-foreground">Enter the 6-digit OTP sent to {mobile}</p>
                                <button
                                    type="button"
                                    onClick={handleSendOtp}
                                    className="text-xs text-primary hover:underline"
                                >
                                    Resend
                                </button>
                            </div>

                            <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                                <p className="text-xs text-primary font-medium">
                                    Demo OTP: <span className="font-mono text-sm">123456</span>
                                </p>
                            </div>

                            <div className="flex items-center justify-between gap-2">
                                {otp.map((d, i) => (
                                    <Input
                                        key={i}
                                        ref={(el) => (inputsRef.current[i] = el)}
                                        className="text-center text-lg font-mono"
                                        value={d}
                                        onChange={(e) => handleOtpChange(i, e.target.value)}
                                        onPaste={i === 0 ? handlePasteOtp : undefined}
                                        maxLength={1}
                                        inputMode="numeric"
                                        aria-label={`OTP digit ${i + 1}`}
                                    />
                                ))}
                            </div>

                            <div className="flex gap-2">
                                <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setStep("details")}>
                                    <ArrowLeft className="h-4 w-4 mr-2" />
                                    Back
                                </Button>
                                <Button
                                    className="flex-1 bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90"
                                    onClick={handleVerify}
                                    disabled={verifying}
                                >
                                    {verifying ? "Verifying..." : "Verify OTP"}
                                </Button>
                            </div>
                        </div>
                    )}

                    {step === "upi" && (
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="upi">UPI ID (Receiver)</Label>
                                <Input
                                    id="upi"
                                    placeholder="e.g., almiqdar@ybl"
                                    value={upiId}
                                    onChange={(e) => setUpiId(e.target.value.trim())}
                                />
                                <p className="text-xs text-muted-foreground">
                                    Enter the UPI ID to receive the payment. You can keep the default if it's correct.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="app">Preferred App</Label>
                                <select
                                    id="app"
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                    value={preferredApp}
                                    onChange={(e) => setPreferredApp(e.target.value)}
                                >
                                    <option value="any">Any UPI App</option>
                                    <option value="googlepay">Google Pay</option>
                                    <option value="phonepe">PhonePe</option>
                                </select>
                            </div>

                            <div className="flex gap-2">
                                <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setStep("otp")}>
                                    <ArrowLeft className="h-4 w-4 mr-2" />
                                    Back
                                </Button>
                                <Button
                                    className="flex-1 bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90"
                                    onClick={handleProceedToPay}
                                >
                                    <ExternalLink className="h-4 w-4 mr-2" />
                                    Proceed to Pay
                                </Button>
                            </div>

                            {upiLink && (
                                <motion.div
                                    className="space-y-3 p-4 bg-primary/5 border border-primary/20 rounded-lg"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Label>UPI Payment Link</Label>
                                    <div className="flex gap-2">
                                        <Input readOnly value={upiLink} className="flex-1 font-mono text-xs" />
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => {
                                                navigator.clipboard.writeText(upiLink);
                                                toast({ title: "Copied", description: "UPI link copied to clipboard." });
                                            }}
                                        >
                                            <Copy className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        If Google Pay or PhonePe doesn't open automatically, copy this link and paste it in your UPI app.
                                    </p>
                                    <div className="flex justify-end">
                                        <Button
                                            variant="secondary"
                                            onClick={() => {
                                                toast({
                                                    title: "Payment pending",
                                                    description: "Complete the payment in your UPI app. This dialog will remain open.",
                                                });
                                            }}
                                        >
                                            Done
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    )}
                </motion.div>
            </DialogContent>
        </Dialog>
    );
}

