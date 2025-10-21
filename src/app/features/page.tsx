import { FeaturesComponent } from '@/components/FeaturesPage';
import React from 'react'

export const metadata = {
    title: "Features - Zenarmor Cybersecurity Platform",
    description: "Explore Zenarmor's advanced features: AI-powered threat detection, deep packet inspection, real-time analytics, application control, and comprehensive network visibility across all major platforms.",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://zenarmor.com/features",
        title: 'Features - Zenarmor Cybersecurity Platform',
        description: 'AI-powered threat detection, deep packet inspection, and real-time analytics. Comprehensive network security features for enterprise and home deployments.',
        images: [
            {
            url: 'https://zenarmor.com/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Zenarmor Features - Next-Generation Cybersecurity',
            },
        ],
    },
};

const Features = () => {
    return (
        <main className='pt-8'>
            <section>
                <FeaturesComponent />
            </section>
        </main>
    )
}

export default Features
