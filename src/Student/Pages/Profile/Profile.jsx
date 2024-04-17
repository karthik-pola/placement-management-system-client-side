import React, { useEffect, useState } from 'react'
import { TableOne, TableTwo, TestimonialOne } from './TestimonialOne'

import StudentDashboard from '../../Components/StudentDashboard.jsx';
import { useAccessToken } from '../../../middleware/AuthProvider.jsx';
import axios from 'axios';

const Profile = () => {
  const AccessToken = useAccessToken();
  const [data , setData ] = useState(); 
  

  const setUserData = async(user) =>{
     setData(user);
  }

  useEffect(() => {
    const fetchdata = async()=>{
      
      const user = await axios.get("https://placement-management-system-mroj.onrender.com/api/v1/user/current-user",{
        headers: {
          'Authorization': `Bearer ${AccessToken}`
        }
      });
      
      await setUserData(user.data.data);
      console.log(user.data.data);
    };
  //  setAccessToken(AccessToken);
    fetchdata();
  },[]);


  return (

    <StudentDashboard>
    <div className='bg-[#e2e8f0] rounded-t-2xl  h-full'>
      <TestimonialOne UserData={data}/>
      <TableOne UserData={data} />
      <TableTwo UserData={data} />
    </div>

  
    </StudentDashboard>
  )
}

export default Profile
