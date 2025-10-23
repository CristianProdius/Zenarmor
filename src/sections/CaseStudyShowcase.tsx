"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tag from "@/components/Tag";

interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  companySize: string;
  itTeamSize: string;
  initials: string;
  metrics: {
    label: string;
    value: string;
  }[];
  challenge: string;
  solution: string;
  results: string[];
  quote: string;
  author: string;
  authorTitle: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "insurance",
    company: "Regional Insurance Carrier",
    industry: "Insurance",
    companySize: "380 employees",
    itTeamSize: "3-person IT team",
    initials: "RIC",
    metrics: [
      { label: "Deployment Time", value: "Minutes" },
      { label: "Remote Agents Secured", value: "200+" },
      { label: "VPN Bypass Risk", value: "Eliminated" },
    ],
    challenge:
      "Remote insurance agents frequently disabled VPN due to performance issues, creating security blind spots. Legacy VPNs and firewalls couldn't secure distributed teams accessing claims and underwriting apps. Limited IT headcount struggled with ransomware threats and regulatory compliance burden.",
    solution:
      "Deployed Zenarmor's single-app, single-stack SASE with endpoint-based inspection. Security enforcement continues even when users roam off-network. Zero-touch provisioning enabled rapid rollout without on-site configuration or PoP dependency.",
    results: [
      "200+ remote agents secured without VPN dependency",
      "Zero security bypass incidents (VPN-off protection active)",
      "Third-party adjusters and contractors granted granular, time-limited access via ZTNA",
      "GLBA compliance maintained across all remote sites without appliances",
    ],
    quote:
      "Field agents often work off-tunnel for performance reasons. With Zenarmor, we finally have always-inspected connections that don't slow them down. Security stays on even when VPN is off.",
    author: "IT Director",
    authorTitle: "Regional Insurance Carrier",
  },
  {
    id: "fintech",
    company: "Mid-Market FinTech Platform",
    industry: "Financial Services",
    companySize: "220 employees",
    itTeamSize: "2-person IT team",
    initials: "MFP",
    metrics: [
      { label: "Deployment Time", value: "Minutes" },
      { label: "SOC 2 Compliance", value: "Achieved" },
      { label: "Multi-Cloud Protected", value: "3 Clouds" },
    ],
    challenge:
      "DevOps teams outpaced security controls across multi-cloud environments. PCI-DSS and SOC 2 compliance demands required constant monitoring, but SaaS visibility gaps left blind spots. Cloud-dependent SASE created latency that developers bypassed, exponentially increasing attack surface.",
    solution:
      "Implemented Zenarmor's instant-on CASB and ZTNA with fine-grained access control. API-first SASE architecture integrated into CI/CD pipelines. Endpoint-based inspection eliminated PoP backhaul, removing performance tradeoffs that led to bypass.",
    results: [
      "Instant-on SASE stack deployed to protect users, apps, and APIs in minutes",
      "ZTNA segmented access to back-end services with zero lateral movement risk",
      "Passed SOC 2 audit with audit-ready logging and DLP policies",
      "Dev teams stay protected even off-tunnel—no bypass-driven exposure windows",
    ],
    quote:
      "Our developers work across AWS, Azure, and GCP. Legacy SASE created latency that killed productivity, so they'd disconnect. Zenarmor's endpoint-first model means security doesn't slow them down—and they can't bypass it.",
    author: "VP of Engineering",
    authorTitle: "Mid-Market FinTech Platform",
  },
  {
    id: "healthcare",
    company: "Multi-Site Healthcare Provider",
    industry: "Healthcare",
    companySize: "520 employees",
    itTeamSize: "2-person IT team",
    initials: "MHP",
    metrics: [
      { label: "Deployment Time", value: "Minutes" },
      { label: "HIPAA Compliance", value: "Maintained" },
      { label: "Telehealth Protected", value: "100%" },
    ],
    challenge:
      "HIPAA/PHI data risk across distributed clinical staff and telehealth users. Budget constraints and outdated EHRs made compliance difficult. Staff untrained in cybersecurity frequently fell victim to phishing and ransomware. Traditional SASE forced slow tunnels that clinicians disabled, creating VPN-off blind spots.",
    solution:
      "Deployed Zenarmor's endpoint-based SASE with HIPAA-ready data controls. Plug-and-secure ZTNA secured EHRs and clinical apps without forcing tunnels. Built-in SWG, CASB, and DLP protected PHI at the endpoint, eliminating PoP dependency and VPN bypass risk.",
    results: [
      "Secure telehealth and EHR access for 520 employees across 12 clinic sites",
      "HIPAA-compliant policies auto-enforced at endpoint—no appliances required",
      "Clinicians work off-tunnel without creating security blind spots",
      "Reduced annual security spend while extending protection to endpoints",
    ],
    quote:
      "Clinicians often work off-tunnel because legacy VPN kills performance. Zenarmor ensures always-inspected connections directly on their devices. We finally have HIPAA compliance that doesn't fight against clinical workflows.",
    author: "IT Manager",
    authorTitle: "Multi-Site Healthcare Provider",
  },
];

