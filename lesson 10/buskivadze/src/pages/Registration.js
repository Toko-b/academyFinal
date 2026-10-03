import React, { useState } from 'react'
import { useNavigate } from 'react-router'

function Register() {
    const [username, setUserName] = useState("")
    const [pass, setPass] = useState("")
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        if(username){
            let userMassive = JSON.parse(localStorage.getItem("users")) || []
            const existUser = userMassive.find((value) => value.username === username)
            if(existUser){
                alert("user alredy exists")
                return;
            }
            let newUser = {username, pass}
            userMassive.push(newUser)
            localStorage.setItem("users", JSON.stringify(userMassive))
            navigate("/")
        }
    }
  return (
    <div>Register

        <form onSubmit={submitHandler}>
            <input type='text' placeholder='enter Username' onChange={(e) => setUserName(e.target.value)}/>
            <input type='password' placeholder='enter password' onChange={(e) => setPass(e.target.value)}/>
            <button type='submit'>registrate</button>
        </form>
    </div>
  )
}

export default Register