// import React from 'react'
// import { ExampleNavbarOne } from '../../components/ExampleNavbarOne'
// import { FooterThree } from '../../components/FooterThree'

// const About = () => {
//   return (
//     <div>
//       <ExampleNavbarOne />
//       <div>this is about section</div>
//       <div className="footer">
//         <FooterThree />
//       </div>
//     </div>
//   )
// }

// export default About


import React from 'react'
import { CtaTwo } from './CtaTwo'
import Example from './Example'
import { ProductTwo } from './ProductTwo'
import { HeroTen } from './HeroTen'
import { ExampleNavbarOne } from '../../components/ExampleNavbarOne'
import { FooterThree } from '../../components/FooterThree'
import { TeamsOne } from './TeamsOne'


const About = () => {
  return (
    <div>
      <ExampleNavbarOne />
      <HeroTen/>
      <Example/>
      <CtaTwo/>
      <ProductTwo/>
      <TeamsOne />
      <FooterThree />
    </div>
  )
}


export default About;
