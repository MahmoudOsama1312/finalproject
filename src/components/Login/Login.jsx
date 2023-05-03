import React , {useState} from 'react'
import axios from 'axios';
import joi from 'joi';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";

export default function Login(userInfoProps) {

  let [user, setUser] = useState({
    'email': '',
    'password': ''
  })

  let [errorMsg, setErrorMsg] = useState("");
  let [errorsList, setErrorsList] = useState([]);

  let getInputValue = (event) => {
    let myUser = { ...user };  // hena a5dt Deep Copy mn el Inital Value
    myUser[event.target.name] = event.target.value;
    setUser(myUser)
  }
  // ------ Navigation----
  let navigate = useNavigate();

  let goToHome = () => {
    navigate('/')
  }
//------ end of Navigation---
  //---- Submit --------
  let submitDataFunc = async (event) => {
    event.preventDefault();
    let validationResponse = ValidationFormData()
    // hena 3amlt call lel Joi Function , it returns 2 things ( Error [if exists] , value ) 
    console.log(validationResponse)

    if (validationResponse.error) {
      setErrorsList(validationResponse.error.details)
    } else {
      let { data } = await axios.post("https://route-ecommerce.onrender.com/api/v1/auth/signin", user); //Api, el 3yzo ywsalo el data (user) 
      console.log(data)
      // it should returns [ success & Token ,   or , Error]
      if (data.message === "success") {
        localStorage.setItem('token', data.token);    // Used For Authentication
        userInfoProps.userInfo()    // this function comes from App.jsx
        goToHome()

      } else {
        console.log("Error");
      }
    }

  }
  //--------End Of Submit
  
// ----- Validation Before Submitting 
  let ValidationFormData = () => {

    let schema = joi.object({
      email: joi.string().email({ tlds: { allow: ['com', 'net'] } }).required(),
      password: joi.string().min(4).max(20).required()
    })
    return schema.validate(user, { abortEarly: false })
    // hena b2olo 3addeli el user 3la el Schema de .
    //abort early de : b2olo ygeb kol el errors mara w7da , may2ofsh 3nd awel error bas 
  }
  ///----- End of Validation 


  return (
  <>
      <div className='register my-3 m-auto w-75 py-5'>
        <h1 className='my-3'>Login Form</h1>
        {errorsList.map((error, index) =>
          <div key={index} className='alert alert-danger py-2'>{error.message}</div>
        )}
        {errorMsg ? (<div className='alert alert-danger py-2'>{errorMsg}</div>) :("")}
        <form onSubmit={submitDataFunc}>
          
          <div className='inputData my-2'>
            <label htmlFor="email">E-Mail</label>
            <input onChange={getInputValue} className="form-control my-2" type="e-mail" name="email" id="email" />
          </div>

          <div className='inputData my-2'>
            <label htmlFor="password">Password</label>
            <input onChange={getInputValue} className="form-control my-2" type="password" name="password" id="password" />
          </div>

          <button className='btn btn-info btn-lg my-2'> Login</button>

        </form>

      </div>
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
      </Helmet> */}

      </>
  )
}
