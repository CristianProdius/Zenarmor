"use client";

import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import Key from "@/components/Key";
import { motion } from "framer-motion";
import { useState } from "react";

interface FeatureSet {
    id: string;
    label: string;
    card1Title: string;
    card1Description: string;
    card2Title: string;
    card2Description: string;
    card3Title: string;
    card3Description: string;
    features: string[];
}

const featureSets: FeatureSet[] = [
    {
        id: "sase",
        label: "SASE",
        card1Title: "Cloud-Based Management",
        card1Description: "Manage thousands of firewalls from a single dashboard with centralized policy control",
        card2Title: "Zero-Trust Network Access",
        card2Description: "Identity-based access policies with encryption for secure connections to private resources",
        card3Title: "Real-Time Threat Intelligence",
        card3Description: "Advanced packet inspection with cloud threat intelligence and TLS inspection across all ports",
        features: [
            "Deep Packet Inspection",
            "Cloud App Control",
            "Web Filtering",
            "Traffic Shaping",
            "TLS Inspection",
            "Active Directory",
            "Multi-Tenant",
        ]
    },
    {
        id: "ztna",
        label: "ZTNA",
        card1Title: "Identity-Based Access",
        card1Description: "Multi-factor authentication and device posture checking for all connections",
        card2Title: "Application Segmentation",
        card2Description: "Granular access control at the application level, not just network level",
        card3Title: "Least Privilege Enforcement",
        card3Description: "Automatic enforcement of zero-trust policies with continuous verification",
        features: [
            "Multi-Factor Auth",
            "Device Posture",
            "App-Level Access",
            "Identity Verification",
            "Conditional Access",
            "Session Recording",
            "Just-In-Time Access",
        ]
    },
    {
        id: "sse",
        label: "SSE",
        card1Title: "Secure Web Gateway",
        card1Description: "URL filtering, malware detection, and data loss prevention for web traffic",
        card2Title: "Cloud Access Security",
        card2Description: "CASB capabilities for SaaS applications with Shadow IT discovery",
        card3Title: "Data Loss Prevention",
        card3Description: "Automated DLP policies to prevent sensitive data exfiltration",
        features: [
            "URL Filtering",
            "Malware Detection",
            "Shadow IT Discovery",
            "DLP Policies",
            "Cloud App Security",
            "SSL Inspection",
            "Threat Prevention",
        ]
    },
    {
        id: "cloud",
        label: "Cloud Security",
        card1Title: "Endpoint Inspection",
        card1Description: "Inspect traffic at the endpoint, eliminating cloud POP dependency",
        card2Title: "AI-Powered Detection",
        card2Description: "Machine learning algorithms identify and block zero-day threats automatically",
        card3Title: "Unified Threat Management",
        card3Description: "Single-stack architecture combining firewall, IPS, and anti-malware",
        features: [
            "Endpoint Protection",
            "Zero-Day Defense",
            "IPS/IDS",
            "Anti-Malware",
            "DNS Security",
            "Sandboxing",
            "Threat Analytics",
        ]
    }
];

