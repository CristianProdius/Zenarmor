"use client";

import dsbLogo from "@/assets/images/dsb.svg";
import policeLogo from "@/assets/images/police.svg";
import raystedeLogo from "@/assets/images/raystede.svg";
import rewensLogo from "@/assets/images/rewest.png";
import protectlLogo from "@/assets/images/protectil.png";
import Image from "next/image";
import { Fragment } from "react";
import { motion } from "framer-motion";

const logos = [
    { name: "DSB", image: dsbLogo },
    { name: "Police", image: policeLogo },
    { name: "Raystede", image: raystedeLogo },
    { name: "Rewens", image: rewensLogo },
    { name: "Protectl", image: protectlLogo },
];

export default function LogoTicker() {
    return (
        <section className="py-24 overflow-x-clip bg-white">
            <div className="container">
                <h2 className="text-center text-xl text-brand-neutral">Trusted by leading organizations worldwide</h2>

                <div className="flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <motion.div 
                        animate={{ x: "-50%" }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="flex flex-none gap-24 pr-24"
                    >
                        {Array.from({ length: 2 }).map((_, i) => (
                            <Fragment key={i}>
                                {logos.map((logo, index) => (
                                    <Image
                                        key={index}
                                        src={logo.image}
                                        alt={logo.name}
                                        className="h-8 w-auto object-contain"
                                    />
                                ))}
                            </Fragment>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
