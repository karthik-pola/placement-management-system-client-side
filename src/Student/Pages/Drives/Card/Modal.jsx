import React, { useEffect, useState } from "react";
import "./Modal.css";
import Feature from "./Feature";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAccessToken } from "../../../../middleware/AuthProvider";
// import { Toaster, toast } from 'sonner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Modal = ({ data, close }) => {
  const AccessToken = useAccessToken();
  const [isApplied, setIsApplied] = useState(false);
  const [registeredDrives, setRegisteredDrives] = useState([]);

  const handleApplyNow = async () => {
    console.log(AccessToken);
    try {
      const response = await axios.post(
        "https://placement-management-system-mroj.onrender.com/api/v1/drives/register",
        {
          drive_id: data._id,
        },
        {
          headers: {
            Authorization: `Bearer ${AccessToken}`,
          },
        }
      );
      console.log(response);
      // Update isApplied state to true after successfully applying for the drive
      setIsApplied(true);
      // Display toast for successful drive application
      toast.success("Drive application successful!", { autoClose: false });
    } catch (error) {
      console.error("Error applying for drive:", error);
      // Handle error here, such as displaying an error message to the user
      // Optionally, you can also update the state to reflect the error state
    }
  };
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post(
          "https://placement-management-system-mroj.onrender.com/api/v1/drives/registeredDrives",
          {},
          {
            headers: {
              Authorization: `Bearer ${AccessToken}`,
            },
          }
        );
  
        const registeredDrives = res.data;
        console.log("Registered Drives:", registeredDrives);
  
        const isCurrentDriveRegistered = registeredDrives.some((drive) => {
          return drive.company === data._id; // Compare drive.company with data._id
        });
  
        console.log("Is Current Drive Registered:", isCurrentDriveRegistered);
  
        setIsApplied(isCurrentDriveRegistered);
      } catch (error) {
        console.error("Error fetching registered drives:", error);
        // Handle the error gracefully, you might want to show a message to the user or retry fetching data
        setIsApplied(false); // Set isApplied to false to ensure Apply Now button is visible
        // Optionally, you can also set a state to indicate that an error occurred while fetching registered drives
      }
    };
  
    fetchData();
  }, [data._id, AccessToken , handleApplyNow ,]); // Include data._id and AccessToken in the dependency array to re-run the effect when they change
  
  const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: { opacity: 0 },
  };

  const imageVariants = {
    open: { opacity: 1, y: "0vh" },
    closed: { opacity: 0, y: "-10vh" },
  };

  const modalInfoVariants = {
    open: { opacity: 1, transition: { staggerChildren: 0.2 } },
    closed: { opacity: 0 },
  };

  const modalRowVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "10%" },
  };

  return (
    <>
      <ToastContainer />
      <motion.div
        className="modal"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.img
          className="modal__image"
          alt={data.companyName}
          src={data.coverImage}
          variants={imageVariants}
        ></motion.img>
        <motion.div className="modal__info" variants={modalInfoVariants}>
          <motion.div className="modal__row" variants={modalRowVariants}>
            <span className="my-4 text-3xl font-semibold text-black">
              {data.companyName}
            </span>
          </motion.div>
          <motion.div className="modal__ro" variants={modalRowVariants}>
            <p className="leading-relaxed">{data.description}</p>
          </motion.div>
          <motion.div className="modal__ro" variants={modalRowVariants}>
            {/* <Feature iconName={"FaBed"} iconLabel={numBedroom} />
            <Feature iconName={"FaShower"} iconLabel={numWashrooms} />
            <Feature iconName={"FaRuler"} iconLabel={livingSpace} /> */}
          </motion.div>
          <motion.div
            className="modal__description-wrapper"
            variants={modalRowVariants}
          >
            <p className="leading-relaxed font-semibold">
              Last Date To Register: {data.lastDateToRegister}
            </p>
          </motion.div>
          {!isApplied ? (
            <motion.button
              className="apply-btn"
              whileHover={{ scale: 1.2 }}
              onClick={handleApplyNow}
            >
              Apply Now
            </motion.button>
          ) : (
            <motion.button
              className="apply-btn"
              disabled
              style={{ opacity: 0.5, cursor: "not-allowed" }}
            >
              Already Applied
            </motion.button>
          )}
          <motion.button
            className="modal__close-wrapper text-green-500"
            whileHover={{ scale: 1.2 }}
            onClick={close}
          >
            <IoCloseCircleOutline className="modal__close-icon" />
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
  
};

