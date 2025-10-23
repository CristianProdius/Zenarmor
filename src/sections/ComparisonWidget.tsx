"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Tag from "@/components/Tag";

interface ComparisonRow {
  category: string;
  traditional: string;
  zenarmor: string;
  details?: string;
}

const comparisonData: ComparisonRow[] = [
  {
    category: "Deployment Time",
    traditional: "3-6 months",
    zenarmor: "Minutes",
    details: "Traditional SASE requires complex tunnel configuration, PoP provisioning, and multi-vendor integration. Zenarmor's Plug & Secure architecture deploys instantly on endpoint, edge, or cloud.",
  },
  {
    category: "Architecture",
    traditional: "Multi-vendor stitched acquisitions",
    zenarmor: "Single-app, single-stack",
    details: "Traditional vendors (Palo Alto, Zscaler, Fortinet) stitch together acquired products. Zenarmor was purpose-built as a unified SASE engine from conception.",
  },
  {
    category: "Inspection Model",
    traditional: "Cloud PoP-dependent",
    zenarmor: "Endpoint-based (Zero PoP)",
    details: "Traditional SASE backhuls traffic to cloud PoPs, adding latency and cost. Zenarmor inspects at source—on endpoint, edge, or cloud—with no PoP dependency.",
  },
  {
    category: "VPN Bypass Risk",
    traditional: "Exponential exposure when users disconnect",
    zenarmor: "Always-on protection, even off-tunnel",
    details: "When traditional SASE creates latency, users disable VPN, creating blind spots. Zenarmor enforces Zero Trust directly at endpoint—security stays on even when users roam.",
  },
  {
    category: "Annual Cost (500 users)",
    traditional: "$450K+",
    zenarmor: "$127K",
    details: "Traditional SASE charges for PoP traffic routing and multi-vendor licensing. Zenarmor eliminates PoP costs and vendor sprawl with unified licensing.",
  },
  {
    category: "IT Overhead",
    traditional: "5-10 FTEs",
    zenarmor: "1-2 FTEs",
    details: "Traditional SASE requires teams to manage tunnels, PoPs, multi-vendor integrations, and complex policies. Zenarmor's single-console management enables lean IT teams.",
  },
  {
    category: "Cloud Outage Impact",
    traditional: "Security bypass required",
    zenarmor: "Zero downtime",
    details: "Recent AWS outages forced traditional SASE users to bypass security. Zenarmor's endpoint-based architecture continues enforcing policies during cloud outages.",
  },
  {
    category: "Performance Impact",
    traditional: "Latency from PoP backhaul",
    zenarmor: "Sub-second under full inspection",
    details: "Traditional SASE routes traffic to distant PoPs before inspection. Zenarmor's endpoint inspection eliminates middle-mile latency and backhaul delays.",
  },
];

export default function ComparisonWidget() {
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const toggleRow = (category: string) => {
    setExpandedRow(expandedRow === category ? null : category);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Tag>Traditional SASE vs Zenarmor</Tag>
          <h2 className="text-4xl md:text-6xl font-medium mt-6 text-brand-navy">
            Why Mid-Market Teams Choose Zenarmor
          </h2>
          <p className="text-lg md:text-xl text-brand-neutral mt-6 max-w-3xl mx-auto">
            Traditional SASE vendors force trade-offs between security and performance. Zenarmor&apos;s
            single-app, single-stack architecture eliminates those compromises.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-6xl mx-auto">
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 mb-2 px-6">
            <div className="text-sm font-medium text-brand-neutral"></div>
            <div className="text-center">
              <span className="text-sm font-medium text-brand-neutral">
                Traditional SASE
              </span>
              <p className="text-xs text-brand-neutral/60 mt-1">
                Palo Alto, Zscaler, Fortinet
              </p>
            </div>
            <div className="text-center">
              <span className="text-sm font-medium text-brand-navy">Zenarmor</span>
              <p className="text-xs text-brand-mustard mt-1">
                Single-App, Single-Stack
              </p>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="space-y-2">
            {comparisonData.map((row, idx) => (
              <div key={idx}>
                <motion.div
                  className="grid grid-cols-3 gap-4 bg-white border border-neutral-200 rounded-xl p-6 cursor-pointer hover:border-brand-mustard transition-colors"
                  onClick={() => toggleRow(row.category)}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Category */}
                  <div className="flex items-center">
                    <span className="text-base font-semibold text-brand-navy">
                      {row.category}
                    </span>
                    {row.details && (
                      <svg
                        className={`w-5 h-5 ml-auto text-brand-neutral transition-transform ${
                          expandedRow === row.category ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </div>

                  {/* Traditional */}
                  <div className="flex items-center justify-center text-center">
                    <span className="text-sm text-brand-neutral">{row.traditional}</span>
                  </div>

                  {/* Zenarmor */}
                  <div className="flex items-center justify-center text-center">
                    <span className="text-sm font-medium text-brand-navy bg-brand-mustard/10 px-4 py-2 rounded-full">
                      {row.zenarmor}
                    </span>
                  </div>
                </motion.div>

                {/* Expanded Details */}
                {expandedRow === row.category && row.details && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-gradient-to-r from-brand-navy/5 to-brand-mustard/5 border-l-4 border-brand-mustard px-6 py-4 rounded-b-xl -mt-2"
                  >
                    <p className="text-sm text-brand-neutral leading-relaxed">
                      {row.details}
                    </p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-brand-navy to-brand-navy/90 rounded-2xl p-12">
            <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              See Your Savings
            </h3>
            <p className="text-lg text-white/90 mb-8">
              Calculate how much your organization can save by switching from traditional SASE to
              Zenarmor&apos;s endpoint-first architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-brand-mustard text-white px-8 py-4 rounded-full font-medium hover:bg-brand-mustard/90 transition-colors">
                Calculate Your ROI
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
