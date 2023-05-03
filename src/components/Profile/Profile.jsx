import React from 'react'

export default function Profile({ userData }) {
    console.log(userData)
    return (
        <>
            <div className='profile w-50 py-3 m-auto '>
                <h2>User Information</h2>
                <div className='info my-5 m-auto '>
                    <h4 className='my-3'>UserName : {userData.name}</h4>
                    <h4 className='my-3'>iat : {userData.iat}</h4>
                    <h4 className='my-3'>Role : {userData.role}</h4>
                    <h4 className='my-3'>ID : {userData.id}</h4>
                </div>
                

            </div>

        </>
    )
}
