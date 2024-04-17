import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaTrashAlt } from "react-icons/fa";
import axios from 'axios';

const Table = ({ resource}) => {
  const navigate = useNavigate();

    const deleteResource = async() =>{
        const response = await axios.delete(`https://placement-management-system-mroj.onrender.com/api/v1/resources/delete/${resource._id}`);
        console.log(response);
        window.location.reload();
    }
  return (
      <tr key={resource._id}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={resource?.coverImage}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{resource.ResourceName}</div>
                              {/* <div className="text-sm text-gray-700">{resource.ResourceName}</div> */}
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{resource.ResourceName}</div>
                          {/* <div className="text-sm text-gray-700">{resource.ResourceName}</div> */}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            Active
                          </span>
                        </td>
                        {console.log(resource.attachments)}
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          <a href={resource.attachments
} target="_blank" rel="noopener noreferrer">Click here</a>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium text-red-700 cursor-pointer" onClick={deleteResource}>
                          <FaTrashAlt />
                        </td>
                      </tr>
  )
}

export default Table
