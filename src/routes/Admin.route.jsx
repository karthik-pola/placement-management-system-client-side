import { Route ,Routes } from "react-router-dom"



import React from 'react'
import Home from "../Admin/pages/Dashboard/Home.jsx"
// import Alerts from "../Student/Pages/Alerts/Alerts.jsx"
import Drives from "../Admin/pages/Drives/Drives.jsx"
import CreateDrive from "../Admin/pages/Drives/CreateDrive.jsx"
import EditDrive from "../Admin/pages/Drives/EditDrive.jsx"
import Resources from "../Admin/pages/Resources/Resources.jsx"
import CreateResource from "../Admin/pages/Resources/CreateResource.jsx"
import StudentData from "../Admin/pages/student/StudentData.jsx"
// import Help from "../Student/Pages/Help/Help.jsx"
// import Profile from "../Student/Pages/Profile/Profile.jsx"
// import Quizzes from "../Student/Pages/Quizzes/Quizzes.jsx"
// import Resources from "../Student/Pages/Resources/Resources.jsx"
// import LandingPageHome from "../pages/home/landingPageHome.jsx"
// import StudentDashboard from "../Student/Components/StudentDashboard.jsx"
// import { useAccessToken } from "../middleware/AuthProvider.jsx"
import CreateStudent from "../Admin/pages/student/CreateStudent.jsx"
import Alerts from "../Admin/pages/Alerts/Alerts.jsx"
import CreateStudentFromExcel from "../Admin/pages/student/CreateStudentFromExcel.jsx"
import Profile from "../Admin/pages/Profile/Profile.jsx"
import Help from "../Admin/pages/Help/Help.jsx"
import { useAccessToken } from "../middleware/AuthProvider.jsx"
import AddPlacedData from "../Admin/pages/Dashboard/AddPlacedData.jsx"
import DownloadDrivesData from "../Admin/pages/Drives/DownloadDrivesData.jsx"
import UpdatePersonalDetails from "../Admin/pages/Profile/UpdatePersonalDetails.jsx"
import AdminDetails from "../Admin/pages/admin/AdminDetails.jsx"
import CreateAdmin from "../Admin/pages/admin/CreateAdmin.jsx"




const AdminRoute = () => {
  const AccessToken = useAccessToken();
  return (
      <Routes>
          <Route path="/u2" element={<Home  />}></Route>
          <Route path="/u2/createDrive" element={<CreateDrive  />}></Route>
          <Route path="/u2/drives" element={<Drives />}></Route>
          <Route path="/u2/createResource" element={<CreateResource />}></Route>
          <Route path="/u2/drives/update" element={<EditDrive />}></Route>
          <Route path="/u2/alerts" element={<Alerts />}></Route>
          <Route path="/u2/resources" element={<Resources />}></Route>  
          <Route path="/u2/student" element={<StudentData />}></Route>
          <Route path="/u2/createStudent" element={<CreateStudent />}></Route>
          <Route path="/u2/createStudentFromExcel" element={<CreateStudentFromExcel/>}></Route>
          <Route path="/u2/profile" element={<Profile />}></Route>
          <Route path="/u2/help" element={<Help />}></Route>
          <Route path="/u2/addPlacedData" element={<AddPlacedData />}></Route>
          <Route path="/u2/drives/download" element={<DownloadDrivesData />}></Route>

          <Route path="/u2/createAdmin" element={<CreateAdmin />}></Route>

          
          <Route path="/u2/updatePersonalDetails" element={<UpdatePersonalDetails />}></Route>

          <Route path="/u2/admins" element={<AdminDetails />}></Route>
      </Routes>
  )
}

export default AdminRoute

