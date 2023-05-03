import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';


export default function MasterRouting({ userData ,logout }) {  // lmma t3mlha { } , msh m7tag props. (Destructing)
    console.log(userData)
    return (
        <>
            <Navbar userData={userData} logout={logout} />
            <div className='container'>
                <Outlet />
            </div>
            
            
        </>

    )
}
