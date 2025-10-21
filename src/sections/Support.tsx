import { SupportComponent } from '@/components/Support'
import Tag from '@/components/Tag'
import React from 'react'

const Support = () => {
    return (
        <section className="py-10 bg-white">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Support</Tag>
                </div>
                <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto text-brand-navy">
                    Get the <span className="text-brand-mustard">support</span> you need
                </h2>

                <SupportComponent />
            </div>
        </section>
    )
}

export default Support
