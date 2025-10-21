"use client";

import Tag from "@/components/Tag";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const faqs = [
    {
        question: "How does Zenarmor's deployment work?",
        answer: "Zenarmor features Plug & Secure deployment that enables omnipresent security in minutes, not weeks. It's an all-software solution deployable on virtually any platform with network access, requiring no dedicated hardware.",
    },
    {
        question: "How often are threat signatures updated?",
        answer: "The majority of threat signatures are served through real-time cloud infrastructure with updates within minutes. Local databases update hourly, and sophisticated local signatures receive 1-4 updates monthly.",
    },
    {
        question: "How does TLS inspection work?",
        answer: "Zenarmor offers two modes: Light-weight inspection examines initial TLS phases without decryption, while Full TLS Inspection terminates SSL connections, decrypts content, inspects packets, and re-encrypts for complete visibility.",
    },
    {
        question: "Can I manage multiple firewalls from one dashboard?",
        answer: "Yes! Zenarmor provides centralized cloud-based policy management, allowing you to control thousands of firewalls from a single interface without individual device logins.",
    },
    {
        question: "What platforms does Zenarmor support?",
        answer: "Zenarmor supports multiple operating systems including OPNsense, FreeBSD, Linux distributions, Windows, and macOS with native endpoint, cloud, and edge inspection capabilities.",
    },
];

export default function Faqs() {
    // Initialize all FAQs as closed
    const [openFaqs, setOpenFaqs] = useState(Array(faqs.length).fill(false));

    const toggleFaq = (index: number) => {
        setOpenFaqs((prev) => {
            const newOpenFaqs = [...prev];
            newOpenFaqs[index] = !newOpenFaqs[index]; // Toggle the specific FAQ
            return newOpenFaqs;
        });
    };

    return (
        <section className="py-24 bg-white">
            <div className="container">
                <div className="flex justify-center">
                    <Tag section="faq">FAQ</Tag>
                </div>
                <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto text-brand-navy">
                    Questions? We got the <span className="text-brand-mustard">answers</span>
                </h2>

                <div className="mt-12 flex flex-col gap-6 max-w-2xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-neutral-50 rounded-2xl border border-neutral-200 p-6">
                            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFaq(index)}>
                                <h3 className="font-medium text-brand-navy">{faq.question}</h3>
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
                                        <p className="text-neutral-600">{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <Link href={'/faq'} className="flex justify-center mt-6 text-lg hover:underline text-brand-navy">All the FAQ</Link>
            </div>
        </section>
    );
}
