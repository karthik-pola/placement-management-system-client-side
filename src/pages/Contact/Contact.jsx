import React from 'react'
import { ExampleNavbarOne } from '../../components/ExampleNavbarOne'
import { FooterThree } from '../../components/FooterThree'
import Help from './Help.jsx'
import  ContactPageOne  from './ContactPageOne.jsx'

const Contact = () => {
  return (
    <div>
      <ExampleNavbarOne />
      <Help />
      {/* <ContactPageOne /> */}
      <div className="footer w-full">
        <FooterThree />
      </div>
    </div>
  )
}

export default Contact
