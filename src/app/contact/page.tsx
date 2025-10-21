import React from 'react'

export const metadata = {
    title: "Contact Zenarmor | Next-Generation Cybersecurity Solutions",
    description: "Get in touch with Zenarmor for enterprise-grade network security solutions. Our team is ready to help secure your infrastructure.",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://zenarmor.com/contact",
        title: 'Contact Zenarmor - Enterprise Network Security',
        description: 'Advanced packet inspection technology ensuring maximum protection with minimal overhead. Contact our security experts today.',
        images: [
            {
            url: 'https://zenarmor.com/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Zenarmor - Next-Generation Cybersecurity Solutions',
            },
        ],
    },
};

const Contact = () => {
    return (
        <main className='py-24 bg-white'>
            <section className='text-center max-w-3xl mx-auto px-4'>
                <span className='inline-block bg-brand-mustard/10 text-brand-mustard text-sm font-medium px-3 py-1 rounded-full mb-4'>
                    Get in Touch
                </span>
                <h1 className='text-5xl md:text-6xl font-medium text-brand-navy mb-4'>
                    Talk to Our Security Experts
                </h1>
                <p className='text-xl text-brand-neutral max-w-2xl mx-auto'>
                    Whether you need enterprise deployment assistance, technical support, or want to learn more about our <span className='text-brand-mustard font-medium'>next-generation firewall</span> capabilities, our team is here to help.
                </p>

                {/* Trust Indicators */}
                <div className='flex flex-wrap justify-center gap-6 mt-8 text-sm text-brand-neutral'>
                    <div className='flex items-center gap-2'>
                        <svg className='w-5 h-5 text-brand-mustard' fill='currentColor' viewBox='0 0 20 20'>
                            <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                        </svg>
                        <span>24/7 Support Available</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <svg className='w-5 h-5 text-brand-mustard' fill='currentColor' viewBox='0 0 20 20'>
                            <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                        </svg>
                        <span>Response within 24 hours</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <svg className='w-5 h-5 text-brand-mustard' fill='currentColor' viewBox='0 0 20 20'>
                            <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                        </svg>
                        <span>Trusted by 13.5K+ deployments</span>
                    </div>
                </div>
            </section>

            <section className='flex flex-col items-center justify-center mt-12 px-4'>
                <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                    <form className="flex flex-wrap gap-4">
                        <div className="w-full md:w-[calc(50%-0.5rem)]">
                            <label className="block text-sm font-medium text-brand-navy mb-2">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full bg-gray-50 text-brand-navy border border-gray-200 rounded-lg p-3 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-mustard focus:border-transparent transition"
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="w-full md:w-[calc(50%-0.5rem)]">
                            <label className="block text-sm font-medium text-brand-navy mb-2">
                                Work Email *
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full bg-gray-50 text-brand-navy border border-gray-200 rounded-lg p-3 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-mustard focus:border-transparent transition"
                                placeholder="john@company.com"
                            />
                        </div>

                        <div className="w-full md:w-[calc(50%-0.5rem)]">
                            <label className="block text-sm font-medium text-brand-navy mb-2">
                                Company
                            </label>
                            <input
                                type="text"
                                className="w-full bg-gray-50 text-brand-navy border border-gray-200 rounded-lg p-3 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-mustard focus:border-transparent transition"
                                placeholder="Your Company"
                            />
                        </div>

                        <div className="w-full md:w-[calc(50%-0.5rem)]">
                            <label className="block text-sm font-medium text-brand-navy mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                className="w-full bg-gray-50 text-brand-navy border border-gray-200 rounded-lg p-3 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-mustard focus:border-transparent transition"
                                placeholder="+1 (555) 000-0000"
                            />
                        </div>

                        <div className="w-full">
                            <label className="block text-sm font-medium text-brand-navy mb-2">
                                How can we help? *
                            </label>
                            <select
                                required
                                className="w-full bg-gray-50 text-brand-navy border border-gray-200 rounded-lg p-3 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-mustard focus:border-transparent transition"
                            >
                                <option value="">Select a topic</option>
                                <option value="sales">Sales Inquiry</option>
                                <option value="support">Technical Support</option>
                                <option value="deployment">Deployment Assistance</option>
                                <option value="partnership">Partnership Opportunities</option>
                                <option value="general">General Question</option>
                            </select>
                        </div>

                        <div className="w-full">
                            <label className="block text-sm font-medium text-brand-navy mb-2">
                                Message *
                            </label>
                            <textarea
                                name="message"
                                required
                                rows={5}
                                className="w-full bg-gray-50 text-brand-navy border border-gray-200 rounded-lg p-3 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-mustard focus:border-transparent transition resize-none"
                                placeholder="Tell us about your security requirements..."
                            ></textarea>
                        </div>

                        <div className="w-full">
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-brand-mustard to-orange-600 text-white font-medium py-3 px-6 rounded-lg hover:from-brand-mustard/90 hover:to-orange-600/90 transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                                Send Message
                            </button>
                            <p className="text-xs text-brand-neutral text-center mt-3">
                                By submitting this form, you agree to our privacy policy and terms of service.
                            </p>
                        </div>
                    </form>
                </div>

                {/* Additional Contact Information */}
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl w-full mt-12">
                    <div className="bg-gradient-to-br from-brand-navy to-brand-navy/90 rounded-xl p-6 text-white">
                        <div className="w-12 h-12 bg-brand-mustard/20 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-brand-mustard" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="font-medium mb-2">Email Us</h3>
                        <p className="text-sm text-gray-300">hi@zenarmor.com</p>
                    </div>

                    <div className="bg-gradient-to-br from-brand-navy to-brand-navy/90 rounded-xl p-6 text-white">
                        <div className="w-12 h-12 bg-brand-mustard/20 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-brand-mustard" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <h3 className="font-medium mb-2">Call Us</h3>
                        <p className="text-sm text-gray-300">+1 (650) 288-4488</p>
                    </div>

                    <div className="bg-gradient-to-br from-brand-navy to-brand-navy/90 rounded-xl p-6 text-white">
                        <div className="w-12 h-12 bg-brand-mustard/20 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-brand-mustard" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 className="font-medium mb-2">Visit Us</h3>
                        <p className="text-sm text-gray-300">Cupertino, CA 95014</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Contact
