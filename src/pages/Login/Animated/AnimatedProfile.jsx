import React, { useState } from "react";
import * as Components from './Components.jsx';
import { useUpdateAccessToken } from "../../../middleware/AuthProvider.jsx";
import { useNavigate } from "react-router-dom";

function AnimatedProfile() {
    const [signIn, toggle] = React.useState(true);

    const [Email , SetEmail] = useState("yes@gmail.com");
    const [Password, SetPassword] = useState("");
    const [isValid , SetIsValid] = useState(false);
    const navigate = useNavigate();
    const UpdateUserData = useUpdateAccessToken();


    const handleEmailChange = (e) => {
        SetEmail(e.target.value);
      };
      const handlePasswordChange = (e) => {
        SetPassword(e.target.value);
      };

    
      const updateData = async(token , data) =>{
        // console.log(data);
        await UpdateUserData(token , data);
    
        await setData(data);
      }
    
      const handleLogin = () => {
        console.log(Email)
        axios.post("https://placement-management-system-mroj.onrender.com/api/v1/user/login", { "email": Email, "password": Password } )
          .then(async(res) => {
            console.log(res);
            res.status===200 && res.data.data.user.role==="admin" && navigate("/admin") && SetIsValid(true)
            res.status===200 && res.data.data.user.role==="student" && navigate("/u1") && SetIsValid(true)
            res.status===200 && res.data.data.user.role==="facality" && navigate("/facality") && SetIsValid(true)
            res.status!=200 && SetIsValid(false) && navigate('/')
            // console.log(res);
    
            navigate("/u1")
            // await setUser(res.data.data.user)
            // console.log("user" , user);
            // console.log("user" , res.data.data.user);
            await updateData(res.data.data.accessToken ,res.data.data.user);
          })
          .catch((error) => {
            console.error('Error logging in:', error);
          });
      };



     return(
         <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form>
                     <Components.Title>Hey Admin !</Components.Title>
                     {/* <Components.Input type='text' placeholder='Name' /> */}
                     <Components.Input type='email' placeholder='Email' />
                     <Components.Input type='password' placeholder='Password' />
                     <Components.Button onClick={handleLogin}>Sign In</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Hey Student !</Components.Title>
                      <Components.Input type='email' placeholder='Email' onChange={(e)=>{SetEmail(e.target.value)}} />
                      <Components.Input type='password' placeholder='Password' onChange={(e)=>{SetPassword(e.target.value)}}/>
                      <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                      <Components.Button onClick={handleLogin}>Sigin In</Components.Button>
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>Student!</Components.Title>
                     <Components.Paragraph>
                         Enter your credentials here!
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Sign In
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>Admin !</Components.Title>
                       <Components.Paragraph>
                           Enter Your credentials here!
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                               sign in
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
     )
}

export default AnimatedProfile;