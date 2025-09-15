import React from "react";
import { ProductSection } from "../product-section";

export default function ProductPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
            <div className="container mx-auto px-4 py-10">
                <ProductSection />
            </div>
        </main>
    );
}
