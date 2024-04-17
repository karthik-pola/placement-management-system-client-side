import React from 'react'

export function CardTwo() {
  
  return (
    <div 
         
        className="rounded-md border">
          <img
            src="www.google.com"
            alt="company name"
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[250px] lg:h-[200px]"
          />
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">comapny name</h1>
            <p className="mt-3 text-sm text-gray-600">
              description
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
                  last date to register
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



  )
}


    // <div className="w-[300px] rounded-md border">
    //   <img
    //     src={drive.drive.coverImage}
    //     className="h-[200px] w-full rounded-md object-cover"
    //   />
    //   <div className="p-4">
    //     <h1 className="text-lg font-semibold">{drive.drive.companyName}</h1>
    //     <p className="mt-3 text-sm text-gray-600">
    //       {drive.drive.description}
    //     </p>
    //     <button
    //       type="button"
    //       className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    //     >
    //       view more
    //       {console.log(drive.drive)}
    //     </button>
    //   </div>
    // </div>


    // <div
    //       key={drive.drive._id}
    //       className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]"
    //     >
    //       <img
            // src={drive.drive.coverImage}
            // alt={drive.drive.companyName}
    //         className="z-0 h-full w-full rounded-md object-cover"
    //       />
    //       <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
    //       <div className="absolute bottom-4 left-4 text-left">
    //         <h1 className="text-lg font-semibold text-white">{drive.drive.companyName}</h1>
    //         <p className="mt-2 text-sm text-gray-300">
    //           {drive.drive.description}
    //         </p>
    //         <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
    //           View More&rarr;
    //         </button>
    //       </div>
    //     </div>

