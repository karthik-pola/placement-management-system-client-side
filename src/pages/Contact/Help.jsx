import React, { useEffect, useState } from 'react'
// import StudentDashboard from '../../Components/StudentDashboard'
import axios from 'axios';


const Help = () => {
  const [username , setUsername] = useState();
  const [rollNo , setRollNo] = useState();
  const [email , setEmail] = useState();
  const [message , setMessage] = useState();



  const handleSubmit = async() => {
    const response = await axios.post("https://placement-management-system-mroj.onrender.com/api/v1/help/create" , {
      "message":message,
      "email":email,
      "rollNo":rollNo,
      "username":username
  });
  window. location. reload();
  };

  return (
    <div>
    <div className="mx-auto w-full max-w-8xl bg-slate-100 py-2 h-full rounded-lg">
      <div className="mx-auto my-4 max-w-2xl md:my-6">
        <nav className="mb-8 flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
          </ol>
        </nav>
        <div className="overflow-hidden rounded-xl bg-white p-4 shadow">
          <p className="text-sm font-bold text-gray-900">Contact Form</p>
          <div className="mt-6 gap-6 space-y-4 md:grid md:grid-cols-2 md:space-y-0">
            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="firstName"
              >
                Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter your Name "
                id="firstName"
                onChange={(e)=>{setUsername(e.target.value)}}
              ></input>
            </div>

            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="lastName"
              >
                Roll Number
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter your Roll Number"
                id="lastName"
                onChange={(e)=>{setRollNo(e.target.value)}}
              ></input>
            </div>
            <div className="col-span-2 grid">
              <div className="w-full">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Enter the your email address"
                  id="email"
                  onChange={(e)=>{setEmail(e.target.value)}}
                ></input>
              </div>
            </div>


            <div className="col-span-2 grid">
              <div className="w-full">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Messgae
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Enter the Message"
                  id="email"
                  onChange={(e)=>{setMessage(e.target.value)}}
                ></input>
              </div>
            </div>




            <div className="col-span-2 grid">
              <button
                type="button"
                className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>


  )
}

export default Help
