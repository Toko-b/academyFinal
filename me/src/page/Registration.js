import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

function Registration() {
  const [username, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault();
    if (username) {
      let userMassive = JSON.parse(localStorage.getItem("users")) || [];
      const existUser = userMassive.find((val) => val.username === username);
      if(existUser){
        alert("user alredy exists")
        return;
      }
      let newUser = { username, pass };
      userMassive.push(newUser);
      localStorage.setItem("users", JSON.stringify(userMassive));
      navigate("/")
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
        <button type="submit">Registrate</button>
      </form>
    </div>
  );
}

export default Registration;
