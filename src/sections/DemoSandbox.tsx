"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Button from "@/components/Button";
import Tag from "@/components/Tag";
import Image from "next/image";
import demoImage from "@/assets/images/demo.png";

interface DemoTab {
    id: string;
    label: string;
    title: string;
    description: string;
    features: string[];
    metric?: string;
    metricLabel?: string;
}

const demoTabs: DemoTab[] = [
    {
        id: "deploy",
        label: "Deploy",
        title: "Deploy Globally in Minutes",
        description: "Zero-touch provisioning with instant endpoint activation. No complex configurations, no waiting for cloud POPs.",
        features: [
            "Zero-touch provisioning",
            "500+ endpoints secured in 12 minutes",
            "No hardware appliances required",
            "Automatic policy sync across locations"
        ],
        metric: "15 min",
        metricLabel: "Average Deploy Time"
    },
    {
        id: "monitor",
        label: "Monitor",
        title: "Real-Time Visibility Across Your Network",
        description: "Unified dashboard with comprehensive threat intelligence and network analytics in real-time.",
        features: [
            "Single-pane-of-glass management",
            "Real-time threat detection",
            "Traffic analytics and insights",
            "Automated compliance reporting"
        ],
        metric: "99.9%",
        metricLabel: "Threat Detection Rate"
    },
    {
        id: "respond",
        label: "Respond",
        title: "Automated Threat Response",
        description: "AI-powered security that responds to threats instantly, without manual intervention.",
        features: [
            "Automated threat blocking",
            "Instant policy updates",
            "Zero-day threat protection",
            "Endpoint isolation capabilities"
        ],
        metric: "<1 sec",
        metricLabel: "Response Time"
    },
    {
        id: "scale",
        label: "Scale",
        title: "Effortless Scalability",
        description: "Grow from 50 to 5,000 endpoints without infrastructure changes. Built for distributed workforces.",
        features: [
            "Cloud-native architecture",
            "No capacity planning needed",
            "Automatic load balancing",
            "Global edge network"
        ],
        metric: "10,000+",
        metricLabel: "Max Endpoints"
    }
];

export default function DemoSandbox() {
    const [activeTab, setActiveTab] = useState("deploy");

    const activeDemo = demoTabs.find(tab => tab.id === activeTab) || demoTabs[0];

    return (
        <section className="py-24 bg-white">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>See Zenarmor in Action</Tag>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-center mt-6 max-w-3xl mx-auto text-brand-navy">
                    Experience SASE Deployment in{" "}
                    <span className="text-brand-mustard">30 Seconds</span>
                </h2>

                <p className="text-center text-lg text-brand-neutral mt-6 max-w-2xl mx-auto">
                    See how Zenarmor makes enterprise-grade SASE simple enough for small IT teams
                </p>

                {/* Tab Navigation */}
                <div className="flex justify-center mt-12">
                    <div className="inline-flex bg-brand-navy/5 rounded-full p-1.5 gap-1">
                        {demoTabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`
                                    relative px-6 md:px-8 py-3 rounded-full font-medium text-sm md:text-base
                                    transition-all duration-300
                                    ${activeTab === tab.id
                                        ? 'text-white'
                                        : 'text-brand-navy hover:text-brand-mustard'
                                    }
                                `}
                            >
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-gradient-to-r from-brand-mustard to-brand-mustard/90 rounded-full"
                                        transition={{ type: "spring", duration: 0.5 }}
                                    />
                                )}
                                <span className="relative z-10">{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Demo Content */}
                <div className="mt-12 max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-2xl border border-brand-navy/10 overflow-hidden shadow-lg"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 p-8 md:p-12">
                                {/* Left: Content */}
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-medium text-brand-navy mb-4">
                                            {activeDemo.title}
                                        </h3>
                                        <p className="text-brand-neutral text-base md:text-lg">
                                            {activeDemo.description}
                                        </p>
                                    </div>

                                    {/* Features Checklist */}
                                    <div className="space-y-3 pt-4">
                                        {activeDemo.features.map((feature, index) => (
                                            <motion.div
                                                key={feature}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="flex items-start gap-3"
                                            >
                                                <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-brand-mustard/10 flex items-center justify-center">
                                                    <svg className="w-3 h-3 text-brand-mustard" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <span className="text-brand-navy text-sm md:text-base">{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Metric Highlight */}
                                    {activeDemo.metric && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.4 }}
                                            className="bg-gradient-to-br from-brand-navy/5 to-brand-mustard/5 rounded-xl p-6 border border-brand-navy/10"
                                        >
                                            <div className="text-4xl md:text-5xl font-bold text-brand-mustard mb-1">
                                                {activeDemo.metric}
                                            </div>
                                            <div className="text-sm text-brand-navy/70">
                                                {activeDemo.metricLabel}
                                            </div>
                                        </motion.div>
                                    )}
                                </div>

                                {/* Right: Visual Demo Preview */}
                                <div className="relative">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="relative rounded-xl overflow-hidden border-2 border-brand-navy/10 shadow-lg"
                                    >
                                        {/* Actual Dashboard Screenshot */}
                                        <Image
                                            src={demoImage}
                                            alt="ZenConsole Dashboard - SASE Management Platform"
                                            className="w-full h-auto"
                                            priority
                                        />

                                        {/* Overlay Label */}
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                                            <div className="bg-white/90 backdrop-blur-sm border border-brand-navy/10 rounded-full px-4 py-2 shadow-lg">
                                                <span className="text-xs font-medium text-brand-navy">Live Dashboard Preview</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                    <Button
                        variant="primary"
                        className="transition-transform hover:scale-105"
                    >
                        Try Full Demo
                    </Button>
                    <Button
                        variant="secondary"
                        className="transition-transform hover:scale-105"
                    >
                        Schedule Walkthrough
                    </Button>
                </div>
            </div>
        </section>
    );
}
