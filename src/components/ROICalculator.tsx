"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface ROIMetrics {
    annualSavingsOnTools: number;
    itLaborSavings: number;
    productivityGains: number;
    totalAnnualBenefit: number;
    totalZenarmorCost: number;
    roi: number;
}

// Slider component for consistent styling
const Slider = ({
    label,
    value,
    onChange,
    min,
    max,
    step,
    prefix = "",
    suffix = ""
}: {
    label: string;
    value: number;
    onChange: (value: number) => void;
    min: number;
    max: number;
    step: number;
    prefix?: string;
    suffix?: string;
}) => (
    <div className="space-y-2">
        <div className="flex justify-between items-baseline">
            <label className="text-xs font-medium text-brand-navy/70">
                {label}
            </label>
            <span className="text-lg font-bold text-brand-mustard tabular-nums">
                {prefix}{value.toLocaleString()}{suffix}
            </span>
        </div>
        <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-full h-1.5 bg-brand-navy/10 rounded-full appearance-none cursor-pointer
                     [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4
                     [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-mustard
                     [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md
                     [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:hover:scale-125
                     [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4
                     [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-brand-mustard
                     [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0
                     [&::-moz-range-thumb]:shadow-md"
        />
    </div>
);

export default function ROICalculator() {
    // Input state - all 7 adjustable values
    const [employees, setEmployees] = useState(500);
    const [legacyCost, setLegacyCost] = useState(250);
    const [zenarmorCost, setZenarmorCost] = useState(120);
    const [itTimeSaved, setItTimeSaved] = useState(10);
    const [itHourlyCost, setItHourlyCost] = useState(60);
    const [productivityGain, setProductivityGain] = useState(5);
    const [productivityValue, setProductivityValue] = useState(50);

    const calculateROI = (): ROIMetrics => {
        // Formula: employees × (legacy cost - zenarmor cost)
        const annualSavingsOnTools = employees * (legacyCost - zenarmorCost);

        // Formula: employees × IT staff time saved × IT staff hourly cost
        const itLaborSavings = employees * itTimeSaved * itHourlyCost;

        // Formula: employees × productivity gain × value per productivity hour
        const productivityGains = employees * productivityGain * productivityValue;

        // Formula: annual savings on tools + IT labor savings + productivity gains
        const totalAnnualBenefit = annualSavingsOnTools + itLaborSavings + productivityGains;

        // Formula: employees × zenarmor annual cost
        const totalZenarmorCost = employees * zenarmorCost;

        // Formula: (total annual benefit - total zenarmor cost) / total zenarmor cost × 100
        const roi = totalZenarmorCost > 0
            ? ((totalAnnualBenefit - totalZenarmorCost) / totalZenarmorCost) * 100
            : 0;

        return {
            annualSavingsOnTools,
            itLaborSavings,
            productivityGains,
            totalAnnualBenefit,
            totalZenarmorCost,
            roi,
        };
    };

    const metrics = calculateROI();

    const formatCurrency = (value: number): string => {
        if (value >= 1000000) {
            return `$${(value / 1000000).toFixed(1)}M`;
        } else if (value >= 1000) {
            return `$${(value / 1000).toFixed(0)}K`;
        }
        return `$${Math.round(value).toLocaleString()}`;
    };

    return (
        <motion.div
            className="bg-white border border-brand-navy/10 rounded-2xl p-8 md:p-10 max-w-6xl mx-auto mt-12 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
        >
            {/* Header */}
            <div className="text-center mb-10">
                <h3 className="text-3xl md:text-4xl font-medium text-brand-navy mb-3">
                    ROI Calculator
                </h3>
                <p className="text-brand-neutral text-sm">
                    Adjust the values to see your custom savings
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Left Column - Input Metrics */}
                <div className="space-y-6">
                    <div className="pb-4 border-b border-brand-navy/10">
                        <h4 className="text-sm font-bold text-brand-navy mb-4 uppercase tracking-wide">
                            Input Metrics
                        </h4>
                    </div>

                    <Slider
                        label="Number of Employees"
                        value={employees}
                        onChange={setEmployees}
                        min={50}
                        max={2000}
                        step={50}
                    />

                    <Slider
                        label="Annual Cost of Legacy Tools (per employee)"
                        value={legacyCost}
                        onChange={setLegacyCost}
                        min={100}
                        max={500}
                        step={10}
                        prefix="$"
                    />

                    <Slider
                        label="Zenarmor Annual Cost (per employee)"
                        value={zenarmorCost}
                        onChange={setZenarmorCost}
                        min={50}
                        max={300}
                        step={10}
                        prefix="$"
                    />

                    <Slider
                        label="IT Staff Time Saved (hrs/employee/yr)"
                        value={itTimeSaved}
                        onChange={setItTimeSaved}
                        min={1}
                        max={50}
                        step={1}
                        suffix=" hrs"
                    />

                    <Slider
                        label="IT Staff Hourly Cost"
                        value={itHourlyCost}
                        onChange={setItHourlyCost}
                        min={30}
                        max={150}
                        step={5}
                        prefix="$"
                    />

                    <Slider
                        label="Productivity Gain (hrs/employee/yr)"
                        value={productivityGain}
                        onChange={setProductivityGain}
                        min={1}
                        max={20}
                        step={1}
                        suffix=" hrs"
                    />

                    <Slider
                        label="Value per Productivity Hour"
                        value={productivityValue}
                        onChange={setProductivityValue}
                        min={20}
                        max={200}
                        step={10}
                        prefix="$"
                    />
                </div>

                {/* Right Column - Output Metrics */}
                <div className="space-y-6">
                    <div className="pb-4 border-b border-brand-navy/10">
                        <h4 className="text-sm font-bold text-brand-navy mb-4 uppercase tracking-wide">
                            ROI Summary
                        </h4>
                    </div>

                    {/* Hero ROI Metric */}
                    <motion.div
                        className="bg-gradient-to-br from-brand-mustard to-brand-mustard/90 rounded-xl p-6 text-center"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="text-6xl md:text-7xl font-bold text-white mb-2 tabular-nums">
                            {metrics.roi.toFixed(1)}%
                        </div>
                        <div className="text-sm font-medium text-white/90 uppercase tracking-wide">
                            Return on Investment
                        </div>
                    </motion.div>

                    {/* Output Values */}
                    <div className="space-y-3">
                        <div className="flex justify-between items-baseline py-3 border-b border-brand-navy/5">
                            <span className="text-xs font-medium text-brand-navy/70">
                                Annual Savings on Tools
                            </span>
                            <span className="text-xl font-bold text-brand-navy tabular-nums">
                                {formatCurrency(metrics.annualSavingsOnTools)}
                            </span>
                        </div>

                        <div className="flex justify-between items-baseline py-3 border-b border-brand-navy/5">
                            <span className="text-xs font-medium text-brand-navy/70">
                                IT Labor Savings
                            </span>
                            <span className="text-xl font-bold text-brand-navy tabular-nums">
                                {formatCurrency(metrics.itLaborSavings)}
                            </span>
                        </div>

                        <div className="flex justify-between items-baseline py-3 border-b border-brand-navy/5">
                            <span className="text-xs font-medium text-brand-navy/70">
                                Productivity Gains
                            </span>
                            <span className="text-xl font-bold text-brand-navy tabular-nums">
                                {formatCurrency(metrics.productivityGains)}
                            </span>
                        </div>

                        <div className="flex justify-between items-baseline py-4 border-t-2 border-brand-mustard/20 mt-2">
                            <span className="text-sm font-bold text-brand-navy">
                                Total Annual Benefit
                            </span>
                            <span className="text-2xl font-bold text-brand-mustard tabular-nums">
                                {formatCurrency(metrics.totalAnnualBenefit)}
                            </span>
                        </div>

                        <div className="flex justify-between items-baseline py-3 bg-brand-navy/5 rounded-lg px-4">
                            <span className="text-xs font-medium text-brand-navy/70">
                                Total Zenarmor Cost
                            </span>
                            <span className="text-lg font-bold text-brand-navy tabular-nums">
                                {formatCurrency(metrics.totalZenarmorCost)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
