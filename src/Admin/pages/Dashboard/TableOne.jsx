import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAccessToken, useUserData } from '../../../middleware/AuthProvider';

const people = [
  {
    name: 'John Doe',
    title: 'Front-end Developer',
    department: 'Engineering',
    email: 'john@devui.com',
    role: 'Developer',
    image:
      'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
  },
  {
    name: 'Jane Doe',
    title: 'Back-end Developer',
    department: 'Engineering',
    email: 'jane@devui.com',
    role: 'CTO',
    image:
      'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
  },
]

export function TableOne() {

    const [Data, setData] = useState([]);
    const [Open, setOpen] = useState(false);
    // const [accesstoken, setAccessToken] = useState("");
    const AccessToken = useAccessToken();
    const  User = useUserData();
    const navigate = useNavigate();
  
  
  
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.post("https://placement-management-system-mroj.onrender.com/api/v1/placedData/drive-details");
          setData(response.data);
          // setAccessToken(AccessToken);
          console.log("data inside :")
          console.log(AccessToken);
          console.log("data : " , response);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);


  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Placed Students</h2>
            {/* <p className="mt-1 text-sm text-gray-700">
              This is a list of all employees. You can add new employees, edit or delete existing
              ones.
            </p> */}
          </div>
          <div>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={()=>{navigate("/u2/addPlacedData")}}
            >
              Add placed students data
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>Student</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Company
                      </th>

                      {/* <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Status
                      </th> */}

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Roll Number
                      </th>
                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {Data.map((person) => (
                      <tr key={person.companyName}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            {/* <div className="h-10 w-10 flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={person.image}
                                alt=""
                              />
                            </div> */}
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{person.fullName}</div>
                              {/* <div className="text-sm text-gray-700">{person.companyName}</div> */}
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{person.companyName}</div>
                          {/* <div className="text-sm text-gray-700">{person?.companyName}</div> */}
                        </td>
                        {/* <td className="whitespace-nowrap px-4 py-4">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            Active
                          </span>
                        </td> */}
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {person?.rollNo}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                          {/* <a href="#" className="text-gray-700">
                            Edit
                          </a> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
