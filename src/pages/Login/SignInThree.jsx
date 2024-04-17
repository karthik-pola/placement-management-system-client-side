import React, { useContext, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUpdateAccessToken } from '../../middleware/AuthProvider.jsx';

export function SignInThree() {

    const [Email , SetEmail] = useState("");
    const [Password, SetPassword] = useState("");
    const [AdminEmail, SetAdminEmail] = useState("");
    const [AdminPassword, SetAdminPassword] = useState("");
    // const [isValid , SetIsValid] = useState(false);
    const navigate = useNavigate();
    const UpdateUserData = useUpdateAccessToken();
  
    // const setData = useUpdateAccessToken();
     
    //handling acces token
  
    // const {setUser , user} = useContext(UserContext);
  
  
  
    const handleEmailChange = (e) => {
      SetEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
      SetPassword(e.target.value);
    };
  
    const updateData = async(token , data) =>{
      // console.log("data inside login");
      // console.log(data.json());
      await UpdateUserData(token , data);
  
      await setData(data);
    }
  
    const handleLogin = () => {
      axios.post("https://placement-management-system-mroj.onrender.com/api/v1/user/login", { "email": Email, "password": Password } )
        .then(async(res) => {
          console.log(res);
          res.status===200 && res.data.data.user.role==="admin" && navigate("/admin")
          res.status===200 && res.data.data.user.role==="student" && navigate("/u1") 
          res.status===200 && res.data.data.user.role==="facality" && navigate("/facality")
          res.status!=200  && navigate('/')
          // console.log(res);
  
          navigate("/u1")
          // await setUser(res.data.data.user)
          // console.log("user" , user);
          console.log("user" , res.data.data.user);
          await updateData(res.data.data.accessToken ,res.data.data.user);
        })
        .catch((error) => {
          console.error('Error logging in:', error);
        });
    };


    const handleAdminLogin = () => {
        axios.post("https://placement-management-system-mroj.onrender.com/api/v1/admin/login", { "email": AdminEmail, "password": AdminPassword } )
          .then(async(res) => {
            console.log(res);
            res.status===200 && res.data.data.user.role==="admin" && navigate("/admin")
            res.status===200 && res.data.data.user.role==="student" && navigate("/u1") 
            res.status===200 && res.data.data.user.role==="facality" && navigate("/facality")
            res.status!=200  && navigate('/')    
            navigate("/u2")
            await updateData(res.data.data.accessToken ,res.data.data.user);
          })
          .catch((error) => {
            console.error('Error logging in:', error);
          });
      };


  return (
    <section className='flex px-[100px]'> 
      <div className="flex items-center justify-center px-4 py-10 grow  sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Student
          </h2>
          <form action="#" method="POST" className="mt-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="" className="text-base font-medium text-gray-900">
                  {' '}
                  Email address{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    onChange={(e)=>{SetEmail(e.target.value)}}
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    {' '}
                    Password{' '}
                  </label>
                  <a href="#" title="" className="text-sm font-semibold text-black hover:underline">
                    {' '}
                    Forgot password?{' '}
                  </a>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    onChange={(e) =>{SetPassword(e.target.value)}}
                  ></input>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  onClick={handleLogin}
                >
                  Log in
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>



      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 grow">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Admin
          </h2>
          <form action="#" method="POST" className="mt-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="" className="text-base font-medium text-gray-900">
                  {' '}
                  Email address{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    onChange={(e)=>{SetAdminEmail(e.target.value)}}
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    {' '}
                    Password{' '}
                  </label>
                  <a href="#" title="" className="text-sm font-semibold text-black hover:underline">
                    {' '}
                    Forgot password?{' '}
                  </a>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    onChange={(e)=>{SetAdminPassword(e.target.value)}}
                  ></input>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  onClick={handleAdminLogin}
                >
                  Log in
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
