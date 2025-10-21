import Logo from "@/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
    { href: "/contact", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <section className="py-10 bg-white">
            <div className="container ">
                <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
                    <Link href={'/'}>
                        <Image src={Logo} alt="Zenarmor logo" className="h-8 w-auto object-contain" />
                    </Link>

                    <div>
                        <nav className="flex gap-6">
                            {footerLinks.map((link) => (
                                <a
                                    href={link.href}
                                    key={link.label}
                                    className="text-brand-neutral text-sm hover:scale-105 hover:text-brand-mustard transition-all hover:underline"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>

                <div className="mt-4 mb-2 md:mb-0 text-center text-xs md:text-sm font-semibold md:font-medium text-brand-neutral">
                    &copy; {new Date().getFullYear()} Zenarmor. All rights reserved.
                </div>
            </div>
        </section>
    )
}
