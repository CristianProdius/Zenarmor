"use client";

import { FiShield, FiServer, FiCloud, FiCheck } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const IntegrationsComponent = () => {
    const [selected, setSelected] = useState(0);

    return (
        <section className="p-4 mt-4">
            <div className="mx-auto max-w-5xl">
                <Tabs selected={selected} setSelected={setSelected} />

                <AnimatePresence mode="wait">
                    {FEATURES.map((tab, index) => {
                        return selected === index ? (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                key={index}
                            >
                                <tab.Feature />
                            </motion.div>
                        ) : undefined;
                    })}
                </AnimatePresence>
            </div>
        </section>
    );
};

const Tabs = ({ selected, setSelected }: { selected: number; setSelected: React.Dispatch<React.SetStateAction<number>> }) => {
    return (
        <div className="flex overflow-x-auto">
            {FEATURES.map((tab, index) => {
                return (
                    <Tab
                        key={index}
                        setSelected={setSelected}
                        selected={selected === index}
                        Icon={tab.Icon}
                        title={tab.title}
                        tabNum={index}
                    />
                );
            })}
        </div>
    );
};

const Tab = ({ selected, Icon, title, setSelected, tabNum }: { selected: boolean; Icon: React.ComponentType; title: string; setSelected: React.Dispatch<React.SetStateAction<number>>; tabNum: number }) => {
    return (
        <div className="relative w-full">
            <button
                onClick={() => setSelected(tabNum)}
                className={`relative z-0 flex w-full flex-row items-center justify-center gap-4 p-6 transition-all duration-300 md:flex-col border-2 rounded-t-lg ${
                    selected
                        ? "bg-white border-[#F98800] border-b-0"
                        : "bg-neutral-50 border-neutral-200 border-b-neutral-300 hover:bg-neutral-100"
                }`}
            >
                <span
                    className={`rounded-lg p-3 text-2xl transition-all duration-300 ${
                        selected
                        ? "bg-[#F98800] text-white shadow-lg scale-100"
                        : "bg-neutral-300 text-neutral-600 shadow scale-90 hover:scale-95"
                    }`}
                >
                    <Icon />
                </span>
                <span
                    className={`min-w-[150px] max-w-[200px] text-start text-xs md:text-sm transition-all duration-300 md:text-center font-medium ${
                        selected ? "text-[#020045]" : "text-neutral-500 hover:text-neutral-700"
                    }`}
                >
                    {title}
                </span>
            </button>
            {selected && (
                <motion.span
                    layoutId="tabs-features-underline"
                    className="absolute bottom-0 left-0 right-0 z-10 h-1 bg-[#F98800]"
                />
            )}
        </div>
    );
};

const FirewallIntegrations = ({ Icon }: { Icon: React.ComponentType }) => (
    <div className="w-full px-0 py-8 md:px-8">
        <div className="relative h-96 w-full rounded-xl bg-neutral-100 shadow-xl border border-neutral-200">
            <div className="flex w-full gap-1.5 rounded-t-xl bg-neutral-200 p-3">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div className="space-y-3 p-4">
                <p className="font-mono text-sm text-brand-navy">
                    <span className="text-brand-mustard">$</span> zenarmor --platform opnsense
                </p>
                <p className="font-mono text-xs text-brand-neutral flex items-center gap-2">
                    <FiCheck className="text-green-500 flex-shrink-0" /> OPNsense 24.x & 25.x - Fully integrated WebUI
                </p>
                <p className="font-mono text-xs text-brand-neutral flex items-center gap-2">
                    <FiCheck className="text-green-500 flex-shrink-0" /> pfSense 2.7.x & 2.8.x - Native integration
                </p>
                <p className="font-mono text-xs text-brand-neutral flex items-center gap-2">
                    <FiCheck className="text-green-500 flex-shrink-0" /> FreeBSD 13.3, 14.1, 15 - Complete support
                </p>
            </div>

            <span className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-9xl text-neutral-300">
                <Icon />
            </span>
        </div>
    </div>
);

const OSIntegrations = ({ Icon }: { Icon: React.ComponentType }) => (
    <div className="w-full px-0 py-8 md:px-8">
        <div className="relative h-96 w-full rounded-xl bg-neutral-100 shadow-xl border border-neutral-200">
            <div className="flex w-full gap-1.5 rounded-t-xl bg-neutral-200 p-3">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div className="space-y-3 p-4">
                <p className="font-mono text-sm text-brand-navy">
                    <span className="text-brand-mustard">$</span> zenarmor --os linux
                </p>
                <p className="font-mono text-xs text-brand-neutral flex items-center gap-2">
                    <FiCheck className="text-green-500 flex-shrink-0" /> Ubuntu 22.04, 23.04, 24.04 LTS
                </p>
                <p className="font-mono text-xs text-brand-neutral flex items-center gap-2">
                    <FiCheck className="text-green-500 flex-shrink-0" /> Debian 11 & 12 | Amazon Linux 2
                </p>
                <p className="font-mono text-xs text-brand-neutral flex items-center gap-2">
                    <FiCheck className="text-green-500 flex-shrink-0" /> Windows 10, 11, Server 2019, 2022
                </p>
                <p className="font-mono text-xs text-brand-neutral flex items-center gap-2">
                    <FiCheck className="text-green-500 flex-shrink-0" /> macOS 11+ | Rocky | AlmaLinux
                </p>
            </div>

            <span className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-9xl text-neutral-300">
                <Icon />
            </span>
        </div>
    </div>
);

const CloudManagement = ({ Icon }: { Icon: React.ComponentType }) => (
    <div className="w-full px-0 py-8 md:px-8">
        <div className="relative h-96 w-full rounded-xl bg-neutral-100 shadow-xl border border-neutral-200">
            <div className="flex w-full gap-1.5 rounded-t-xl bg-neutral-200 p-3">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div className="space-y-3 p-4">
                <p className="font-mono text-sm text-brand-navy">
                    <span className="text-brand-mustard">$</span> zenarmor --cloud-console
                </p>
                <p className="font-mono text-xs text-brand-neutral flex items-center gap-2">
                    <FiCheck className="text-green-500 flex-shrink-0" /> Zenconsole Cloud Portal - Unified management
                </p>
                <p className="font-mono text-xs text-brand-neutral flex items-center gap-2">
                    <FiCheck className="text-green-500 flex-shrink-0" /> Multi-tenant support - MSP ready
                </p>
                <p className="font-mono text-xs text-brand-neutral flex items-center gap-2">
                    <FiCheck className="text-green-500 flex-shrink-0" /> Centralized policy control - All platforms
                </p>
                <p className="font-mono text-xs text-brand-neutral flex items-center gap-2">
                    <FiCheck className="text-green-500 flex-shrink-0" /> Real-time analytics - Single dashboard
                </p>
            </div>

            <span className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-9xl text-neutral-300">
                <Icon />
            </span>
        </div>
    </div>
);

export default IntegrationsComponent;

const FEATURES = [
    {
        title: "Firewall Platforms - OPNsense, pfSense & FreeBSD",
        Icon: FiShield,
        Feature: () => <FirewallIntegrations Icon={FiShield} />,
    },
    {
        title: "Operating Systems - Linux, Windows, macOS & More",
        Icon: FiServer,
        Feature: () => <OSIntegrations Icon={FiServer} />,
    },
    {
        title: "Cloud Management - Centralized Control & Analytics",
        Icon: FiCloud,
        Feature: () => <CloudManagement Icon={FiCloud} />,
    },
];