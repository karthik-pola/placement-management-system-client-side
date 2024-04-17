
// import {AnimatePresence, motion} from "framer-motion";
// import { NavLink } from "react-router-dom";
// import { useState } from "react";


// //icons
// import {FaBars, FaHome} from 'react-icons/fa';
import { MdLabelImportant, MdOutlineNotificationsActive } from "react-icons/md";
import { GrResources } from "react-icons/gr";
import { PiExamFill } from "react-icons/pi";
import { MdOutlineContactSupport } from "react-icons/md";
// import '../styles/dashboard.css';



// const routes = [
//   {
//     path:"/",
//     name:"Home",
//     icon: <FaHome />
//   },
//   {
//     path:"/Drives",
//     name:"Drives",
//     icon: <MdLabelImportant />
//   },
//   {
//     path:"/Resources",
//     name:"Resources",
//     icon: <GrResources />
//   },
//   {
//     path:"/Quizzes",
//     name:"Quizzes",
//     icon: <PiExamFill />
//   },
//   {
//     path:"/Support and help",
//     name:"Support and help",
//     icon: <MdOutlineContactSupport />
//   },
// ]

// const StudentDashboard = ({children}) => {
//   return (
//     <div className="main-container flex">
//       <motion.div animate={{width:"200px"}}className='sidebar'>
//           <section className="routes">
//           {routes.map(route =>(
//             <NavLink to={route.path} key = {route.name} className="link">
//               <div className="icon"> {route.icon} </div>
//               <AnimatePresence>
//                 {isOpen && <motion.div variants={showAnimation} initial="hidden" animate="show" exit="hidden" className="link_text">{route.name}</motion.div>}
//               </AnimatePresence>
//             </NavLink>
//           ))}
//           </section>
//       </motion.div>
//       <main>{children}</main>
//     </div>
//   )
// }



import { NavLink } from "react-router-dom";
import { FaBars, FaHome } from "react-icons/fa";
import {  BiSearch } from "react-icons/bi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import '../styles/dashboard.css';
import NavbarComponent from "./NavbarComponent";


const routes = [
  {
    path:"/u1/",
    name:"Home",
    icon: <FaHome />
  },
  {
    path:"/u1/Drives",
    name:"Drives",
    icon: <MdLabelImportant />
  },
  {
    path:"/u1/Resources",
    name:"Resources",
    icon: <GrResources />
  },
  // {
  //   path:"/u1/Quizzes",
  //   name:"Quizzes",
  //   icon: <PiExamFill />
  // },
  {
    path:"/u1/help",
    name:"Support and help",
    icon: <MdOutlineContactSupport />
  },
]

const StudentDashboard = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  // const inputAnimation = {
  //   hidden: {
  //     width: 0,
  //     padding: 0,
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  //   show: {
  //     width: "140px",
  //     padding: "5px 15px",
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  // };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  CampusConnect
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          {/* <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div> */}
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>
        <div className="flex-column w-full overflow-y-scroll">
        <NavbarComponent />
          <main className="content-div">{children}</main>
        </div>
        
      </div>
    </>
  );
};

export default StudentDashboard
