import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import Footer from "../components/Footer";
import react_logo from "../imgs/React_logo.png";
import facebook from "../imgs/faceblogo.png";
import instagram from "../imgs/instagram.png";
import { Logos, StyledHeader } from "../Style";
import { useAuth } from "../context/AuthContext";
function SinglePage() {
  const [data, setData] = useState([]);
  const {auth, logOut} = useAuth()
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://api.npoint.io/a5039ff35c79ccd0ee4a/${id}`)
      .then((res) => setData(res.data));
  });
  return (
    <div>
      <StyledHeader>
        <img
          src={react_logo}
          alt="nothing"
          style={{ width: "125px", height: "50px" }}
        />
        <div style={{ display: "flex", gap: "30px" }}>
          <Link to="/">HOME</Link>
          {auth ? (
            <Link to="/login" onClick={logOut}>
              LOG OUT
            </Link>
          ) : (
            <Link to="/login">LOGIN</Link>
          )}
          <Link to="/posts">POSTS</Link>
        </div>
        <div>
          <Logos src={facebook} alt="nothing" />
          <Logos src={instagram} alt="nothing" />
        </div>
      </StyledHeader>
      <div style={{width:"32%", margin:"auto"}}>
        <img src={data.image} alt="nothing" style={{width:"100%"}}/>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>
      <Footer />
    </div>
  );
}

export default SinglePage;
