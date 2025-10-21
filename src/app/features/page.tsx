import { FeaturesComponent } from '@/components/FeaturesPage';
import React from 'react'

export const metadata = {
    title: "Zenarmor Features Page ",
    description: "Features Page for Zenarmor, offers a visual stunning display and informative describtion",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://jptribe-landing-sass.vercel.app/features", 
        title: 'Zenarmor - by Prodius Enterprise',
        description: 'Prodius Enterprise provides stable and highend solutions',
        images: [
            {
            url: 'https://jptribe-landing-sass.vercel.app/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Landing Sass by Prodius Enterprise',
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
