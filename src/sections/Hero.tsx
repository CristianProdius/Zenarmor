"use client";

import Button from "@/components/Button";
import Tag from "@/components/Tag";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Hero() {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            toast.error("Please enter a valid email address!");
            return;
        }

        // In a real app, this would send to your backend/mailing list API
        toast.success("Thanks for subscribing! We'll keep you updated.");
        setEmail(""); // Clear the input
    };

    return (
        <main className="py-16 lg:py-24 overflow-hidden bg-white relative">
            {/* Animated background gradient orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute left-0 top-20 w-[500px] h-[500px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(249, 136, 0, 0.15) 0%, rgba(249, 136, 0, 0) 70%)',
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [-100, -50, -100],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <motion.div
                    className="absolute right-0 top-10 w-[600px] h-[600px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(2, 0, 69, 0.12) 0%, rgba(2, 0, 69, 0) 70%)',
                    }}
                    animate={{
                        scale: [1.2, 1, 1.2],
                        x: [100, 50, 100],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />

                <motion.div
                    className="absolute left-1/2 bottom-10 w-[700px] h-[500px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(249, 136, 0, 0.08) 0%, rgba(249, 136, 0, 0) 70%)',
                        transform: 'translateX(-50%)',
                    }}
                    animate={{
                        scale: [1, 1.15, 1],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
            </div>

            <section className="relative container z-10">

                {/* Network connection decorative lines */}
                <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none hidden lg:block" xmlns="http://www.w3.org/2000/svg">
                    <motion.line
                        x1="10%" y1="20%" x2="90%" y2="80%"
                        stroke="#020045"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.3 }}
                        transition={{ duration: 2, delay: 0.5 }}
                    />
                    <motion.line
                        x1="20%" y1="80%" x2="80%" y2="20%"
                        stroke="#F98800"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.3 }}
                        transition={{ duration: 2, delay: 1 }}
                    />
                    <motion.circle
                        cx="15%" cy="25%" r="4"
                        fill="#020045"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.4 }}
                        transition={{ duration: 0.5, delay: 2.5 }}
                    />
                    <motion.circle
                        cx="85%" cy="75%" r="4"
                        fill="#F98800"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.4 }}
                        transition={{ duration: 0.5, delay: 2.5 }}
                    />
                </svg>

                {/* Main content */}
                <motion.div
                    className="flex justify-center items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Tag>Trusted by 13.5K+ deployments worldwide</Tag>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-medium text-center mt-6 text-brand-navy"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Next-Generation Cybersecurity Solutions
                </motion.h1>

                <motion.p
                    className="text-center text-lg md:text-xl text-brand-neutral mt-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Advanced packet inspection technology ensuring maximum protection with minimal overhead.
                    Safeguarding networks across the globe with seamless deployment and intuitive management.
                </motion.p>

                <motion.form
                    className="flex border border-brand-navy rounded-full mt-8 p-2 max-w-lg mx-auto"
                    onSubmit={handleSubscribe}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent px-4 md:flex-1 w-full focus:outline-none text-brand-navy placeholder:text-brand-neutral"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button
                        type="submit"
                        variant="primary"
                        className="whitespace-nowrap transition-colors"
                        size="sm"
                    >
                        Get Started
                    </Button>
                </motion.form>

                {/* Trust indicators */}
                <motion.div
                    className="flex justify-center items-center gap-8 mt-12 flex-wrap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <div className="flex items-center gap-2 text-brand-neutral">
                        <svg className="w-5 h-5 text-brand-mustard" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Enterprise-Grade Security</span>
                    </div>
                    <div className="flex items-center gap-2 text-brand-neutral">
                        <svg className="w-5 h-5 text-brand-mustard" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                        </svg>
                        <span className="text-sm">Minimal Performance Overhead</span>
                    </div>
                    <div className="flex items-center gap-2 text-brand-neutral">
                        <svg className="w-5 h-5 text-brand-mustard" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Deploy Anywhere</span>
                    </div>
                </motion.div>
            </section>
        </main>
    )
}
