import Features from "@/sections/Features";
import Hero from "@/sections/Hero";
import Introduction from "@/sections/Introduction";
import LogoTicker from "@/sections/LogoTicker";
import Navbar from "@/sections/Navbar";

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <LogoTicker />
            <Introduction />
            <Features />
        </main>
    )
    
}
