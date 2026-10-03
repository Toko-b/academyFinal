import React from "react";
import { Link } from "react-router";
import { CardDiv, TextDiv, PostImg } from "../Style";

function Card(props) {
  return (
    <CardDiv>
      <PostImg src={props.image} alt="post" />
      <TextDiv>
        <h3>{props.title}</h3>
        <p>{props.desc}...</p>
        <Link
          style={{
            color: "#cb9954",
            textDecoration: "none",
            textTransform: "uppercase",
          }}
          to={`/home/${props.id}`}
        >
          Learn More
        </Link>
      </TextDiv>
    </CardDiv>
  );
}

export default Card;
