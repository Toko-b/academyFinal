import React, { useEffect, useState } from "react";
import react_logo from "../imgs/React_logo.png";
import login_img from "../imgs/Login.png";
import facebook from "../imgs/faceblogo.png";
import instagram from "../imgs/instagram.png";
import { useNavigate } from "react-router";
import axios from "axios"
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import { Logos, GridDiv, StyledForm, StyledInputs, StyledButton, StyledHeader } from "../Style";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const usernames = [];
  const [data, setData] = useState([])
  const {login} = useAuth() 
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data))
  }, [])

  for(let i = 0; i < data.length; i++){
    usernames.push(data[i].username)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usernames.includes(username)) {
      navigate("/");
      login()
    } else {
      setError(true);
      setErrorMessage("Username Incorrect");
    }
  };
  return (
    <div>
      <StyledHeader>
        <img
          src={react_logo}
          alt="Img could'nt be loaded"
          style={{ width: "125px", height: "50px" }}
        />
        <h1>LOGIN</h1>
        <div>
          <Logos src={facebook} alt="facebook" />
          <Logos src={instagram} alt="instagram" />
        </div>
      </StyledHeader>
      <GridDiv>
        <section>
          <StyledForm onSubmit={handleSubmit}>
            <label>Username</label>
            <br />
            <StyledInputs
              type="text"
              placeholder="Enter Username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            {error && <p style={{ color: "red" }}>{errorMessage}</p>}
            <label>Password</label>
            <br />
            <StyledInputs
              type="password"
              placeholder="enter password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <StyledButton type="submit">Log in</StyledButton>
          </StyledForm>
        </section>
        <section>
          <img src={login_img} alt="could not be loaded" />
        </section>
      </GridDiv>
      <Footer/>
    </div>
  );
}

export default Login;
