"use client"

import React, { useEffect, useState } from "react";
import { FiShield, FiActivity, FiServer, FiLock } from "react-icons/fi";
import { motion } from "framer-motion";
import { Highlight } from "prism-react-renderer";

export const FeaturesComponent = () => {
    return (
        <div className="relative overflow-hidden bg-gray-50 text-gray-900">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <section className="relative z-20 pt-14 pb-14 md:pt-16 md:pb-24">
                    <span className="mx-auto mb-3 block w-fit rounded bg-gradient-to-br from-white to-gray-100 p-3 text-3xl shadow-md shadow-orange-200 group border border-gray-200">
                        <FiShield className="text-brand-mustard group-hover:scale-110 transition" />
                    </span>
                    <h2 className="mb-3 text-center text-3xl font-semibold leading-tight sm:text-5xl text-brand-navy">
                        Advanced Security Capabilities
                    </h2>
                    <p className="mb-6 text-center text-base leading-snug text-gray-600 sm:text-lg sm:leading-snug md:text-xl md:leading-snug">
                        Our <span className='text-brand-mustard font-semibold'>next-generation firewall</span> delivers powerful protection with <span className='text-brand-mustard font-semibold'>minimal overhead</span>
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <CodeCard />
                        <CodeCardRight />
                    </div>
                </section>
            </div>

            <BGGrid />
        </div>
    );
};

const BGGrid = () => {
    return (
        <div
            style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='rgb(209 213 219 / 0.5)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
            }}
            className="absolute bottom-0 left-0 right-0 top-0"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 via-gray-50/0 to-gray-50/80" />
            <Beams />
        </div>
    );
};

const Beams = () => {
    const { width } = useWindowSize();

    const numColumns = width ? Math.floor(width / GRID_BOX_SIZE) : 0;

    const placements = [
        {
            top: GRID_BOX_SIZE * 0,
            left: Math.floor(numColumns * 0.05) * GRID_BOX_SIZE,
            transition: {
                duration: 3.5,
                repeatDelay: 5,
                delay: 2,
            },
        },
        {
            top: GRID_BOX_SIZE * 12,
            left: Math.floor(numColumns * 0.15) * GRID_BOX_SIZE,
            transition: {
                duration: 3.5,
                repeatDelay: 10,
                delay: 4,
            },
        },
        {
            top: GRID_BOX_SIZE * 3,
            left: Math.floor(numColumns * 0.25) * GRID_BOX_SIZE,
        },
        {
            top: GRID_BOX_SIZE * 9,
            left: Math.floor(numColumns * 0.75) * GRID_BOX_SIZE,
            transition: {
                duration: 2,
                repeatDelay: 7.5,
                delay: 3.5,
            },
        },
        {
            top: 0,
            left: Math.floor(numColumns * 0.7) * GRID_BOX_SIZE,
            transition: {
                duration: 3,
                repeatDelay: 2,
                delay: 1,
            },
        },
        {
            top: GRID_BOX_SIZE * 2,
            left: Math.floor(numColumns * 1) * GRID_BOX_SIZE - GRID_BOX_SIZE,
            transition: {
                duration: 5,
                repeatDelay: 5,
                delay: 5,
            },
        },
    ];

    return (
        <>
            {placements.map((p, i) => (
                <Beam
                    key={i}
                    top={p.top}
                    left={p.left - BEAM_WIDTH_OFFSET}
                    transition={p.transition || {}}
                />
            ))}
        </>
    );
};

const Beam = ({ top, left, transition = {} }) => {
    return (
        <motion.div
            initial={{
                y: 0,
                opacity: 0,
            }}
            animate={{
                opacity: [0, 1, 0],
                y: 32 * 8,
            }}
            transition={{
                ease: "easeInOut",
                duration: 3,
                repeat: Infinity,
                repeatDelay: 1.5,
                ...transition,
            }}
            style={{
                top,
                left,
            }}
            className="absolute z-10 h-[64px] w-[1px] bg-gradient-to-b from-brand-mustard/0 to-brand-mustard"
        />
    );
};

