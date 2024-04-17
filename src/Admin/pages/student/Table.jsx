import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaTrashAlt } from "react-icons/fa";
import axios from 'axios';

const Table = ({ student}) => {
  const navigate = useNavigate();

    const deleteUser = async() =>{
        const response = await axios.delete(`https://placement-management-system-mroj.onrender.com/api/v1/user/deleteUser/${student._id}`);
        console.log(response);
        window. location. reload();
    }
  return (
      <tr key={student._id}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={student?.coverImage}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{student.fullName}</div>
                              {/* <div className="text-sm text-gray-700">{resource.ResourceName}</div> */}
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{student.rollNo}</div>
                          {/* <div className="text-sm text-gray-700">{resource.ResourceName}</div> */}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            {student.email}
                          </span>
                        </td>

                        <td className="whitespace-nowrap px-4 py-4">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            {student.phoneNo}
                          </span>
                        </td>
                        {/* <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          <a href={student.attachments
} target="_blank" rel="noopener noreferrer">{student.offers}</a>
                        </td> */}
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium text-red-700 cursor-pointer" onClick={deleteUser}>
                          <FaTrashAlt />
                        </td>
                      </tr>
  )
}

export default Table
