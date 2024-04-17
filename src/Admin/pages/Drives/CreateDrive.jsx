import React, { useState } from 'react'
import { Menu, X, MapPin } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminDashboard from '../../components/AdminDashboard';

const CreateDrive = () => {

  const [companyName, setCompanyName] = useState('');
  const [eligibility, setEligibility] = useState('');
  const [companyImage, setCompanyImage] = useState(null);
  const [attachments, setAttachments] = useState(null);
  const [description, setDescription] = useState('');
  const [venue, setVenue] = useState('');
  const [packageValue, setPackageValue] = useState('');
  const [firstDateToRegister, setFirstDateToRegister] = useState('');
  const [lastDateToRegister, setLastDateToRegister] = useState('');
  const [cutOff , setCutOff] = useState('');

  const [data , setData] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async() =>{
    console.log("Company Name:", companyName);
  console.log("Eligibility:", eligibility);
  console.log("Company Image:", companyImage);
  console.log("Attachments:", attachments);
  console.log("Description:", description);
  console.log("Venue:", venue);
  console.log("Package:", packageValue);
  console.log("First Date To Register:", firstDateToRegister);
  console.log("Last Date To Register:", lastDateToRegister);

  const formData = new FormData();
  formData.append('companyName', companyName);
  //formData.append('eligibility', eligibility);
  formData.append('coverImage', companyImage);
  formData.append('attachments', attachments);
  formData.append('description', description);
  formData.append('venue', venue);
  //formData.append('package', packageValue);
  formData.append('dateToRegister', firstDateToRegister);
  formData.append('lastDateToRegister', lastDateToRegister);
  formData.append('cutOff' , cutOff);

    // const formData  = {
    //   "companyName": companyName ,
    //   'coverImage': companyImage ,
    //   'description': description ,
    //   'venue': venue ,
    //   'dateToRegister': firstDateToRegister,
    //   'lastDateToRegister': lastDateToRegister

    // }

  console.log("FormData:", formData);

    // Send a POST request to the backend API with FormData
    const response = await axios.post("https://placement-management-system-mroj.onrender.com/api/v1/drives/create", formData);

    console.log(response.data);
    // Handle success (e.g., show success message, redirect user)
    navigate("/u2/drives");




  }

  return (
    <AdminDashboard>
<div className="mx-auto w-full max-w-8xl bg-slate-100 py-2 h-full rounded-lg">
      <div className="mx-auto my-4 max-w-2xl md:my-6">
        <div className="overflow-hidden rounded-xl bg-white p-4 shadow">
          <p className="text-sm font-bold text-gray-900">Create Drive</p>
          <div className="mt-6 gap-6 space-y-4 md:grid md:grid-cols-2 md:space-y-0">
            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="firstName"
              >
                Company Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter your Company Name "
                id="firstName"
                // value={companyName}
                onChange={(e)=>setCompanyName(e.target.value)}
              ></input>
            </div>

            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="firstName"
              >
                Eligibility
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter the branches eligible for the drive "
                id="firstName"
                // value={eligibility}
                onChange={(e)=>setEligibility(e.target.value)}
              ></input>
            </div>

            
            <div className='flex-col'>
            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="firstName"
              >
                Company Image
                </label>
              
            </div>
            <input type="file" name="coverImage" 
            // value={companyImage}
                onChange={(e)=>setCompanyImage(e.target.files[0])}/>
            </div>
            

            <div className='flex-col'>
            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="firstName"
              >
                Atachments
              </label>
            </div>
            <input type="file" name="atachments"  
            // value={attachments}
                onChange={(e)=>setAttachments(e.target.files[0])}
                />
              </div>



            <div className="col-span-2 grid">
              <div className="w-full">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Description
                </label>
                <textarea
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  // type="text"
                  placeholder="Enter the Description"
                  id="email"
                  // value={description}
                onChange={(e) =>setDescription(e.target.value)}
                ></textarea>

              {/* <input
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Enter the Description"
                  id="email"
                  // value={description}
                onChange={(e) =>setDescription(e.target.value)}
                ></input> */}


              </div>
            </div>




            <div className="col-span-2 grid">
              <div className="w-full">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Venue
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Enter the venue of the drive"
                  id="email"
                  // value={venue}
                onChange={(e) =>setVenue(e.target.value)}
                ></input>
              </div>
            </div>


            <div className="col-span-2 grid">
              <div className="w-full">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Package
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Enter the Packages"
                  id="email"
                  // value={packageValue}
                onChange={(e) =>setPackageValue(e.target.value)}
                ></input>
              </div>           
            </div>


            <div className="col-span-2 grid">
              <div className="w-full">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Cut Off
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Enter the cut Off in percentage"
                  id="email"
                  // value={packageValue}
                onChange={(e) =>setCutOff(e.target.value)}
                ></input>
              </div>           
            </div>




            <div className="flex-col">
            <div className="w-full">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  First Date To Register
                </label>
              </div>
              <input type="date" name="lastDateToRegister" id="" 
              // value={firstDateToRegister}
              onChange={(e) =>setFirstDateToRegister(e.target.value)}
              />
              </div>
              

              <div className="flex-col">
            <div className="w-full">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Last Date To Register
                </label>
              </div>
              <input type="date" name="lastDateToRegister" id="" 
              // value={lastDateToRegister}
                onChange={(e) =>setLastDateToRegister(e.target.value)}/>
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
  )
}

export default CreateDrive





