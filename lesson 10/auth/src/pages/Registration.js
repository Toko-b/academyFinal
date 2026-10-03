import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Registration() {
  const [username, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate()

  const HandlerSubmit = (e) => {
    e.preventDefault();
    if (username) {
      let userMassive = JSON.parse(localStorage.getItem("users")) || [];
      const existUser = userMassive.find(
        (value) => value.username === username,
      );
      console.log(existUser);
      if(existUser){
        alert("aseti iuzeri ukve arsebobs")
        return ;
      }

      let newUser = { username, pass };
      userMassive.push(newUser);
      localStorage.setItem("users", JSON.stringify(userMassive));
      navigate("/")
    }
  };
  return (
    <div>
      Registration
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
        <button type="submit">Registration</button>
      </form>
    </div>
  );
}