const CodeCard = () => {
    const [selected, setSelected] = useState("opnsense");

    return (
        <Card className="mx-auto max-w-3xl pt-3">
            <div className="-mx-6 mb-6 flex items-center justify-between border-b border-gray-200 px-6 pb-3">
                <div className="md:flex items-center gap-3 space-y-1 md:space-y-0">
                    <ToggleChip
                        onClick={() => setSelected("opnsense")}
                        selected={selected === "opnsense"}
                    >
                        <FiServer className="inline mr-1" />
                        OPNsense Setup
                    </ToggleChip>
                    <ToggleChip
                        onClick={() => setSelected("policy")}
                        selected={selected === "policy"}
                    >
                        <FiLock className="inline mr-1" />
                        Security Policy
                    </ToggleChip>
                </div>
                <div className="relative md:flex gap-2 space-y-1 md:space-y-0">
                    <button
                        className={`relative z-0 md:flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-md
                        bg-gradient-to-br from-brand-mustard to-orange-600 px-3 py-1.5
                        text-xs font-medium text-white hidden sm:block
                        transition-all duration-300

                        before:absolute before:inset-0
                        before:-z-10 before:translate-y-[200%]
                        before:scale-[2.5]
                        before:rounded-[100%] before:bg-brand-navy
                        before:transition-transform before:duration-500
                        before:content-[""]

                        hover:scale-105 hover:text-white
                        hover:before:translate-y-[0%]
                        active:scale-100`}
                    >
                        <FiShield className="hidden sm:inline" />
                        <span className="hidden sm:inline">Deploy</span>
                    </button>
                </div>
            </div>
            <div className="-mx-6 overflow-x-auto px-6">
                <Markup code={selected === "opnsense" ? opnsenseCode : securityPolicyCode} />
            </div>
            <span className="absolute left-0 top-1/2 h-48 w-[1px] -translate-y-1/2 animate-pulse bg-gradient-to-b from-brand-mustard/0 via-brand-mustard to-brand-mustard/0" />
        </Card>
    );
};

const CodeCardRight = () => {
    const [selected, setSelected] = useState("threats");

    return (
        <Card className="mx-auto max-w-3xl pt-3">
            <div className="-mx-6 mb-6 flex items-center justify-between border-b border-gray-200 px-6 pb-3">
                <div className="md:flex items-center gap-3 space-y-1 md:space-y-0">
                    <ToggleChip
                        onClick={() => setSelected("threats")}
                        selected={selected === "threats"}
                    >
                        <FiActivity className="inline mr-1" />
                        Threat Detection
                    </ToggleChip>
                    <ToggleChip
                        onClick={() => setSelected("filtering")}
                        selected={selected === "filtering"}
                    >
                        <FiShield className="inline mr-1" />
                        Web Filtering
                    </ToggleChip>
                </div>
                <div className="relative md:flex gap-2 space-y-1 md:space-y-0">
                    <button
                        className={`relative z-0 md:flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-md
                            bg-gradient-to-br from-brand-mustard to-orange-600 px-3 py-1.5
                            text-xs font-medium text-white hidden sm:block
                            transition-all duration-300
                            before:absolute before:inset-0
                            before:-z-10 before:translate-y-[200%]
                            before:scale-[2.5]
                            before:rounded-[100%] before:bg-brand-navy
                            before:transition-transform before:duration-500
                            before:content-[""]
                            hover:scale-105 hover:text-white
                            hover:before:translate-y-[0%]
                            active:scale-100`}
                    >
                        <FiActivity className="hidden sm:inline" />
                        <span className="hidden sm:inline">Monitor</span>
                    </button>
                </div>
            </div>
            <div className="-mx-6 overflow-x-auto px-6">
                <Markup code={selected === "threats" ? threatDetectionCode : webFilteringCode} />
            </div>
            <span className="absolute left-0 top-1/2 h-48 w-[1px] -translate-y-1/2 animate-pulse bg-gradient-to-b from-brand-mustard/0 via-brand-mustard to-brand-mustard/0" />
        </Card>
    );
};


