import React from "react";

export default function Contact() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-4 text-primary">Contact Us</h1>
            <p className="text-lg text-muted-foreground mb-6">
                We’d love to hear from you! Whether you have a question, feedback, or
                partnership proposal, reach out anytime.
            </p>
            <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                    📍 <strong>Office Address:</strong> AITHEONIX Pvt. Ltd., Innovation Park,
                    Pune, Maharashtra, India
                </p>
                <p>📧 <strong>Email:</strong> support@aitheonix.com</p>
                <p>📞 <strong>Phone:</strong> +91-9876543210</p>
                <p>
                    🌐 <strong>Website:</strong>{" "}
                    <a
                        href="https://www.aitheonix.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary hover:underline"
                    >
                        www.aitheonix.com
                    </a>
                </p>
            </div>
        </div>
    );
}
