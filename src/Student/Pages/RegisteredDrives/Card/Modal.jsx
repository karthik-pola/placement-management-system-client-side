import React, { useEffect, useState } from "react";
import "./Modal.css";
import Feature from "./Feature";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAccessToken } from "../../../../middleware/AuthProvider";

const Modal = ({ data, close }) => {
  const AccessToken = useAccessToken();
  const [isApplied, setIsApplied] = useState(false);

  const handleApplyNow = async () => {
    console.log(AccessToken);
    const response = await axios.post("http://localhost:8000/api/v1/drives/register", {
      "drive_id": data._id
    }, {
      headers: {
        'Authorization': `Bearer ${AccessToken}`
      }
    });
    console.log(response);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://localhost:8000/api/v1/drives/registeredDrives", {}, {
          headers: {
            'Authorization': `Bearer ${AccessToken}`
          }
        });
        
        const registeredDrives = response.data;
        console.log("Registered Drives:", registeredDrives);
  
        const isCurrentDriveRegistered = registeredDrives.some(drive => {
          return drive[0]._id === data._id; // Assuming data._id is the current drive ID
        });
        console.log("Is Current Drive Registered:", isCurrentDriveRegistered);
  
        setIsApplied(isCurrentDriveRegistered);
      } catch (error) {
        console.error("Error fetching registered drives:", error);
      }
    };
  
    fetchData();
  }, []);
  

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
          <span className="my-4 text-3xl font-semibold text-black">{data.companyName}</span>
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
          <p className="leading-relaxed font-semibold">Last Date To Register: {data.lastDateToRegister}</p>
        </motion.div>
        <motion.button className="apply-btn" whileHover={{ scale: 1.2 }} onClick={handleApplyNow}
        disabled={isApplied}
        > Apply Now</motion.button>
        <motion.button className="modal__close-wrapper" whileHover={{ scale: 1.2 }} onClick={close}>
          <IoCloseCircleOutline className="modal__close-icon" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
