"use client";

import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CallToAction() {

    const [isHovered, setIsHovered] = useState(false);
    const animation = useRef<AnimationPlaybackControls>();
    const [scope, animate] = useAnimate();

    useEffect(() => { 
        animation.current = animate(
            scope.current,
            { x: "-50%"},
            { duration: 30, ease: "linear", repeat: Infinity }
        );

    }, []);

    useEffect(() => {
        if (animation.current) {
            if(isHovered) {
                animation.current.speed = 0.5;
            } else {
                animation.current.speed = 1;
            }
        }
    }, [isHovered]);

    return (
        <section className="py-24 bg-white">
            <div className="overflow-x-clip p-4 flex">
                <motion.div
                    ref={scope}
                    className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {Array.from({ length: 10}).map((_, i) => (
                        <div key={i} className="flex items-center gap-16 group">
                            <span className="text-[#F98800] text-7xl group-hover:text-[#020045] transition duration-500">&#10038;</span>
                            <span className="text-[#020045] group-hover:text-[#F98800] transition duration-500">Secure Your Network</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
