import React from 'react'

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"

import "./Form.css"

export default function Login() {
    const { handleSubmit, formState: { errors, } } = useForm();

    function createServer(data){
        console.log(data)
    }

  return (
    <form className='form-container' onSubmit={handleSubmit(createServer)}>
        <div className='form-box'>
            <div>
                <h2>AskApp Chat</h2>
                <p>Sign in</p>
            </div>
            <div className='form-piece'>
                <input className='form-input' type="email" placeholder='Email'/>
                {errors.email && <span>The minimum lenght is 10 and fill out this field is necessary</span>}
            </div>
            <div className='form-piece'>
                <input className='form-input' type="password" placeholder='Password'/>
                {errors.password && <span>The minimum lenght is 6 and fill out this field is necessary</span>}
            </div>
            <div className='form-piece'>
                <input className='form-button' type="submit" value="Sign in" />
            </div>
            <p>Not Registered? Click <Link to="/register">Here</Link> to create an account</p>
        </div>
    </form>
  )
}
