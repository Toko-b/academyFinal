import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/Authcontext";

export default function Login() {
  const [username, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const {login} =useAuth()
  const navigate = useNavigate();

  const HandlerSubmit=(e)=>{
    e.preventDevault()
    
    if(username && pass){
        const allUser = JSON.parse(localStorage.getItem("users"))
        const existUser = allUser.find((value) => value.username === username && value.pass === pass)
        if(existUser){
            login({username,pass})
            navigate("/dashboard")
        }
    }
  }
  return (
    <div>
      Login If you want click
      <form onSubmit={HandlerSubmit}>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPass(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <Link to="/registration">Registration</Link>
    </div>
  );
}
