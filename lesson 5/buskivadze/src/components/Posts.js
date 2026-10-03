import { useState, useEffect } from "react";
import InputFiled from "./InputField";
import { CourseDiv, MainDiv } from "./Style";

const Posts = () => {
  const [post, setPost] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const ReceiveInfo = (data) => {
    setPost((prev) => [...prev, data]);
  };

  useEffect(() => {
    if (post.title?.length === 1) {
      setError(true);
      setErrorMessage("Please Enter title");
    } else if (post.desc?.length === 1) {
      setError(true);
      setErrorMessage("Pleae Enter Description");
    } else {
      setError(false);
      setErrorMessage("");
    }
  }, [post]);

  return (
    <MainDiv>
      <InputFiled PostObj={ReceiveInfo} />
      {error ? (
        <p>{errorMessage}</p>
      ) : (
        <div>
          {post.map((post, index) => (
            <CourseDiv key={index}>
              <h3 style={{ padding: "30px" }}>Course {post.count}</h3>
              <div
                style={{ display: "flex", flexDirection: "column", flex: 1 }}
              >
                <h3>{post.title}</h3>
                <p>{post.desc}</p>
                <h3>Lecturer: {post.lector}</h3>
              </div>
            </CourseDiv>
          ))}
        </div>
      )}
    </MainDiv>
  );
};

export default Posts;
