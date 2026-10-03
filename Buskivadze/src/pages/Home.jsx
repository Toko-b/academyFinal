import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import bannerImg from "../imgs/Banner.png";
import react_logo from "../imgs/React_logo.png";
import facebook from "../imgs/faceblogo.png";
import instagram from "../imgs/instagram.png";
import axios from "axios";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { PostDiv, Banner, StyledHeader, Logos } from "../Style";
import { useAuth } from "../context/AuthContext";

function Home() {
  const [data, setData] = useState([]);
  const { auth, logOut } = useAuth();
  const posts = [];
  useEffect(() => {
    axios
      .get("https://api.npoint.io/a5039ff35c79ccd0ee4a")
      .then((res) => setData(res.data));
  }, []);

  for (let i = 0; i < data.length; i++) {
    posts.push(data[i]);
  }
  return (
    <div style={{ backgroundColor: "#f6f7fb" }}>
      <StyledHeader className="bg-black">
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
      <main>
        <section>
          <Banner src={bannerImg} />
        </section>
        <section>
          <h1 style={{ textAlign: "center" }}>Our posts</h1>
          <hr style={{ width: "50px", borderColor: "#CB9A56" }} />
          <p style={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Ipsa, provident. Quia officia recusandae eveniet fugiat animi
            eligendi fugit!
          </p>
          <PostDiv>
            {posts.map((value) => {
              return (
                <>
                  <Card
                    key={value.id}
                    image={value.image}
                    title={value.title}
                    desc={value.description.slice(0, 138)}
                    id={value.id - 1}
                  />
                </>
              );
            })}
          </PostDiv>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
