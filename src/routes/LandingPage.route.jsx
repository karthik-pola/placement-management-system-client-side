import { Route ,Routes } from "react-router-dom"
import Home from "../pages/home/Home.jsx"
import About from "../pages/About/About.jsx"
import Login from "../pages/Login/Login.jsx"
import Contact from "../pages/Contact/Contact.jsx"
import StudentComponent from "../pages/socket/StudentComponent.jsx"


const LandingpageRoute = () => {
  return (
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* <Route path="/socket" element={<StudentComponent />}></Route> */}
    </Routes>
  )
}

export default LandingpageRoute