const ToggleChip = ({ children, selected, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`rounded px-1.5 py-0.5 text-sm font-medium transition-colors ${selected ? "bg-brand-mustard text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
        >
            {children}
        </button>
    );
};

const Card = ({ className, children }) => {
    return (
        <motion.div
            initial={{
                filter: "blur(4px)",
            }}
            whileInView={{
                filter: "blur(0px)",
            }}
            transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.25,
            }}
            className={`relative h-full w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg p-6 ${className}`}
        >
            {children}
        </motion.div>
    );
};

const Markup = ({ code }) => {
    return (
        <Highlight theme={theme} code={code} language="bash">
            {({ style, tokens, getLineProps, getTokenProps }) => (
                <pre style={style}>
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line })}>
                            <span className="inline-block w-[40px] select-none text-gray-400">
                                {i + 1}
                            </span>
                            {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    );
};

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        const handleResize = () =>
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
        window.removeEventListener("resize", handleResize);
        };
    }, []);

    return windowSize;
};

const GRID_BOX_SIZE = 32;
const BEAM_WIDTH_OFFSET = 1;

const theme = {
    plain: {
        color: "#1f2937",
        backgroundColor: "transparent",
    },
    styles: [
        {
            types: ["comment"],
            style: {
                color: "#6b7280",
                fontStyle: "italic",
            },
        },
        {
            types: ["string", "inserted"],
            style: {
                color: "#F98800",
            },
        },
        {
            types: ["number"],
            style: {
                color: "#dc2626",
            },
        },
        {
            types: ["builtin", "char", "constant", "function"],
            style: {
                color: "#020045",
            },
        },
        {
            types: ["punctuation", "selector"],
            style: {
                color: "#4b5563",
            },
        },
        {
            types: ["variable"],
            style: {
                color: "#374151",
            },
        },
        {
            types: ["class-name", "attr-name"],
            style: {
                color: "#F98800",
            },
        },
        {
            types: ["tag", "deleted"],
            style: {
                color: "#dc2626",
            },
        },
        {
            types: ["operator"],
            style: {
                color: "#020045",
            },
        },
        {
            types: ["boolean"],
            style: {
                color: "#dc2626",
            },
        },
        {
            types: ["keyword"],
            style: {
                color: "#020045",
                fontWeight: "bold",
            },
        },
        {
            types: ["doctype"],
            style: {
                color: "#7c3aed",
                fontStyle: "italic",
            },
        },
        {
            types: ["namespace"],
            style: {
                color: "#4b5563",
            },
        },
        {
            types: ["url"],
            style: {
                color: "#374151",
            },
        },
    ],
};

// Zenarmor-specific code examples
const opnsenseCode = `# Install Zenarmor on OPNsense
pkg install os-sensei

# Configure packet inspection
zenarmor config --enable-dpi
zenarmor config --set-mode transparent

# Start service
service zenarmor start
zenarmor status`;

const securityPolicyCode = `# Configure security policies
zenarmor policy create \\
  --name "Enterprise Security" \\
  --action block \\
  --categories malware,phishing

# Enable TLS inspection
zenarmor tls-inspection enable \\
  --all-ports`;

const threatDetectionCode = `# Real-time threat monitoring
zenarmor threats monitor --realtime

# Block detected threats
zenarmor threats block \\
  --severity critical,high

# Generate threat report
zenarmor report threats \\
  --last 24h --format json`;

const webFilteringCode = `# Configure web filtering
zenarmor filter create \\
  --categories adult,gambling,malware \\
  --action block

# Application control
zenarmor app-control enable \\
  --apps social-media,streaming \\
  --schedule business-hours`;
