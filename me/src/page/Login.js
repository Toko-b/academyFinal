import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

function Login() {
    const {login} = useAuth()
  const [username, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault();

    if (username && pass) {
      const Allusers = JSON.parse(localStorage.getItem("users"));
      const existUser = Allusers.find(
        (val) => val.username === username && val.pass === pass,
      );
      if(existUser){
        login([username, pass])
        navigate("/dashboard")
      }
    }
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      if You want to registrate click{" "}
      <Link to="/registration">Registration</Link>
    </div>
  );
}

export default Login;
