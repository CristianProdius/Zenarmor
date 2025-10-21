import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from "next";
import { Rubik, Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";
import { ToastContainer } from 'react-toastify';

const rubik = Rubik({
    variable: "--font-rubik",
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "700"],
});

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
    title: 'Zenarmor - Next-Generation Cybersecurity Solutions',
    description: 'Leading provider of next-generation cybersecurity solutions designed to safeguard networks across the globe.',
    openGraph: {
        type: 'website',
        url: 'https://zenarmor.com/',
        title: 'Zenarmor - Next-Generation Cybersecurity Solutions',
        description: 'Advanced packet inspection technology ensuring maximum protection with minimal overhead.',
        images: [
            {
            url: 'https://zenarmor.com/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Zenarmor - Cybersecurity Solutions',
            },
        ],
    },
};

export default function RootLayout({ children, }: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="en">
            <body className={`${rubik.variable} ${roboto.variable} font-sans antialiased`} >
                <Navbar />
                {children}
                <Analytics />
                <Footer />
                <ToastContainer
                    position="top-right"
                    autoClose={3000} 
                    hideProgressBar 
                    newestOnTop 
                    closeOnClick 
                    rtl={false} 
                    pauseOnFocusLoss 
                    draggable 
                    pauseOnHover
                />
            </body>
        </html>
    );
}
