import React, { useEffect, useState } from "react";
import { Link } from "react-router";

export default function About() {
  const [currentData, setCurrentData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setCurrentData(data));
  }, []);
  return (
    <div style={{margin:"25px"}}>
      <h1>About</h1>
      {currentData.map((val) => {
        return (
          <div style={{backgroundColor:"#E5E9EC", width:"300px",height:"100px", display:"flex", flexDirection:"column", marginBottom:"25px"}}>
            <h3>{val.title.slice(0, 9).trim()}...</h3>
            <Link to={`/post/${val.id}`}>Read More</Link>
          </div>
        );
      })}
    </div>
  );
}
