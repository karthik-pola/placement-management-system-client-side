import React, { useEffect, useState } from 'react';
import StudentDashboard from '../../Components/StudentDashboard.jsx';
import { ProductThree } from './ProductThree.jsx';
import axios from 'axios';

const Resources = () => {

  const [data , setData] = useState([{}]);

  useEffect(() => {
    const fetchData = async() => {
      await axios.get("https://placement-management-system-mroj.onrender.com/api/v1/resources")
      .then((res) => {
        return res.data.data.resources;
      })
      .then((res) => {
        setData(res);
        console.log("data:",data);
      });
    };
    fetchData();
  },[]);
  return (
    <StudentDashboard>
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {data.map((item) => (
      <ProductThree data={item}/>
      ))}
    </div>
    </StudentDashboard>
  )
}

export default Resources
