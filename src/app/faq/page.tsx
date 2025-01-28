import FaqComponent from '@/components/Faq'
import React from 'react'

const Faq = () => {
  return (
    <main className='py-24'>
      <section className='text-center'>
        <h1 className='text-5xl'>FAQ Page</h1>
        <p className='text-xl max-w-lg mx-auto mt-2'>
          At <span className='text-lime-400'>Layers</span> we will make sure to cover as many <span className='text-lime-400'>answers</span>
        </p>
        </section>

        <section>
          <FaqComponent />
        </section>
    </main>
  )
}

export default Faq
