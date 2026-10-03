import React from 'react'
import { useUser } from '../libs/userContext'
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate()
    const { confirm, emailError, passwordError,submitHandler, email, emailHandler, password, passwordHandler } = useUser()
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <input type='text' placeholder='Enter Your password' value={password} onChange={passwordHandler}/>
        <input type='text' placeholder='Enter Your Email' value={email} onChange={emailHandler}/>
        <button type='submit' onClick={submitHandler}>Login</button>
        {confirm && navigate("/home", {replace:true})} 
        <p style={{color:"red"}}>{emailError}</p>
        <p style={{color:"red"}}>{passwordError}</p>
    </form>
  )
}