export default function CaseStudyShowcase() {
  const [selectedCase, setSelectedCase] = useState<string | null>(null);

  const selectedStudy = caseStudies.find((cs) => cs.id === selectedCase);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Tag>Customer Success Stories</Tag>
          <h2 className="text-4xl md:text-6xl font-medium mt-6 text-brand-navy">
            Built for Real Mid-Market Teams
          </h2>
          <p className="text-lg md:text-xl text-brand-neutral mt-6 max-w-2xl mx-auto">
            See how 1-5 person IT teams deploy enterprise-grade SASE in hours, not months.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              className="bg-white rounded-2xl p-8 border border-neutral-200 hover:border-brand-mustard transition-all cursor-pointer hover:shadow-xl"
              onClick={() => setSelectedCase(study.id)}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Company Info */}
              <h3 className="text-2xl font-semibold text-brand-navy mb-2">
                {study.company}
              </h3>
              <div className="flex gap-2 mb-6">
                <span className="text-sm bg-brand-mustard/10 text-brand-mustard px-3 py-1 rounded-full">
                  {study.industry}
                </span>
                <span className="text-sm bg-brand-navy/10 text-brand-navy px-3 py-1 rounded-full">
                  {study.itTeamSize}
                </span>
              </div>

              {/* Metrics */}
              <div className="space-y-4 mb-6">
                {study.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center justify-between border-l-2 border-brand-mustard pl-3">
                    <span className="text-sm text-brand-neutral">
                      {metric.label}
                    </span>
                    <span className="text-xl font-bold text-brand-navy">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center text-brand-mustard font-medium">
                Read Full Story
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expanded Case Study Modal */}
        <AnimatePresence>
          {selectedStudy && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-40"
                onClick={() => setSelectedCase(null)}
              />

              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl z-50 p-8 md:p-12"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-6 right-6 text-brand-neutral hover:text-brand-navy transition-colors"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Company Header */}
                <div className="mb-8">
                  <h3 className="text-4xl font-semibold text-brand-navy mb-3">
                    {selectedStudy.company}
                  </h3>
                  <div className="flex gap-3 mb-4">
                    <span className="text-sm bg-brand-mustard/10 text-brand-mustard px-4 py-2 rounded-full">
                      {selectedStudy.industry}
                    </span>
                    <span className="text-sm bg-brand-navy/10 text-brand-navy px-4 py-2 rounded-full">
                      {selectedStudy.companySize}
                    </span>
                    <span className="text-sm bg-brand-navy/10 text-brand-navy px-4 py-2 rounded-full">
                      {selectedStudy.itTeamSize}
                    </span>
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-6 mt-8 p-8 bg-gradient-to-r from-brand-navy/5 to-brand-mustard/5 rounded-xl">
                    {selectedStudy.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center border-l-4 border-brand-mustard pl-4">
                        <div className="text-4xl font-bold text-brand-navy mb-2">
                          {metric.value}
                        </div>
                        <div className="text-sm text-brand-neutral font-medium">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-8">
                  <h4 className="text-2xl font-semibold text-brand-navy mb-4">
                    The Challenge
                  </h4>
                  <p className="text-lg text-brand-neutral leading-relaxed">
                    {selectedStudy.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-8">
                  <h4 className="text-2xl font-semibold text-brand-navy mb-4">
                    The Solution
                  </h4>
                  <p className="text-lg text-brand-neutral leading-relaxed">
                    {selectedStudy.solution}
                  </p>
                </div>

                {/* Results */}
                <div className="mb-8">
                  <h4 className="text-2xl font-semibold text-brand-navy mb-4">
                    The Results
                  </h4>
                  <ul className="space-y-3">
                    {selectedStudy.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-3 border-l-2 border-brand-mustard pl-4 py-2">
                        <span className="text-lg text-brand-neutral">
                          {result}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quote */}
                <div className="bg-gradient-to-r from-brand-navy to-brand-navy/90 text-white rounded-xl p-8">
                  <svg
                    className="w-12 h-12 text-brand-mustard mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-xl md:text-2xl mb-6 leading-relaxed italic">
                    {selectedStudy.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{selectedStudy.author}</p>
                    <p className="text-brand-mustard">{selectedStudy.authorTitle}</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 flex gap-4">
                  <button className="flex-1 bg-brand-mustard text-white px-8 py-4 rounded-full font-medium hover:bg-brand-mustard/90 transition-colors">
                    Start Free Trial
                  </button>
                  <button className="flex-1 border-2 border-brand-navy text-brand-navy px-8 py-4 rounded-full font-medium hover:bg-brand-navy/5 transition-colors">
                    Schedule Demo
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
