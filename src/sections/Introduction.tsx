"use client";

import Tag from "@/components/Tag";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `Most SASE vendors require months of deployment and stitch together acquisitions into fragile architectures.`;
const words = text.split(" ");

export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: scrollTarget, offset: ['start end', 'end end'] });

    const [currentWord, setCurrentWord] = useState(0);
    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);
    
    useEffect(() => {
        wordIndex.on("change", (latest) => {
            setCurrentWord(latest);
        })
    }, [wordIndex]);

    return (
        <section className="py-16 lg:py-28 bg-white">
            <div className="container">
                <div className="sticky top-20 md:top-28 lg:top-40">
                    <div className="justify-center flex">
                        <Tag className="mb-4">Introducing Zenarmor</Tag>
                    </div>
                    <div className="text-center text-4xl md:text-6xl lg:text-7xl font-medium mt-8">
                        <span className="text-brand-navy">SASE shouldn&apos;t take months.</span>{" "}
                        <span className="">
                            {words.map((word, wordIndex) => (
                                <span key={wordIndex} className={twMerge("transition duration-500 text-neutral-300", wordIndex < currentWord && "text-brand-navy")}>
                                    {`${word} `}
                                </span>
                            ))}
                        </span>
                        <span className="text-brand-mustard block">Plug SASE Everywhere.</span>
                    </div>
                </div>

                <div className="h-[150vh]" ref={scrollTarget}></div>
            </div>
        </section>
    )
}
