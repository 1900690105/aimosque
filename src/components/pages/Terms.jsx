import React from "react";

export default function Terms() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-4 text-primary">Terms of Service</h1>
            <ol className="list-decimal pl-6 text-lg text-muted-foreground space-y-2">
                <li>Our products and services must not be used for unlawful purposes.</li>
                <li>All content, logos, and software belong to AITHEONIX unless otherwise stated.</li>
                <li>
                    While we strive for accuracy and uptime, AITHEONIX is not responsible
                    for damages caused by downtime, errors, or third-party misuse.
                </li>
                <li>You are responsible for safeguarding your account credentials.</li>
                <li>
                    These terms may be updated periodically. Continued use means acceptance
                    of the updated terms.
                </li>
            </ol>
        </div>
    );
}
