import Logo from "@/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <section className="py-10">
            <div className="container ">
                <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
                    <Link href={'/'}>
                        <Image src={Logo} alt="Layers logo" />
                    </Link>

                    <div>
                        <nav className="flex gap-6">
                            {footerLinks.map((link) => (
                                <a 
                                    href={link.href} 
                                    key={link.label}
                                    className="text-white/50 text-sm hover:scale-105 hover:text-lime-500 transition-all hover:underline"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}
