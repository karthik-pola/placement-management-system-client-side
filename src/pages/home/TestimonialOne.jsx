import React from 'react'

import Photo from './slide1.jpg'
import { HeroTwo } from './HeroTwo'






export function TestimonialOne() {
  return (
    <section className="px-2 py-10 md:px-0">
      
            <img src={Photo} className='min-w-full' />
            <HeroTwo />
           
    </section>
  )
}