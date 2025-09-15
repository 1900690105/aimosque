import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>

      {/* Animated container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* ✅ Clickable & Animated Logo */}
          <Link to="/" className="flex items-center mb-4 md:mb-0 group">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-church h-5 w-5 mr-2 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-500"
              whileTap={{ scale: 0.9 }}
            >
              <path d="M10 9h4"></path>
              <path d="M12 7v5"></path>
              <path d="M14 22v-4a2 2 0 0 0-4 0v4"></path>
              <path d="M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22"></path>
              <path d="m18 7 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.618a1 1 0 0 1 .553-.894L6 7"></path>
            </motion.svg>

            <motion.span
              className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 transition-transform duration-300 group-hover:scale-105"
              whileTap={{ scale: 0.95 }}
            >
              Al-miqdar
            </motion.span>
          </Link>

          {/* Footer links */}
          <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-8">
            <a
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              href="/about"
            >
              About
            </a>
            <a
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              href="/privacy-policy"
            >
              Privacy Policy
            </a>
            <a
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              href="/terms"
            >
              Terms of Service
            </a>
            <a
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              href="/contact"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-muted-foreground">
          © AITHEONIX. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
}
