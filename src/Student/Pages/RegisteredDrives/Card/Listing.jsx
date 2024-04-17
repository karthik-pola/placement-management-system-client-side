import React from "react";
import Feature from "./Feature";
import "./Listing.css";
import { motion } from "framer-motion";

const Listing = ({ data, open }) => {
  // const { imageUrl, price, address, numBedroom, numWashrooms, livingSpace } =
  //   data;

  return (
    <motion.div className="listings" onClick={open} whileHover={{ scale: 1.1 }}>
      <div 
        key={data._id} 
        className="rounded-md border">
          {console.log("data inside card2 :" ,data)}
          <img
            src={data.coverImage}
            alt={data.companyName}
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[250px] lg:h-[200px]"
          />
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">{data.companyName}</h1>
            <p className="mt-3 text-sm text-gray-600">
              {data.description}
            </p>
            {/* <div className="mt-4">
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Sneakers
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Nike
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Airmax
              </span>
            </div> */}
              {/* <div className="mt-3 flex items-center space-x-2">
                <span className="block text-sm font-semibold">Colors : </span>
                <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-red-400"></span>
                <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-purple-400"></span>
                <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-orange-400"></span>
              </div> */}
              <div className="mt-5 flex items-center space-x-2">
                <span className="block text-sm font-semibold">Last Date To Register : </span>
                <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                  {data.lastDateToRegister}
                </span>
                {/* <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                  9 UK
                </span>
                <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                  10 UK
                </span> */}
              </div>
            <button
              type="button"
              className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              View More 
              
            </button>
          </div>
        </div>
      
    </motion.div>
  );
};

export default Listing;



{/* <div className="listing__content">
        <div className="listing__image-container">
          {console.log(data)}
          <img
            className="listing__image"
            alt="real estate mansion"
            src={data.coverImage}
          />
        </div>
        <div className="listing__details">
          <div className="listing__type">Active</div>
          <div className="listing__row">
            <span className="listing__price">{data.companyName}</span>
          </div>
          <div className="listing__row">
            <span className="listing__address">{data.description}</span>
          </div>
          <div className="listing__row">
            {/* <Feature iconName={"FaBed"} iconLabel={numBedroom} />
            <Feature iconName={"FaShower"} iconLabel={numWashrooms} />
            <Feature iconName={"FaRuler"} iconLabel={livingSpace} /> */}
        //     <div>Last Date To Register : {data.lastDateToRegister}</div>
        //   </div>
        // </div>
      // </div> */}