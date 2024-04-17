import React, { useState } from 'react'
import { Home, ChevronRight, ShoppingCart } from 'lucide-react'
import axios from 'axios';
import { useAccessToken } from '../../../middleware/AuthProvider';
import { useNavigate } from 'react-router-dom';


const UpdateEducationalDetails = () => {

    const [oneOne , setOneOne] = useState();
    const [oneTwo , setOneTwo] = useState();
    const [twoTwo , setTwoTwo] = useState();
    const [twoOne , setTwoOne] = useState();
    const [threeOne , setThreeOne] = useState();
    const [threeTwo , setThreeTwo] = useState();
    const [fourOne , setFourOne] = useState();
    const [fourTwo , setFourTwo] = useState();
    const AccessToken = useAccessToken();
    const navigate = useNavigate();

    const handleSubmit = async() =>{
        console.log("yesss")


        const formData = new FormData();
        formData.append('oneOne', oneOne);
        formData.append('oneTwo', oneTwo);
        formData.append('twoTwo', twoTwo);
        formData.append('twoOne', twoOne);
        formData.append('threeOne', threeOne);
        formData.append('threeTwo', threeTwo);
        formData.append('fourOne', fourOne);
        formData.append('fourTwo', fourTwo);



        
        const response = await axios.post("https://placement-management-system-mroj.onrender.com/api/v1/user/update/educationalDetails" , {
            "oneOne": oneOne,
            "oneTwo":oneTwo,
            "twoTwo":twoTwo,
            "twoOne":twoOne,
            "threeOne":threeOne,
            "threeTwo":threeTwo,
            "fourOne":fourOne,
            "fourTwo":fourTwo
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
          <p className="text-sm font-bold text-gray-900">Educational Details</p>
          <div className="mt-6 gap-6 space-y-4 md:grid md:grid-cols-2 md:space-y-0">
            

            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="OneOne"
              >
                1-1
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter your CGPA"
                id="OneOne"
                onChange={(e)=>{setOneOne(e.target.value)}}
              ></input>
            </div>

            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="OneTwo"
              >
                1-2
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter your CGPA"
                id="OneTwo"
                onChange={(e)=>{setOneTwo(e.target.value)}}
              ></input>
            </div>
            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="TwoOne"
                
              >
                2-1
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter your CGPA"
                id="TwoOne"
                onChange={(e)=>{setTwoOne(e.target.value)}}
              ></input>
            </div>

            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="TwoTwo"
              >
                2-2
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter your CGPA"
                id="TwoTwo"
                onChange={(e)=>{setTwoTwo(e.target.value)}}
              ></input>
            </div>



            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="ThreeOne"
              >
                3-1
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter your CGPA"
                id="ThreeOne"
                onChange={(e)=>{setThreeOne(e.target.value)}}
              ></input>
            </div>


            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="ThreeTwo"
              >
                3-2
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter your CGPA"
                id="ThreeTwo"
                onChange={(e)=>{setThreeTwo(e.target.value)}}
              ></input>
            </div>

            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="FourOne"
              >
                4-1
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter your CGPA"
                id="FourOne"
                onChange={(e)=>{setFourOne(e.target.value)}}
              ></input>
            </div>



            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="FourTwo"
              >
                4-2
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter your CGPA"
                id="FourTwo"
                onChange={(e)=>{setFourTwo(e.target.value)}}
              ></input>
            </div>
            {/* <div className="col-span-2 grid">
              <div className="w-full">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Enter your email"
                  id="email"
                ></input>
              </div>
            </div> */}

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

export default UpdateEducationalDetails
