import axios from 'axios';
import joi from 'joi';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  //  hena 3andi el useState ({}) 3obara 3n Object ( Json ) 3lshan da el hab3to lel Backend
  let [user, setUser] = useState({
    'name': '',
    'email': '',
    'password': '',
    'rePassword': '',
    'phone': ''
  })

  let [errorMsg, setErrorMsg] = useState("");
  let [errorsList, setErrorsList] = useState([]);

  let getInputValue = (event) => {
    let myUser = { ...user }; // hena a5dt Deep Copy mn el Inital Value(Lazem A5od Copy mn el Original abl ma ashtghl)
    console.log(event.target.name)
    myUser[event.target.name] = event.target.value;
    // hena el event beta3y , gwah name attribute ,el name el medeh lel element , name=""   ( To make it dynamic)
    setUser(myUser)
    console.log(myUser)
  }
  // // Getting --- and Posting -----------------------------Start Of  Duplicate E-mails.--------------------------
  // // At First : Lazem a3ml Get , Get all E-Mails el 3andi  ( Bamsekaha ) 
  // // then , using post , b2olo yshof el mails el gdeda zay el ana masekaha wlla la 
  let submitDataFunc = async (event) => {
    event.preventDefault();
    let validationResponse = ValidationFormData()
    // hena 3amlt call lel Joi Function , it returns 2 things ( Error , value ) lw 3ndi error 
    console.log(validationResponse)

    if (validationResponse.error) {
      setErrorsList(validationResponse.error.details)
    } else {
      let { data } = await axios.post("https://route-ecommerce.onrender.com/api/v1/auth/signup", user); //Api, el 3yzo ywsalo el data (user) 
      console.log(data)
      if (data.message === "success") {
        goToLogin()

      } else {
        console.log("Error");
      }
    }

  }

  let navigate = useNavigate()
  let goToLogin = () => {
    navigate('/login')
  }

  // //-----------------------------------End Of Duplicate Mails------------------
  // //----------- Registeration Validation----------------------------
  let ValidationFormData = () => {

    let schema = joi.object({
      name: joi.string().alphanum().min(3).max(15).required(),
      email: joi.string().email({ tlds: { allow: ['com', 'net'] } }).required(),
      password: joi.string().min(4).max(20).required(),
      rePassword: joi.string().min(4).max(20).required(),
      phone: joi.number().required()
    })
    return schema.validate(user, { abortEarly: false })
    // hena b2olo 3addeli el user 3la el Schema de .
    //abort early de : b2olo ygeb kol el errors mara w7da , may2ofsh 3nd awel error bas 
  }

  return (
    <>
      <div className='register my-3 m-auto w-75 py-5'>
        <h1 className='my-3'>Registration Form</h1>
        {errorsList.map((error, index) =>
          <div key={index} className='alert alert-danger py-2'>{error.message}</div>
        )}
        {errorMsg ? <div className='alert alert-danger py-2'>{errorMsg}</div> : ""}
        <form onSubmit={submitDataFunc}>

          <div className='inputData my-2'>
            <label htmlFor="name">Name</label>
            <input onChange={getInputValue} className="form-control my-2" type="text" name="name" id="name" />
          </div>
          <div className='inputData my-2'>
            <label htmlFor="email">E-mail</label>
            <input onChange={getInputValue} className="form-control my-2" type="e-mail" name="email" id="email" />
          </div>
          <div className='inputData my-2'>
            <label htmlFor="password">Password</label>
            <input onChange={getInputValue} className="form-control my-2" type="password" name="password" id="password" />
          </div>
          <div className='inputData my-2'>
            <label htmlFor="rePassword">rePassword</label>
            <input onChange={getInputValue} className="form-control my-2" type="password" name="rePassword" id="rePassword" />
          </div>
          <div className='inputData my-2'>
            <label htmlFor="phone">Phone</label>
            <input onChange={getInputValue} className="form-control my-2" type="number" name="phone" id="phone" />
          </div>

          <button className='btn btn-info btn-lg my-2'> Register</button>

        </form>

      </div>

      {/* <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Register</title>
        </Helmet>
      </div> */}
    </>

  )
}

