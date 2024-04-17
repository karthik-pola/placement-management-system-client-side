import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminDashboard from '../../components/AdminDashboard.jsx'

const createStudent = () => {

    
  const [fullName, setFullName] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("student"); 
   const [personalEmail, setPersonalEmail] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [percentage , setPercentage] = useState('');




  const [data , setData] = useState('');
  const navigate = useNavigate();

    
        const handleSubmit = async() => {


            // console.log("Company Name:", ResourceName);
            // console.log("Company Image:", coverImage);
            // console.log("Attachments:", attachments);
            // console.log("Description:", description);
            console.log("username" , fullName)
          
            const formData = new FormData();
            formData.append('fullName', fullName);
            formData.append('avatar', avatar);
            formData.append('coverImage', coverImage);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('userName', userName);
            formData.append('gender', gender);
            formData.append('role', role);
            formData.append('personalEmail', personalEmail);
            formData.append('rollNo', rollNo);
            formData.append('percentage', percentage);


            
          
            console.log("FormData:", formData);



          const response = await axios.post("https://placement-management-system-mroj.onrender.com/api/v1/user/register" , formData)
          .then((res) => {
            return res.data.data;
          })
          .then((res) => {
            setData(res);
            console.log("data:",data);
          });


          navigate("/u2/drives");
        };





  return (
    <>
    
    <AdminDashboard>
    <div className="mx-auto w-full max-w-8xl bg-slate-100 py-2 h-full rounded-lg">
      <div className="mx-auto my-4 max-w-2xl md:my-6">
        
        <div className="overflow-hidden rounded-xl bg-white p-4 shadow">
          <p className="text-sm font-bold text-gray-900">Add new student</p>

          {/* <div>
        <button
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ms-[400px]"
          // onClick={handleCreateResource}
        >
          Add new studentData
        </button>
      </div> */}
          <div className="mt-6 gap-6 space-y-4 md:grid md:grid-cols-2 md:space-y-0">
            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="firstName"
              >
                Student Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter student name "
                id="firstName"
                onChange={(e)=>setFullName(e.target.value)}
              ></input>
            </div>

            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="firstName"
              >
                User Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter student name "
                id="firstName"
                onChange={(e)=>setUserName(e.target.value)}
              ></input>
            </div>
            
            <div className='flex-col'>
            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="firstName"
              >
                Cover Image
                </label>
              
            </div>
            <input type="file" name="coverImage" 
            // value={companyImage}
                onChange={(e)=>setAvatar(e.target.files[0])}/>
            </div>
            

            <div className='flex-col'>
            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="firstName"
              >
                CoverImage
              </label>
            </div>
            <input type="file" name="atachments"  
            // value={attachments}
                onChange={(e)=>setCoverImage(e.target.files[0])}
                />
              </div>



            <div className="col-span-2 grid">
              <div className="w-full">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  email
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Enter the email"
                  id="email"
                  // value={description}
                onChange={(e) =>setEmail(e.target.value)}
                ></input>
              </div>
            </div>


            <div className="col-span-2 grid">
              <div className="w-full">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  rollNo
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Enter the roll number"
                  id="email"
                  // value={description}
                onChange={(e) =>setRollNo(e.target.value)}
                ></input>
              </div>
            </div>


            <div className="col-span-2 grid">
              <div className="w-full">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  password
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Enter the password"
                  id="email"
                  // value={description}
                onChange={(e) =>setPassword(e.target.value)}
                ></input>
              </div>
            </div>

            <div className="col-span-2 grid">
              <div className="w-full">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  personalEmail
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Enter personal email"
                  id="email"
                  // value={description}
                onChange={(e) =>setPersonalEmail(e.target.value)}
                ></input>
              </div>
            </div>

            <div className="col-span-2 grid">
              <div className="w-full">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Percentage
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Enter Percentage"
                  id="email"
                  // value={description}
                onChange={(e) =>setPercentage(e.target.value)}
                ></input>
              </div>
            </div>




            <div className="col-span-2 grid">
              <div className="w-full">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Gender
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Gender"
                  id="email"
                onChange={(e) =>setGender(e.target.value)}
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
    </AdminDashboard>
    </>
  )
}

export default createStudent
