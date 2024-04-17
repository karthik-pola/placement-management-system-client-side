import React, { useContext, useEffect } from 'react'
import { SignInTwo } from './SignInTwo'
import AnimatedProfile from './Animated/AnimatedProfile.jsx'
import { SignInThree } from './SignInThree.jsx'

// import AuthContext from '../../middleware/authContext.js';




  

const Login = () => {
  // const {AccessToken} = useContext(AuthContext);
  // console.log(AccessToken);
  
  return (
    <div>
      {/* <SignInTwo /> */}
      {/* <AnimatedProfile /> */}
      <SignInThree />
    </div>
  )
}

export default Login