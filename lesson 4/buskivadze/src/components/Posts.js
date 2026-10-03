import { useState } from "react";
import InputFiled from "./InputField";
import { CourseDiv } from "./Style";

const Posts = () => {
  const [post, setPost] = useState([]);
  const ReceiveInfo = (data) => {
    setPost((prev) => [...prev, data]);
  };

  return (
    <div>
      <InputFiled PostObj={ReceiveInfo} />

      {post.map((post) => (
        <CourseDiv>
          <h3>{post.title}</h3>
          <p>{post.desc}</p>
          <h3>{post.lector}</h3>
        </CourseDiv>
      ))}
    </div>
  );
};

export default Posts;
