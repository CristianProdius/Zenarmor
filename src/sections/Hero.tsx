"use client";

import Button from "@/components/Button";
import Tag from "@/components/Tag";
import ROICalculator from "@/components/ROICalculator";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Hero() {
    const handleStartTrial = () => {
        // In production, this would redirect to trial signup page
        toast.success("Redirecting to free trial signup...");
        // window.location.href = '/trial-signup';
    };

    const handleScheduleDemo = () => {
        // In production, this would open demo scheduling
        toast.info("Opening demo scheduler...");
        // window.location.href = '/schedule-demo';
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
                    <Tag>Trusted by 13.5K+ mid-market deployments worldwide</Tag>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-medium text-center mt-6 text-brand-navy"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Purpose-Built Single-Stack <span className="text-brand-mustard">SASE</span> for Mid-Market
                </motion.h1>

                <motion.p
                    className="text-center text-lg md:text-xl text-brand-neutral mt-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Deploy in minutes, not months. Built for 1-5 person IT teams managing distributed workforces.
                    Endpoint-based SASE that works even when cloud POPs fail.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 mt-8 max-w-lg mx-auto justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <Button
                        onClick={handleStartTrial}
                        variant="primary"
                        className="whitespace-nowrap transition-all hover:scale-105"
                    >
                        Start Free Trial
                    </Button>
                    <Button
                        onClick={handleScheduleDemo}
                        variant="secondary"
                        className="whitespace-nowrap transition-all hover:scale-105"
                    >
                        Schedule Demo
                    </Button>
                </motion.div>

                {/* ROI Calculator */}
                <ROICalculator />

                {/* Trust indicators */}
                <motion.div
                    className="flex justify-center items-center gap-8 mt-12 flex-wrap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <div className="flex items-center gap-2 text-brand-neutral">
                        <svg className="w-5 h-5 text-brand-mustard" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Deploy in 15 Minutes</span>
                    </div>
                    <div className="flex items-center gap-2 text-brand-neutral">
                        <svg className="w-5 h-5 text-brand-mustard" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                        <span className="text-sm">Built for 1-5 Person IT Teams</span>
                    </div>
                    <div className="flex items-center gap-2 text-brand-neutral">
                        <svg className="w-5 h-5 text-brand-mustard" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Single-Stack Architecture</span>
                    </div>
                </motion.div>
            </section>
        </main>
    )
}
