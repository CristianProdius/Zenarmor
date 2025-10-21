import CallToAction from "@/sections/CallToAction";
import Faqs from "@/sections/Faqs";
import Features from "@/sections/Features";
import Hero from "@/sections/Hero";
import Integrations from "@/sections/Integrations";
import Introduction from "@/sections/Introduction";
import LogoTicker from "@/sections/LogoTicker";
import Support from "@/sections/Support";

export const metadata = {
    title: "Zenarmor - Next-Generation Cybersecurity Solutions",
    description: "Advanced packet inspection technology ensuring maximum protection with minimal overhead. Trusted by 13.5K+ deployments worldwide across OPNsense, pfSense, FreeBSD, and more.",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://zenarmor.com/",
        title: 'Zenarmor - Next-Generation Cybersecurity Solutions',
        description: 'Advanced packet inspection technology ensuring maximum protection with minimal overhead. Safeguarding networks across the globe with seamless deployment and intuitive management.',
        images: [
            {
                url: 'https://zenarmor.com/og-image.jpg',
                alt: 'Zenarmor - Next-Generation Cybersecurity Solutions',
            }
        ],
    },
};

export default function Home() {
    return (
        <main>
            <Hero />
            <LogoTicker />
            <Introduction />
            <Features />
            <Integrations />
            <Faqs />
            <CallToAction />
            <Support />
        </main>
    )

}
