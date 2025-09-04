import React from "react";

export default function PrivacyPolicy() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-4 text-primary">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground mb-4">
                Your privacy matters to us at <span className="font-semibold">AITHEONIX</span>.
            </p>
            <ul className="list-disc pl-6 text-lg text-muted-foreground space-y-2">
                <li>We collect minimal data necessary to improve our services.</li>
                <li>We do not sell, trade, or rent your personal information.</li>
                <li>All data shared with us is encrypted and securely stored.</li>
                <li>You can request deletion or access to your data anytime.</li>
            </ul>
            <p className="text-lg text-muted-foreground mt-4">
                We are committed to ensuring that your data is handled responsibly and
                securely in compliance with applicable laws.
            </p>
        </div>
    );
}
