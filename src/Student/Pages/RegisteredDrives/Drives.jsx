import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { CardTwo } from '../Resources/CardTwo';
import StudentDashboard from '../../Components/StudentDashboard';
import Overlay from './Card/Overlay';
import Card from './Card/Card';
// import { header } from "../../../pages/Login/Login.jsx";
import { useAccessToken ,useUpdateAccessToken , useUserData } from '../../../middleware/AuthProvider.jsx';
import NavbarComponent from '../../Components/NavbarComponent.jsx';

const Drives = () => {
  const [Data, setData] = useState([]);
  const [Open, setOpen] = useState(false);
  // const [accesstoken, setAccessToken] = useState("");
  const AccessToken = useAccessToken();
  const  User = useUserData();



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://placement-management-system-mroj.onrender.com/api/v1/drives");
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

  const openModel = () =>{
    setOpen(true);
  }

  const closeModel = () =>{
    setOpen(false);
  }

  return (<>

    <StudentDashboard>
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {Data.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
      </StudentDashboard>
      </>
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
