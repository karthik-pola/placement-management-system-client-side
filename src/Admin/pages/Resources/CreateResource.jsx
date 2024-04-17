import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminDashboard from '../../components/AdminDashboard';

const CreateResource = () => {

    
  const [ResourceName, setResourceName] = useState('');
  const [description, setDescription] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [attachments, setAttachments] = useState(null);


//   const [eligibility, setEligibility] = useState('');
//   const [venue, setVenue] = useState('');
//   const [packageValue, setPackageValue] = useState('');
//   const [firstDateToRegister, setFirstDateToRegister] = useState('');
//   const [lastDateToRegister, setLastDateToRegister] = useState('');

  const [data , setData] = useState('');
  const navigate = useNavigate();

    
        const handleSubmit = async() => {


            console.log("Company Name:", ResourceName);
            console.log("Company Image:", coverImage);
            console.log("Attachments:", attachments);
            console.log("Description:", description);
          
            const formData = new FormData();
            formData.append('ResourceName', ResourceName);
            formData.append('coverImage', coverImage);
            formData.append('attachments', attachments);
            formData.append('description', description);
            
          
            console.log("FormData:", formData);



          const response = await axios.post("https://placement-management-system-mroj.onrender.com/api/v1/resources/create" , formData)
          .then((res) => {
            return res.data.data.resources;
          })
          .then((res) => {
            setData(res);
            console.log("data:",data);
          });


          navigate("/u2/resources");
        };





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
                Resource Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter Resource name "
                id="firstName"
                onChange={(e)=>setResourceName(e.target.value)}
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
                onChange={(e)=>setCoverImage(e.target.files[0])}/>
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
                <input
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Enter the Description"
                  id="email"
                  // value={description}
                onChange={(e) =>setDescription(e.target.value)}
                ></input>
              </div>
            </div>




            {/* <div className="col-span-2 grid">
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
 */}


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

export default CreateResource
