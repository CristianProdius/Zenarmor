import CallToAction from "@/sections/CallToAction";
import CaseStudyShowcase from "@/sections/CaseStudyShowcase";
import ComparisonWidget from "@/sections/ComparisonWidget";
import DemoSandbox from "@/sections/DemoSandbox";
import Faqs from "@/sections/Faqs";
import Features from "@/sections/Features";
import Hero from "@/sections/Hero";
import Integrations from "@/sections/Integrations";
import Introduction from "@/sections/Introduction";
import LogoTicker from "@/sections/LogoTicker";
import Support from "@/sections/Support";

export const metadata = {
    title: "Zenarmor - Purpose-Built Single-Stack SASE for Mid-Market",
    description: "Deploy SASE in minutes, not months. Built for 1-5 person IT teams managing distributed workforces. Endpoint-based architecture that works even when cloud POPs fail. Trusted by 13.5K+ mid-market deployments.",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://zenarmor.com/",
        title: 'Zenarmor - Purpose-Built Single-Stack SASE for Mid-Market',
        description: 'Deploy SASE in minutes, not months. Built for 1-5 person IT teams managing distributed workforces. Endpoint-based architecture that works even when cloud POPs fail.',
        images: [
            {
                url: 'https://zenarmor.com/og-image.jpg',
                alt: 'Zenarmor - Purpose-Built Single-Stack SASE for Mid-Market',
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
            <ComparisonWidget />
            <DemoSandbox />
            <Features />
            <CaseStudyShowcase />
            <Integrations />
            <Faqs />
            <CallToAction />
            <Support />
        </main>
    )

}
