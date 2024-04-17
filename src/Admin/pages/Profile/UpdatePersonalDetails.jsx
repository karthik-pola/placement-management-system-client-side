import React, { useState } from 'react'
import axios from 'axios';
import { useAccessToken } from '../../../middleware/AuthProvider';
import { useNavigate } from 'react-router-dom';


const UpdatePersonalDetails = () => {

    const [department, setDepartment] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [employId, setEmployId] = useState('');
    const [phoneNo, setPhoneNumber] = useState('');
    const [username, setUsername] = useState('');
    const AccessToken = useAccessToken();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const formData = new FormData();
            formData.append('department', department);
            formData.append('gender', gender);
            formData.append('employId', employId);
            formData.append('phoneNo', phoneNo);
            formData.append('email', email);
            formData.append('username', username);

            const response = await axios.patch("https://placement-management-system-mroj.onrender.com/api/v1/admin/update-account", {
              "email": email,
              "department": department,
              "gender": gender,
              "employId": employId,
              "phoneNumber": phoneNo, 
              "username":username,
            }, {
                headers: {
                    'Authorization': `Bearer ${AccessToken}`
                }
            });

            // Provide feedback to user
            alert('Personal details updated successfully');

            // Redirect user to profile page
            navigate("/u2/profile");

            // Clear form fields
            setDepartment('');
            setGender('');
            setEmployId('');
            setPhoneNumber('');
            setEmail('');
            setUsername('');
        } catch (error) {
            // Handle error
            console.error('Error updating personal details:', error);
            // Provide feedback to user if there's an error
            alert('Failed to update personal details. Please try again later.');
        }
    };

    
    

  return (
    <div className="mx-auto w-full max-w-7xl bg-slate-100 py-2">
      <div className="mx-auto my-4 max-w-2xl md:my-6">

        <div className="overflow-hidden rounded-xl bg-white p-4 shadow">
          <p className="text-sm font-bold text-gray-900">Personal Details</p>
          <div className="mt-6 gap-6 space-y-4 md:grid md:grid-cols-2 md:space-y-0">
            

            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="Department"
              >
                Department
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter your department"
                id="Department"
                onChange={(e)=>{setDepartment(e.target.value)}}
              ></input>
            </div>

            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="Email"
              >
                Email
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter your email"
                id="Email"
                onChange={(e)=>{setEmail(e.target.value)}}
              ></input>
            </div>
            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="rollNumber"
                
              >
                Employ Id
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter your Employ Id "
                id="rollNumber"
                onChange={(e)=>{setEmployId(e.target.value)}}
              ></input>
            </div>

            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="gender"
              >
                Gender
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter your Gender"
                id="gender"
                onChange={(e)=>{setGender(e.target.value)}}
              ></input>
            </div>



            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="PhoneNumber"
              >
                Phone Number
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter your Phone Number"
                id="PhoneNumber"
                onChange={(e)=>{setPhoneNumber(e.target.value)}}
              ></input>
            </div>

            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="fullname"
              >
               Full Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter your Full Name"
                id="fullname"
                onChange={(e)=>{setUsername(e.target.value)}}
              ></input>
            </div>



            <div className="col-span-2 grid">
              <button
                type="button"
                className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"

                onClick={handleSubmit}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdatePersonalDetails
