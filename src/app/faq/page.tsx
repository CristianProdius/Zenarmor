import FaqComponent from '@/components/Faq'
import React from 'react'

export const metadata = {
  title: "Frequently Asked Questions - Zenarmor",
  description: "Get answers to common questions about Zenarmor's cybersecurity platform, deployment options, threat protection, platform compatibility, and network security features.",
  openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://zenarmor.com/faq",
      title: 'FAQ - Zenarmor Cybersecurity',
      description: 'Common questions about Zenarmor deployment, threat protection, platform compatibility, and advanced network security features answered.',
      images: [
          {
          url: 'https://zenarmor.com/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Zenarmor FAQ',
          },
      ],
  },
};

const Faq = () => {
  return (
    <main className='py-24'>
      <section className='text-center'>
        <h1 className='text-5xl font-medium text-brand-navy'>Frequently Asked <span className='text-brand-mustard'>Questions</span></h1>
        <p className='text-xl max-w-2xl mx-auto mt-4 text-brand-neutral'>
          Everything you need to know about <span className='text-brand-mustard font-medium'>Zenarmor</span> deployment, features, and cybersecurity <span className='text-brand-mustard font-medium'>protection</span>
        </p>
        </section>

        <section>
          <FaqComponent />
        </section>
    </main>
  )
}

export default Faq
