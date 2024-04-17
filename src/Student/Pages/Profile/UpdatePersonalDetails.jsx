import React, { useState } from 'react'
import { Home, ChevronRight, ShoppingCart } from 'lucide-react'
import axios from 'axios';
import { useAccessToken } from '../../../middleware/AuthProvider';
import { useNavigate } from 'react-router-dom';


const UpdatePersonalDetails = () => {

    const [department , setDepartment] = useState();
    const [email , setEmail] = useState();
    const [gender , setGender] = useState();
    const [rollNo , setRollNo] = useState();
    const [phoneNo , setPhoneNumber] = useState();
    const [placed , setPlaced] = useState();
    const [personalEmail , setPersonalEmail] = useState();
    const [course , setCourse] = useState();
    const [address , setAddress] = useState();
    const [fullName , setFullName] = useState();
    const AccessToken = useAccessToken();
    const navigate = useNavigate();

    const handleSubmit = async() =>{
        console.log("yesss")


        const formData = new FormData();
        formData.append('department', department);
        formData.append('gender', gender);
        formData.append('rollNo', rollNo);
        formData.append('phoneNo', phoneNo);
        formData.append('placed', placed);
        formData.append('personalEmail', personalEmail);
        formData.append('course', course);
        formData.append('address', address);
        formData.append('email', email);
        formData.append('fullName', fullName);


        
        const response = await axios.post("https://placement-management-system-mroj.onrender.com/api/v1/user/update/personalDetails" , {
            "department": department,
            "gender":gender,
            "rollNo":rollNo,
            "phoneNo":phoneNo,
            "placed":placed,
            "personalEmail":personalEmail,
            "course":course,
            "address":address,
            "email":email,
            "fullName":fullName,
            
        },{
            headers: {
              'Authorization': `Bearer ${AccessToken}`
            }
          });
          navigate("/u1/profile");
          console.log(response.data);
    }

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
                Roll Number
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter your RollNumber"
                id="rollNumber"
                onChange={(e)=>{setRollNo(e.target.value)}}
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
                htmlFor="placed"
              >
                Placed
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter true or false only"
                id="placed"
                onChange={(e)=>{setPlaced(e.target.value)}}
              ></input>
            </div>

            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="PersonalEmail"
              >
                Personal Email
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter your personal email"
                id="PersonalEmail"
                onChange={(e)=>{setPersonalEmail(e.target.value)}}
              ></input>
            </div>



            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="course"
              >
               Course
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter your Course"
                id="course"
                onChange={(e)=>{setCourse(e.target.value)}}
              ></input>
            </div>



            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="address"
              >
               Address
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter your Adress"
                id="address"
                onChange={(e)=>{setAddress(e.target.value)}}
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
                onChange={(e)=>{setFullName(e.target.value)}}
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
