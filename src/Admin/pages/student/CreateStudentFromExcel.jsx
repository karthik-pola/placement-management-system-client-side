import React, { useState } from 'react'
import AdminDashboard from '../../components/AdminDashboard'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const CreateStudentFromExcel = () => {
    const [data , setData] = useState();
    const navigate = useNavigate();
    const handleUpload = async() => {
        console.log(data);
        const formData  = new FormData();
        formData.append("userData",data);
        const response = await axios.post("https://placement-management-system-mroj.onrender.com/api/v1/user/createUser" , formData);
        if (response.status === 200) {
            navigate("/u2/student");
        }
    }
  return (
    <AdminDashboard>
    <div className='flex'>
        <input type="file" onChange={(e) =>{setData(e.target.files[0])}}/>
    <button
        type="button"
        className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        onClick={handleUpload}
      >
        upload file
      </button>
    </div>
    </AdminDashboard>
  )
}

export default CreateStudentFromExcel
