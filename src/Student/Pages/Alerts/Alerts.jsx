import React, { useEffect, useState } from 'react'
import StudentDashboard from '../../Components/StudentDashboard'

import axios from 'axios';
import  TestimonialThree  from './TestimonialThree.jsx';

const Alerts = () => {
  const [Data , setData] = useState([{}]);
  useEffect(() => {
      const fetchData = async() => {
        await axios.get("https://placement-management-system-mroj.onrender.com/api/v1/alerts")
        .then((res) => {
          // console.log(res)
          return res.data.data;

        })
        .then((res) => {
          setData(res.reverse());
          console.log("alert")
          console.log("data:",Data);
        });
      };
      fetchData();
    },[]);
  return (
    <StudentDashboard>
    {Data.map((alert) =>(
            <TestimonialThree alert = {alert}/>
    ))}
    </StudentDashboard>
  )
}

export default Alerts
