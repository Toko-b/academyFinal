import { useState } from "react";

const InputForm = ({sendPost}) => {
  const [postTitle, setPostTitle] = useState("");
  const [postDesc, setPostDesc] = useState("");
  const [postCat, setPostCat] = useState("");

  const SubmitHandler = (event) =>{
    event.preventDefault()
    const PostObj = {
        title: postTitle,
        desc: postDesc,
        category: postCat
    }
    sendPost(PostObj)
  }

  return (
    <div>
      <form action="" onSubmit={SubmitHandler}>
        <input
          type="text"
          onChange={(e) => setPostTitle(e.target.value)}
          placeholder="title"
        />
        <input
          type="text"
          onChange={(e) => setPostDesc(e.target.value)}
          placeholder="Description"
        />
        <select name="" id="" onChange={(e)=>setPostCat(e.target.value)}>
            <option disabled>select categories</option>
            <option value="Sport">Sport</option>
            <option value="Art">Art</option>
            <option value="Band">Band</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default InputForm;
