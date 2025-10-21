"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
    {
        question: "What makes Zenarmor different from traditional firewalls?",
        answer: "Zenarmor combines next-generation packet inspection with AI-powered threat detection, offering deeper visibility and control than traditional firewalls. Our advanced DPI technology identifies threats in real-time while maintaining minimal network overhead, ensuring both security and performance.",
    },
    {
        question: "Which platforms does Zenarmor support?",
        answer: "Zenarmor seamlessly integrates with OPNsense, pfSense, FreeBSD, macOS, Windows, and Ubuntu. Our flexible deployment model allows you to protect your network regardless of your infrastructure, from home offices to enterprise data centers with over 13.5K+ active deployments worldwide.",
    },
    {
        question: "How does Zenarmor handle encrypted traffic?",
        answer: "Zenarmor uses advanced heuristic analysis and machine learning to identify threats even in encrypted traffic without compromising user privacy. Our intelligent inspection techniques analyze traffic patterns, metadata, and behavioral indicators to detect malicious activity while respecting encryption protocols.",
    },
    {
        question: "Is Zenarmor suitable for small businesses and home networks?",
        answer: "Absolutely! Zenarmor scales from home networks to enterprise deployments. Our intuitive management interface makes enterprise-grade security accessible to everyone, while advanced features remain available for power users and security professionals who need granular control.",
    },
    {
        question: "What kind of threats does Zenarmor protect against?",
        answer: "Zenarmor provides comprehensive protection against malware, ransomware, phishing attacks, botnet communication, data exfiltration, and zero-day exploits. Our constantly updated threat intelligence database and behavioral analysis engine ensure you stay protected against emerging threats.",
    },
    {
        question: "How do updates and threat intelligence work?",
        answer: "Zenarmor receives automatic threat intelligence updates to protect against the latest security threats. Our cloud-based threat database is continuously updated with signatures and behavioral patterns from our global network, ensuring real-time protection without manual intervention.",
    },
    {
        question: "Can I monitor network activity and generate reports?",
        answer: "Yes! Zenarmor provides comprehensive analytics, real-time monitoring dashboards, and detailed reporting capabilities. Track bandwidth usage, identify security incidents, analyze traffic patterns, and generate compliance reports with our intuitive visualization tools and customizable alerts.",
    },
];

const FaqComponent = () => {

    const [openFaqs, setOpenFaqs] = useState(Array(faqs.length).fill(false));

    const toggleFaq = (index: number) => {
        setOpenFaqs((prev) => {
            const newOpenFaqs = [...prev];
            newOpenFaqs[index] = !newOpenFaqs[index]; 
            return newOpenFaqs;
        });
    };

    return (
        <section className="">
            <div className="container">
                <div className="mt-12 flex flex-col gap-6 max-w-2xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFaq(index)}>
                                <h3 className="font-medium text-gray-900">{faq.question}</h3>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={twMerge(
                                        "feather feather-plus text-brand-mustard flex-shrink-0 transition duration-300",
                                        openFaqs[index] && "rotate-45"
                                    )}
                                >
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>

                            <AnimatePresence>
                                {openFaqs[index] && (
                                    <motion.div
                                        initial={{
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        animate={{
                                            height: "auto",
                                            marginTop: 24,
                                        }}
                                        exit={{
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        className={twMerge("overflow-hidden")}
                                    >
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FaqComponent
