import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { CardTwo } from '../Resources/CardTwo';
// import StudentDashboard from '../../Components/StudentDashboard';
// import Overlay from './Card/Overlay';
import Card from './Card/Card';
// import { header } from "../../../pages/Login/Login.jsx";
import { useAccessToken ,useUpdateAccessToken , useUserData } from '../../../middleware/AuthProvider.jsx';
import { useNavigate ,Link } from 'react-router-dom';
import EditDrive from './EditDrive.jsx';
import Modal from './Card/Modal.jsx';
import Overlay from './Card/Overlay.jsx';
import { AnimatePresence } from 'framer-motion';
import AdminDashboard from '../../components/AdminDashboard.jsx';
import DownloadExcel from './DownloadExcel.jsx';
// import { Link } from 'lucide-react';
// import NavbarComponent from '../../Components/NavbarComponent.jsx';

const Drives = () => {
  const [Data, setData] = useState([]);
  const [Open, setOpen] = useState(false);
  // const [accesstoken, setAccessToken] = useState("");
  const AccessToken = useAccessToken();
  const  User = useUserData();
  const navigate = useNavigate();




  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://placement-management-system-mroj.onrender.com/api/v1/drives" ,{headers: {
          'Authorization': `Bearer ${AccessToken}`}
        });
        setData(response.data.data.drive);
        // setAccessToken(AccessToken);
        console.log("data inside :")
        console.log(AccessToken);
        console.log("data : " , User);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const handleCreateDrive = () =>{
    
    navigate("/u2/createDrive");
  }

  return (


    <AdminDashboard>
  <div className='drives'>




      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Drives</h2>
            <p className="mt-1 text-sm text-gray-700">
              {/* This is a list of all employees. You can add new employees, edit or delete existing
              ones. */}
            </p>
          </div>
          <div>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={handleCreateDrive}
            >
              Create Drive
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>Employee</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Title
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Status
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Role
                      </th>
                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {Data.map((data) => (
                      <tr key={data._id}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={data.coverImage}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{data.companyName}</div>
                              {/* <div className="text-sm text-gray-700">{data.companyName}</div> */}
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{data.companyName}</div>
                          {/* <div className="text-sm text-gray-700">{data.companyName}</div> */}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            Active
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {data.companyName}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                          <Link 
                          to={"/u2/drives/download"}
                          state = {{ data: data._id , name:data.companyName }}
                          className="text-gray-700">
                            click here
                          </Link>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                          <Link 
                          to={"/u2/drives/update"}
                          state = {{ data: data._id }}
                          
                          className="text-gray-700">
                            Edit
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      {/* <EditDrive close={closeModal} /> */}
      



      </div>
      {/* <DownloadExcel /> */}
      </AdminDashboard>
  );
};

export default Drives;


// {open && <Overlay close={closeModel}>{/*Modal should go here*/}</Overlay>}











// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { CardTwo } from './CardTwo';
// import StudentDashboard from '../../Components/StudentDashboard';

// const Drives = () => {
//   const [Data ,setData] = useState([{}]);
//   const [open ,setOpen] = useState(false);

//   useEffect(aync() => {
//     await axios.get("http://localhost:8000/api/v1/drives")
//         .then((res) => {
//           return res;
//         })
//         .then((res) => {
//           // console.log(res);
//           // setData(res.data.data.drive);
//           return res.data.data.drive;
//         })
//         .then((res) => {
//           console.log("res :" ,res);
//           await setData(res);
//           console.log("Data  :" ,Data);
//         })
//         .catch((error) => {
//           console.error('Error logging in:', error);
//         });
//   } ,[]);
  
    
//   return (

//     <StudentDashboard>
//     <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
//       {Data.map((drive) => (
//         <CardTwo key={drive._id} drive={drive} />
//         // <div className="new">drive</div>
//       ))}
//     </div>
//     </StudentDashboard>
//     // logic for rendering overlay
//   )
// }



// export default Drives
