import IntegrationsComponent from '@/components/IntegrationsPage';
import React from 'react'

export const metadata = {
    title: "Platform Integrations - Zenarmor",
    description: "Deploy Zenarmor anywhere: OPNsense, pfSense, FreeBSD, macOS, Windows, and Ubuntu. Seamless integration with your existing network infrastructure for comprehensive cybersecurity protection.",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://zenarmor.com/integrations",
        title: 'Platform Integrations - Zenarmor',
        description: 'Deploy Zenarmor on OPNsense, pfSense, FreeBSD, macOS, Windows, and Ubuntu. Flexible deployment options for any network infrastructure.',
        images: [
            {
            url: 'https://zenarmor.com/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Zenarmor Platform Integrations',
            },
        ],
    },
};

const Integrations = () => {
    return (
        <main className='pt-24 pb-14'>
            <section className='text-center'>
                <h1 className='text-5xl font-medium text-brand-navy'>Platform <span className='text-brand-mustard'>Integrations</span></h1>
                <p className='text-xl max-w-2xl mx-auto mt-4 text-brand-neutral'>
                    Deploy <span className='text-brand-mustard font-medium'>Zenarmor</span> seamlessly across multiple platforms. From enterprise firewalls to personal devices, protect your network <span className='text-brand-mustard font-medium'>anywhere</span>.
                </p>
            </section>

            <section>
                <IntegrationsComponent />
            </section>
        </main>
    )
}

export default Integrations