export default Modal;




// import React, { useEffect, useState } from "react";
// import "./Modal.css";
// import Feature from "./Feature";
// import { IoCloseCircleOutline } from "react-icons/io5";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useAccessToken } from "../../../../middleware/AuthProvider";

// const Modal = ({ data, close }) => {
//   const AccessToken = useAccessToken();
//   const [isApplied, setIsApplied] = useState(false);
//   const [registeredDrives, setRegisteredDrives] = useState([]);

//   const handleApplyNow = async () => {
//     console.log(AccessToken);
//     const response = await axios.post("http://localhost:8000/api/v1/drives/register", {
//       "drive_id": data._id
//     }, {
//       headers: {
//         'Authorization': `Bearer ${AccessToken}`
//       }
//     });
//     console.log(response);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.post("http://localhost:8000/api/v1/drives/registeredDrives", {}, {
//           headers: {
//             'Authorization': `Bearer ${AccessToken}`
//           }
//         });


//         console.log("asvcv dshgcvf" , res.data);
//         setRegisteredDrives(res.data);
// ;
        
//         // const registeredDrives = response.data;
//         // console.log("Registered Drives:", registeredDrives);
  
//         // const isCurrentDriveRegistered = registeredDrives.some(drive => {
//         //   console.log("current drive" , drive);
//         //   return drive[0]._id === data._id; // Assuming data._id is the current drive ID
//         // });

        
//         // console.log("Is Current Drive Registered:", isCurrentDriveRegistered);
  
//         // setIsApplied(isCurrentDriveRegistered);
//       } catch (error) {
//         console.error("Error fetching registered drives:", error);
//       }
//     };
  
//     fetchData();
//   }, []);
  

//   const modalVariants = {
//     open: {
//       opacity: 1,
//       transition: { staggerChildren: 0.5, delayChildren: 0.2 },
//     },
//     closed: { opacity: 0 },
//   };

//   const imageVariants = {
//     open: { opacity: 1, y: "0vh" },
//     closed: { opacity: 0, y: "-10vh" },
//   };

//   const modalInfoVariants = {
//     open: { opacity: 1, transition: { staggerChildren: 0.2 } },
//     closed: { opacity: 0 },
//   };

//   const modalRowVariants = {
//     open: { opacity: 1, x: 0 },
//     closed: { opacity: 0, x: "10%" },
//   };

//   const AppliedDrive = registeredDrives.map((drive)=>{
//     console.log(data._id === drive.company);
//     if(data._id === drive.company){
//       setIsApplied(false)
//     }
//   }) 

//   return (
//     <motion.div
//       className="modal"
//       variants={modalVariants}
//       onClick={(e) => e.stopPropagation()}
//     >
//       <motion.img
//         className="modal__image"
//         alt={data.companyName}
//         src={data.coverImage}
//         variants={imageVariants}
//       ></motion.img>
//       <motion.div className="modal__info" variants={modalInfoVariants}>
//         <motion.div className="modal__row" variants={modalRowVariants}>
//           <span className="my-4 text-3xl font-semibold text-black">{data.companyName}</span>
//         </motion.div>
//         <motion.div className="modal__ro" variants={modalRowVariants}>
//           <p className="leading-relaxed">{data.description}</p>
//         </motion.div>
//         <motion.div className="modal__ro" variants={modalRowVariants}>
//           {/* <Feature iconName={"FaBed"} iconLabel={numBedroom} />
//           <Feature iconName={"FaShower"} iconLabel={numWashrooms} />
//           <Feature iconName={"FaRuler"} iconLabel={livingSpace} /> */}
//         </motion.div>
//         <motion.div
//           className="modal__description-wrapper"
//           variants={modalRowVariants}
//         >
//           <p className="leading-relaxed font-semibold">Last Date To Register: {data.lastDateToRegister}</p>
//         </motion.div>
//         {isApplied && (
//           <motion.button className="apply-btn" whileHover={{ scale: 1.2 }} onClick={handleApplyNow}>
//             Apply Now
//           </motion.button>
//         )}
//         <motion.button className="modal__close-wrapper" whileHover={{ scale: 1.2 }} onClick={close}>
//           <IoCloseCircleOutline className="modal__close-icon" />
//         </motion.button>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Modal;
