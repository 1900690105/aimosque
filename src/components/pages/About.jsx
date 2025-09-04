import React from "react";

export default function About() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-4 text-primary">About AITHEONIX</h1>
            <p className="text-lg text-muted-foreground mb-4">
                At <span className="font-semibold">AITHEONIX</span>, we are passionate
                about creating innovative technology solutions that empower businesses
                and individuals to thrive in the digital era.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
                Our mission is to <strong>blend Artificial Intelligence, IoT, and modern
                    software engineering</strong> to deliver products and services that are
                smart, scalable, and user-friendly.
            </p>
            <ul className="list-disc pl-6 text-lg text-muted-foreground">
                <li><strong>Innovation</strong> → Building solutions that push boundaries.</li>
                <li><strong>Integrity</strong> → Delivering value with honesty and transparency.</li>
                <li><strong>Impact</strong> → Making technology meaningful for real-world problems.</li>
            </ul>
        </div>
    );
}
