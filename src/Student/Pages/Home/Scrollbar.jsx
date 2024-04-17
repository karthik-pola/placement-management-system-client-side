import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../Drives/Card/Card';

const Scrollbar = () => {
    const [Data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("https://placement-management-system-mroj.onrender.com/api/v1/drives");
            setData(response.data.data.drive);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, []);


  return (
    <div> </div>
    
  )
}

export default Scrollbar
