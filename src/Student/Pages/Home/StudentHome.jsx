import React, { useContext } from 'react'
import StudentDashboard from '../../Components/StudentDashboard.jsx';
'use client';
import slide2 from '../../../../public/images/student Home Carousel/slide2.jpg';
import slide3 from '../../../../public/images/student Home Carousel/slide3.jpg';
import slide4 from '../../../../public/images/student Home Carousel/slide4.jpg';
import slide1 from '../../../../public/images/student Home Carousel/slide1.jpg';
import "./Home.css"

import { Carousel } from 'flowbite-react';
import { ExampleNavbarThree } from '../../Components/ExampleNavbarThree.jsx';
import NavbarComponent from '../../Components/NavbarComponent.jsx';
import Scrollbar from './Scrollbar.jsx';
import UserContext from '../../../context/UserContext.js';
import { useAccessToken, useUserData } from '../../../middleware/AuthProvider.jsx';





const StudentHome = () => {
  const AccessToken = useAccessToken();

  const User = useUserData();
  // const {user} = useContext(UserContext);
  return (
    <StudentDashboard>
      {console.log("user:" + AccessToken + "user :" + User)}
    <div className='student-home'>
      {/* <ExampleNavbarThree /> */}
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-110 caro" >
      <Carousel className='car'>
        <img  src={slide2} alt="..." />
        <img src={slide3} alt="..." />
        <img src={slide4} alt="..." />
        <img src={slide1} alt="..." />
        <img src={slide3} alt="..." />
      </Carousel>
    </div>

    <Scrollbar />
    </div>
    </StudentDashboard>
  )
}

export default StudentHome
