import { useState } from "react";

function InputField({PostObj}) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const TitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const DescHandler = (e) => {
    setDesc(e.target.value);
  };

  const SubmitHandler = (e) => {
    e.preventDefault()

    const obj ={
        title: title,
        desc: desc
    }
    PostObj(obj)
    setTitle("")
    setDesc("")
  }

  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <input
          type="text"
          value={title}
          onChange={TitleHandler}
          placeholder="Type Title"
        />
        <input
          type="text"
          value={desc}
          onChange={DescHandler}
          placeholder="Type Desc"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default InputField;