export default function Features() {
    const [activeTab, setActiveTab] = useState("sase");

    const currentFeatureSet = featureSets.find(set => set.id === activeTab) || featureSets[0];

    return (
        <section className="py-24 bg-white">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Features</Tag>
                </div>
                <h2 className="text-6xl text-center font-medium mt-6 max-w-2xl mx-auto text-brand-navy">
                    Enterprise security, <span className="text-brand-mustard">effortlessly deployed</span>
                </h2>

                {/* Tab Navigation */}
                <div className="flex justify-center mt-10">
                    <div className="inline-flex flex-wrap justify-center bg-brand-navy/5 rounded-full p-1.5 gap-1">
                        {featureSets.map((set) => (
                            <button
                                key={set.id}
                                onClick={() => setActiveTab(set.id)}
                                className={`
                                    relative px-6 md:px-8 py-3 rounded-full font-medium text-sm md:text-base
                                    transition-all duration-300
                                    ${activeTab === set.id
                                        ? 'text-white'
                                        : 'text-brand-navy hover:text-brand-mustard'
                                    }
                                `}
                            >
                                {activeTab === set.id && (
                                    <motion.div
                                        layoutId="activeFeatureTab"
                                        className="absolute inset-0 bg-gradient-to-r from-brand-mustard to-brand-mustard/90 rounded-full"
                                        transition={{ type: "spring", duration: 0.5 }}
                                    />
                                )}
                                <span className="relative z-10">{set.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Feature Cards - Original Design */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8"
                >
                    <FeatureCard
                        title={currentFeatureSet.card1Title}
                        description={currentFeatureSet.card1Description}
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video flex justify-center items-center">
                            <div className="size-16 bg-gradient-to-br from-[#F98800] to-[#E07A00] rounded-2xl inline-flex justify-center items-center z-40 shadow-lg">
                                <svg className="size-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div className="-ml-6 size-16 bg-gradient-to-br from-[#020045] to-[#1a1a5e] rounded-2xl inline-flex justify-center items-center z-30 shadow-lg border-2 border-[#F98800]">
                                <svg className="size-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                                </svg>
                            </div>
                            <div className="-ml-6 size-16 bg-gradient-to-br from-[#9DA4AE] to-[#7a8088] rounded-2xl inline-flex justify-center items-center z-20 shadow-lg border-2 border-[#020045]">
                                <svg className="size-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                </svg>
                            </div>
                            <div className="-ml-6 size-16 bg-neutral-100 rounded-2xl inline-flex justify-center items-center z-10 shadow-lg border-2 border-transparent group-hover:border-[#F98800] group-hover:bg-gradient-to-br group-hover:from-[#F98800] group-hover:to-[#E07A00] transition-all duration-500">
                                <svg className="size-8 text-neutral-600 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title={currentFeatureSet.card2Title}
                        description={currentFeatureSet.card2Description}
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-neutral-300 group-hover:text-neutral-200 text-center transition duration-500">
                                Trusted by{" "}
                                <span className="relative bg-gradient-to-r from-[#F98800] to-[#020045] bg-clip-text text-transparent">
                                    <span>500K+</span>
                                    <video
                                        src={"/assets/gif-incredible.mp4"}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition duration-500"
                                    />
                                </span>{" "}
                                users worldwide.
                            </p>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title={currentFeatureSet.card3Title}
                        description={currentFeatureSet.card3Description}
                        className="md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-auto group"
                        highlighted
                    >
                        <div className="aspect-video flex items-center justify-center gap-4">
                            <Key className="w-28 outline outline-2 outline-offset-4 outline-transparent group-hover:outline-brand-mustard transition-all duration-500 group-hover:translate-y-1">
                                DPI
                            </Key>
                            <Key className="outline outline-2 outline-offset-4 outline-transparent group-hover:outline-brand-mustard transition-all duration-500 group-hover:translate-y-1 delay-150">
                                TLS
                            </Key>
                            <Key className="outline outline-2 outline-offset-4 outline-transparent group-hover:outline-brand-mustard transition-all duration-500 group-hover:translate-y-1 delay-300 ">
                                AI
                            </Key>
                        </div>
                    </FeatureCard>
                </motion.div>

                {/* Feature Badges - Original Design */}
                <motion.div
                    key={`badges-${activeTab}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="mt-8 flex flex-wrap gap-3 justify-center"
                >
                    {currentFeatureSet.features.map((feature) => (
                        <div
                            key={feature}
                            className="bg-neutral-100 items-center gap-3 border border-neutral-300 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl hover:scale-105 transition duration-500 group"
                        >
                            <span className="bg-brand-mustard text-brand-navy size-5 rounded-full inline-flex justify-center items-center text-xl group-hover:rotate-45 transition duration-500">
                                &#10038;
                            </span>
                            <span className="font-medium md:text-lg text-brand-navy">{feature}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
