import React, {useState} from "react";
import { useAuth } from "../components/AuthContext";
import { Link, useNavigate } from "react-router";

function Login() {
  const [username, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const {login} = useAuth()
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault();
    if(username && pass){
        const allUser = JSON.parse(localStorage.getItem("users"))
        const existUser = allUser.find((value) => value.username === username && value.pass === pass)
        if(existUser){
            login({username, pass})
            navigate("/dashboard")
        }
    }
    }
  return (
    <div>
      Login
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="enter Username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="enter password"
          onChange={(e) => setPass(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <button><Link to="/registration">Register</Link></button>
    </div>
  );
}

export default Login;
