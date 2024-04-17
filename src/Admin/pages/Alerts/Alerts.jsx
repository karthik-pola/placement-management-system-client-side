import React, { useEffect, useState } from 'react'
import AdminDashboard from '../../components/AdminDashboard.jsx'
import  {TestimonialThree}  from './TestimonialThree.jsx'
import axios from 'axios';
import { IoMdSend } from "react-icons/io";
import { useAccessToken } from '../../../middleware/AuthProvider.jsx';

const Alerts = () => {
    const [Data , setData] = useState([{}]);
    const [Message , setMessage] = useState();

    const AccessToken = useAccessToken();
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
    
    const handleSubmit = async() => {
      const response = await axios.post("https://placement-management-system-mroj.onrender.com/api/v1/alerts/create" , {
        "message":Message
    } ,{
      headers: {
        'Authorization': `Bearer ${AccessToken}`
      }
    });
    window. location. reload();
    };

  return (
    <AdminDashboard>
        
        <div className=' relative h-full space-y-4'>

        <div className="flex w-[580px] items-center space-x-0  mx-auto relative">
      <input
        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="message"
        onChange={(e)=>{setMessage(e.target.value)}}
      ></input>
      <button
        type="button"
        className="rounded-md bg-slate-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black h-10"
        onClick={handleSubmit}
      >
        <IoMdSend />
      </button>
    </div>


        {Data.map((alert) =>(
            <TestimonialThree alert = {alert}/>
        ))}
        
        

          {/* <div className='absolute bottom-6 justify-center'> */}
        
    </div>
    {/* </div> */}
    </AdminDashboard>
  )
}

export default Alerts
