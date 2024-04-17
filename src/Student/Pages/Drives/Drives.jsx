import axios from 'axios';
import React, { useEffect, useState } from 'react';
import StudentDashboard from '../../Components/StudentDashboard';
import Card from './Card/Card';
import { useAccessToken, useUserData } from '../../../middleware/AuthProvider.jsx';
import NavbarComponent from '../../Components/NavbarComponent.jsx';

const Drives = () => {
  const [Data, setData] = useState([]);
  const [registeredDrives, setRegisteredDrives] = useState([]);
  const AccessToken = useAccessToken();
  const User = useUserData();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://placement-management-system-mroj.onrender.com/api/v1/drives" ,{headers: {
          'Authorization': `Bearer ${AccessToken}`}
        });
        setData(response.data.data.drive);

        // const res = await axios.post("http://localhost:8000/api/v1/drives/registeredDrives", {}, {
          // headers: {
          //   'Authorization': `Bearer ${AccessToken}`
          // }
        // });


        // console.log("asvcv dshgcvf" , res.data);
        // setRegisteredDrives(res.data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [AccessToken]); // Added AccessToken to dependency array

  // Filter out drives that are not registered


  // const ans =  Data.map(data => console.log("karthik" , data));
  // const unregisteredDrives = Data.filter(drive => !registeredDrives.some(regDrive => regDrive.company === drive._id));
  // console.log("unregisteredDrives: " , unregisteredDrives);

  return (
    <StudentDashboard>
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {Data.map(item => (
          <Card data={item} key={item.id} />
        ))}
      </div>
    </StudentDashboard>
  );
};

export default Drives;
