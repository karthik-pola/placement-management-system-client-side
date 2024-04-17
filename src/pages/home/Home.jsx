import React from 'react'
import { ExampleNavbarOne } from '../../components/ExampleNavbarOne'
import { FooterThree } from '../../components/FooterThree'
import LandingPageHome from './landingPageHome'
import { TestimonialOne } from './TestimonialOne.jsx'

const Home = () => {
  return (
    <div>
      <ExampleNavbarOne />
      {/* <LandingPageHome /> */}
      <TestimonialOne />
      <FooterThree />
    </div>
  )
}

export default Home
