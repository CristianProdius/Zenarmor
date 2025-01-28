import React from 'react'

export const metadata = {
    title: "Layers Features Page ",
    description: "Features Page for Layers, offers a visual stunning display and informative describtion",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://jptribe-landing-sass.vercel.app/features", 
        title: 'Layers - by NighteCoding',
        description: 'NighteCoding provides stable and highend solutions',
        images: [
            {
            url: 'https://jptribe-landing-sass.vercel.app/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Landing Sass by NighteCoding',
            },
        ],
    },
};

const Features = () => {
    return (
        <main className='py-24'>
            <section className='text-center'>
                <h1 className='text-5xl'>Features Page</h1>
                <p className='text-xl max-w-lg mx-auto mt-2'>
                    At <span className='text-lime-400'>Layers</span> we provide the best <span className='text-lime-400'>features</span> for your needs
                </p>
            </section>

            <section>
            
            </section>
        </main>
    )
}

export default Features
