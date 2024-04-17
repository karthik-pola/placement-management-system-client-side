import React, { useState } from "react";
import AuthContext from "./authContext.js";

// import AuthContext from "./authContext";

const AuthContextProvider = ({children}) =>{
    const [AccessToken , setAccessToken] = useState("");
    const [User , setUser] = useState("");


    return (
        <AuthContext.Provider value={{User , AccessToken , setAccessToken , setUser}}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContextProvider