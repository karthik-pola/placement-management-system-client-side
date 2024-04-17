import axios from 'axios';
import React from 'react'
import { FaRegTrashCan } from "react-icons/fa6";

export function TestimonialThree({alert}) {

  const deleteAlert = async() =>{
    const response = await axios.delete(`https://placement-management-system-mroj.onrender.com/api/v1/help/delete/${alert._id}` );
    console.log(response);
    window. location. reload();
}


  console.log(alert)
  return (
    <div className="mx-auto max-w-xl rounded-md bg-gray bg-slate-700 p-1 relative mb-2">
      <div className="flex flex-col rounded-md bg-white">
        <div className="flex flex-1 flex-col justify-between p-8">
          <div className="mb-4 flex space-x-2">
          </div>
          <div className="flex-1 pt-2">
            <blockquote>
              <p className="text-lg text-gray-800">
                {alert.message}
              </p>
            </blockquote>
          </div>

          <div className="mt-8 border-t border-gray-300 pt-4 dark:border-gray-800">
            <div className="flex items-center">
              {/* <img
                className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                src={alert?.avatar}
                alt="" */}
              {/* /> */}
              <div className="ml-3 min-w-0">
                <div className=''>
                <p className="truncate text-base font-semibold text-gray-800">{alert.username}</p>
                <p className="truncate text-base font-semibold text-gray-800">{alert?.email}</p>
                </div>
                
                <p className="truncate text-base text-gray-500">{alert?.rollNo}</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <button className='absolute top-4 right-4 text-slate-700' onClick={deleteAlert}><FaRegTrashCan /></button>
    </div>
  )
}
