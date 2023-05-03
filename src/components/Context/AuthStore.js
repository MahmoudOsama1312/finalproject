import { createContext } from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { Navigate } from "react-router-dom";

export let AuthContext = createContext(0);
//------------------------------------------------------------------

export default function AuthContextProvider(props) {
      const [userData, getUserData] = useState(null)   // de el h7ot feha el Decoded 
  // w hab3t el userData de lel navbar .

  let userInfo = () => {
    let encoded = localStorage.getItem('token');
    console.log(encoded)
    let decoded = jwtDecode(encoded);
    getUserData(decoded)
    console.log(userData)
  }
  // Solving Refresh Problem
  // hena b2olo , lmma ykon fe token , 7tta lw 3mlt refresh , 5alli el token data awel 7aga t2oom fel Root-
  useEffect(() => {
    if (localStorage.getItem('token')) {
      userInfo()
    }
  }, [])

  let logout = () => {                /// b3d ma 3mltha , i need to send it to Navbar
    localStorage.removeItem('token');
    getUserData(null);
    return <Navigate to='/login' />;
  }
    
    // hena b3d ma 3mlt Fill lel Data gwa el useState , babda2 a3mlha Share . 3lshan ay 7ad yest5dm el hwa 3yzo
    return <AuthContext.Provider value={{userData,logout,userInfo}}>
        {props.children}

    </AuthContext.Provider>
}