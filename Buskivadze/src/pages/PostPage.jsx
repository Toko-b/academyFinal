import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Footer from "../components/Footer";
import react_logo from "../imgs/React_logo.png";
import facebook from "../imgs/faceblogo.png";
import instagram from "../imgs/instagram.png";
import { Logos, StyledHeader, PostsGrid, ExitButton } from "../Style";
import { useAuth } from "../context/AuthContext";
import ReactPaginate from "react-paginate";
import "../style.css";

function PostPage() {
  const { auth, logOut } = useAuth();
  const [data, setData] = useState([]);
  const [imagesData, setImagesData] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const [currentPost, setCurrentPost] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 6;

  let start = (page - 1) * perPage;
  let end = start + perPage;
  let total = Math.round(data.length / perPage);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data));

    axios
      .get("https://picsum.photos/v2/list?page=2&limit=100")
      .then((res) => setImagesData(res.data));
  }, []);

  let combined = data.map((val, i) => ({
    ...val,
    download_url: imagesData[i]?.download_url,
  }));

  let current = combined.slice(start, end);

  const handlePageClick = ({selected}) => {
    setPage(selected + 1);
  };

  const popUpHandler = (value) => {
    setCurrentPost(value);
    setPopUp(true);
  };

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
      <PostsGrid>
        {current.map((val) => {
          return (
            <div
              key={val.id}
              style={{
                width: "350px",
                height: "350px",
                boxShadow: "0 0 5px black",
              }}
            >
              <img
                src={val.download_url}
                alt="nothing"
                style={{
                  backgroundColor: "black",
                  width: "100%",
                  height: "125px",
                }}
              />
              <div style={{ padding: "0 15px" }}>
                <h1 style={{ textTransform: "capitalize" }}>
                  {val.title}
                </h1>
                <p>{val.body.slice(0, 90)}...</p>
                <p
                  style={{ textTransform: "uppercase", color: "#cb9954" }}
                  onClick={() => popUpHandler(val)}
                >
                  Learn more
                </p>
              </div>
            </div>
          );
        })}
      </PostsGrid>
      {popUp && (
        <div className="popUpBg">
          <div className="popUp">
            <img
              src={currentPost.download_url}
              alt="nothig"
              style={{ width: "100%", height: "125px" }}
            />
            <ExitButton onClick={() => setPopUp(false)}>X</ExitButton>
            <h1>{currentPost.title}</h1>
            <p>{currentPost.body}</p>
          </div>
        </div>
      )}
      <ReactPaginate
        className="pagination"
        nextLabel="Next"
        disabledClassName="disabled"
        activeClassName="active"
        onPageChange={handlePageClick}
        pageCount={total}
        previousLabel="Prev"
        renderOnZeroPageCount={null}
      />
      <Footer />
    </div>
  );
}

export default PostPage;
