import React, { useEffect, useState } from 'react'
import { useAccessToken } from '../../../middleware/AuthProvider'
import axios from 'axios';
import { MdModeEdit } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const person = [
    {
      name: 'Branch :',
      title: 'EEE',
      
    },
    {
      name: 'Dob :',
      title: '07-03-2003',
      
    },
    {
        name: 'Adress :',
        title: '31-23-6/1 ,Allipuram , Visakhapatnam',
        
    },
    {
        name: 'year :',
        title: '4th year',
        
    },
  ]


export function TestimonialOne({UserData}) {
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
    
    <section className="px-2 py-10 md:px-0 bg-slate-500 rounded-t-2xl">
      <div className="mx-auto max-w-4xl">
        <div className="md:flex md:items-center md:justify-center md:space-x-14">
          <div className="relative h-48 w-48 flex-shrink-0 sm:mx-auto">
            <img
              className="relative h-48 w-48 rounded-full object-cover"
              src={UserData?.coverImage}
              alt=""
            />
          </div>

          <div className="mt-10 md:mt-0">
            <blockquote className='sm:flex'>
              <p className="text-xl text-[#f1f5f9] sm:mx-auto">
                {/* “Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquam repellat
                laborum minima tempore deserunt explicabo placeat! Fugit, molestias nesciunt.” */}
                Passionate about crafting innovative solutions and building seamless user experiences, I wanted to be a dedicated Full Stack Developer with a knack for translating ideas into functional software applications. With a solid foundation in both front-end and back-end development, I thrive in dynamic environments where creativity and problem-solving skills are key.
              </p>
            </blockquote>
            <div className='sm:flex'>  
                <p className="mt-7 text-lg font-semibold text-white sm:mx-auto">{UserData?.userName}</p>
            </div>
            <div className='sm:flex'>
                <p className="mt-1 text-base text-[#cbd5e1] sm:mx-auto">{UserData?.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}




export function TableOne({UserData}) {
  const navigate = useNavigate();
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4 relative">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          Personal Details
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {/* {people.map((person) => ( */}
                      
                      
                      
                      
                      <tr key={person[0].name}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">Branch :</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{UserData?.department}</div>
                          {/* <div className="text-sm text-gray-700">{person.department}</div> */}
                        </td>
                      </tr>


                      <tr key={person[0].name}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">Email :</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{UserData?.email}</div>
                          {/* <div className="text-sm text-gray-700">{person.department}</div> */}
                        </td>
                      </tr>


                      <tr key={person[0].name}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">Gender :</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{UserData?.gender}</div>
                          {/* <div className="text-sm text-gray-700">{person.department}</div> */}
                        </td>
                      </tr>


                      <tr key={person[0].name}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">Roll Number :</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{UserData?.rollNo}</div>
                          {/* <div className="text-sm text-gray-700">{person.department}</div> */}
                        </td>
                      </tr>


                      <tr key={person[0].name}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">Phone Number :</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{UserData?.phoneNo}</div>
                          {/* <div className="text-sm text-gray-700">{person.department}</div> */}
                        </td>
                      </tr>

                      <tr key={person[0].name}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">Placed :</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{!UserData?.placed?"False":"True"}</div>
                          {/* <div className="text-sm text-gray-700">{person.department}</div> */}
                        </td>
                      </tr>


                      <tr key={person[0].name}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">Personal Email :</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{UserData?.personalEmail}</div>
                          {/* <div className="text-sm text-gray-700">{person.department}</div> */}
                        </td>
                      </tr>


                      <tr key={person[0].name}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">Course :</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{UserData?.course}</div>
                          {/* <div className="text-sm text-gray-700">{person.department}</div> */}
                        </td>
                      </tr>



                      <tr key={person[0].name}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">Address :</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{UserData?.address}</div>
                          {/* <div className="text-sm text-gray-700">{person.department}</div> */}
                        </td>
                      </tr>


                      <tr key="FullName">
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">Full Name</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{UserData?.fullName}</div>
                          {/* <div className="text-sm text-gray-700">{person.department}</div> */}
                        </td>
                      </tr>


                      
                    {/* ))} */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <button className='absolute top-5 right-8 text-slate-700' onClick={()=>{navigate("/u1/updatePersonalDetails")}}><MdModeEdit size={18}/></button>
      </section>
    </>
  )
}




export function TableTwo({UserData}) {
    const navigate = useNavigate();
  return (
    <>

      <section className="mx-auto w-full max-w-7xl px-4 py-4 relative">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 ">
          Educational Details
          
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {/* {people.map((person) => ( */}
                      
                      
                      
                      
                      <tr key={person[0].name}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">1-1 :</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{UserData?.oneOne}</div>
                          {/* <div className="text-sm text-gray-700">{person.department}</div> */}
                        </td>
                      </tr>


                      <tr key={person[0].name}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">1-2 :</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{UserData?.oneTwo}</div>
                          {/* <div className="text-sm text-gray-700">{person.department}</div> */}
                        </td>
                      </tr>


                      <tr key={person[0].name}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">2-1 :</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{UserData?.twoTwo}</div>
                          {/* <div className="text-sm text-gray-700">{person.department}</div> */}
                        </td>
                      </tr>


                      <tr key={person[0].name}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">2-2 :</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{UserData?.twoTwo}</div>
                          {/* <div className="text-sm text-gray-700">{person.department}</div> */}
                        </td>
                      </tr>


                      <tr key={person[0].name}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">3-1 :</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{UserData?.threeOne}</div>
                          {/* <div className="text-sm text-gray-700">{person.department}</div> */}
                        </td>
                      </tr>

                      <tr key={person[0].name}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">3-2 :</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{UserData?.threeTwo}</div>
                          {/* <div className="text-sm text-gray-700">{person.department}</div> */}
                        </td>
                      </tr>


                      <tr key={person[0].name}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">4-1 :</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{UserData?.fourOne}</div>
                          {/* <div className="text-sm text-gray-700">{person.department}</div> */}
                        </td>
                      </tr>


                      <tr key={person[0].name}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">4-2 :</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{UserData?.fourTwo}</div>
                        </td>
                      </tr>

                      <tr key={person[0].name}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">percentage :</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{UserData?.percentage}</div>
                        </td>
                      </tr>

                    {/* ))} */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <button className='absolute top-5 right-8 text-slate-700' onClick={()=>{navigate("/u1/updateEducationalDetails")}}><MdModeEdit size={18}/></button>
      </section>
    </>
  )
}
