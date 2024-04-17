import React, { useEffect, useState } from 'react'
import { useAccessToken } from '../../../middleware/AuthProvider'
import axios from 'axios';
import { MdModeEdit } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

export default function TableOne({UserData}) {
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
                                <div className="text-sm font-medium text-gray-900">Employ Id :</div>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-12 py-4">
                            <div className="text-sm text-gray-900 ">{UserData?.employId}</div>
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
                            <div className="text-sm text-gray-900 ">{UserData?.phoneNumber}</div>
                            {/* <div className="text-sm text-gray-700">{person.department}</div> */}
                          </td>
                        </tr>
  
                        {/* <tr key={person[0].name}>
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
                            <div className="text-sm text-gray-900 ">{UserData?.email}</div>
                            {/* <div className="text-sm text-gray-700">{person.department}</div> */}
                          {/* </td>
                        </tr> */} 
  
  
                        {/* <tr key={person[0].name}>
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
                            <div className="text-sm text-gray-900 ">{UserData?.email}</div>
                            {/* <div className="text-sm text-gray-700">{person.department}</div> */}
                          {/* </td>
                        </tr> */}

  
                        {/* <tr key={person[0].name}>
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
                            <div className="text-sm text-gray-900 ">{UserData?.email}</div>
                            {/* <div className="text-sm text-gray-700">{person.department}</div> */}
                          {/* </td>
                        </tr> */} 
  
  
  
                        {/* <tr key={person[0].name}>
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
                            <div className="text-sm text-gray-900 ">{UserData?.email}</div>
                            {/* <div className="text-sm text-gray-700">{person.department}</div> */}
                          {/* </td>
                        </tr> */}
  
  
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
          <button className='absolute top-5 right-8 text-slate-700' onClick={()=>{navigate("/u2/updatePersonalDetails")}}><MdModeEdit size={18}/></button>
        </section>
      </>
    )
  }