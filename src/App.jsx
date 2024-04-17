import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { LandinngPageOne } from './pages/LandinngPageOne.jsx'
// import { ExampleNavbarOne } from './components/ExampleNavbarOne.jsx'
// import { FooterThree } from './components/FooterThree.jsx'
import LandingpageRoute from './routes/LandingPage.route.jsx'
// import Home from './pages/home/Home.jsx'
// import About from './pages/About/About.jsx'
// import Contact from './pages/Contact/Contact.jsx'
// import Login from './pages/Login/Login.jsx'
import { Route, Routes } from 'react-router-dom'
import StudentRoute from './routes/Student.route.jsx'
// import { AuthProvider, useAccessToken } from './middleware/AuthProvider.jsx'
import AdminRoute from './routes/Admin.route.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'
import { AuthProvider, useAccessToken } from './middleware/AuthProvider.jsx'

// const {AccessToken} = useAccessToken();

function App() {
  

  return (
      <>
      <AuthProvider>
        <LandingpageRoute />
        <StudentRoute />
        <AdminRoute />
        </AuthProvider>
        </>
  )
}

export default App
