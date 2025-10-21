import CallToAction from "@/sections/CallToAction";
import Faqs from "@/sections/Faqs";
import Features from "@/sections/Features";
import Hero from "@/sections/Hero";
import Integrations from "@/sections/Integrations";
import Introduction from "@/sections/Introduction";
import LogoTicker from "@/sections/LogoTicker";
import Support from "@/sections/Support";

export const metadata = {
    title: "Zenarmor",
    description: "Zenarmor beautiful landing page with modern technologies",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://jptribe-landing-sass.vercel.app/",
        title: 'Zenarmor - by Prodius Enterprise',
        description: 'Prodius Enterprise provides stable and highend solutions',

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
