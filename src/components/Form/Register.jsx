import React from 'react'
import "./Form.css"

//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

import { useForm } from "react-hook-form";

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export default function Register() {
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm();

    function getInformation(e){
        e.preventDefault()
        console.log(e.target[0].value)
    }

//     const auth = getAuth();
//         createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//     // Signed in
//         const user = userCredential.user;
//     // ...
//   })

    return (
      <form className='form-container' onSubmit={handleSubmit(getInformation)}>
          <div className='form-box'>
              <div>
                  <h2>AskApp Chat</h2>
                  <p>Register</p>
              </div>
              <div className='form-piece'>                 
                  <input className='form-input' type="text" placeholder='Full Name' {...register ("name", {required: true, minLength: 10})}/>
                  {errors.name && <span>The minimum lenght is 10 and fill out this field is necessary</span>}
              </div>
              <div className='form-piece'>                 
                  <input className='form-input' type="email" placeholder='Email' {...register ("email", {required: true, minLength: 10})}/>
                  {errors.email && <span>The minimum lenght is 10 and fill out this field is necessary</span>}
              </div>
              <div className='form-piece'>                 
                  <input className='form-input' type="password" placeholder='Password' {...register ("password", {required: true, minLength: 6})}/>
                  {errors.password && <span>The minimum lenght is 6 and fill out this field is necessary</span>}
              </div>
              <div className='form-piece'>                 
              <input type="file" style={{display: "none"}} id="file"/>
                <label htmlFor="file">
                    <AddPhotoAlternateIcon style={{fontSize: "26px", cursor: "pointer"}}/>
                    <span className='file-description'>Send a picture</span>
                </label>
              </div>
              <div className='form-piece'>
                  <input className='form-button' type="submit" value="Sign up" disabled={!isDirty && !isValid}/>
              </div>
          </div>
      </form>
    )
}
