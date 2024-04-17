import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CiBellOn } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { GoSignOut } from "react-icons/go";
import { PiSignOutBold } from "react-icons/pi";
import { FaRegBell } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useUpdateAccessToken } from '../../middleware/AuthProvider.jsx';


const NavbarComponent = () => {
  const UpdateUserData = useUpdateAccessToken();
  const navigate = useNavigate();
  const updateData = () => {
    UpdateUserData(" " , {});
  };
  const handleLogin = async() =>{
    updateData();
    navigate("/");
  };
  return (
    <div className='flex h-[3rem] text-white bg-[#00073d] place-items-center p-[1rem]'>
        
          <div className=''></div>
          <div className=" flex gap-5 ms-auto me-[1rem]">
            <div onClick={() =>{
              navigate("/u2/profile");
            }}><CgProfile /></div>
            <div onClick={() =>{
              navigate("/u2/alerts");
            }}><FaRegBell  /></div>
            <div onClick={() =>{navigate("/")}}><PiSignOutBold /></div>
          </div>
      </div>
  )
}

export default NavbarComponent
