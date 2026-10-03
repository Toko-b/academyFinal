import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function SinglePost() {
  const { id } = useParams();
  const [currentData, setCurrentData] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentData(data));
  }, []);
  return (
    <div style={{display:"flex", flexDirection:"column", gap:"25px", margin:"25px 0"}}>
      <h1>SinglePost</h1>
      <div
        style={{
          backgroundColor: "#394F49",
          borderRadius: "30px",
          width: "500px",
          height: "350px",
          display: "flex",
          flexDirection: "column",
          padding: "15px",
        }}
      >
        <h1 style={{ color: "#C0C0C0" }}>{currentData.title}</h1>
        <p style={{color:"#A4BAB7", fontWeight:600, fontSize:"20px"}}>{currentData.body}</p>
      </div>
    </div>
  );
}
