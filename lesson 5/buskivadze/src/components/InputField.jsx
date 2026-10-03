import { useEffect, useState } from "react";
import { InputForm } from "./Style";

const InputFiled = ({ PostObj }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [lector, setLector] = useState("");
  const [count, setCount] = useState(1);

  const SubmitHandler = (e) => {
    e.preventDefault();
    const obj = {
      title: title,
      desc: desc,
      lector: lector,
      count: count,
    };
    PostObj(obj);
    setCount(count + 1);
    setDesc("");
    setLector("");
    setTitle("");
  };

  return (
    <InputForm onSubmit={SubmitHandler}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Course Title"
      />
      <input
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Enter Course Description"
      />
      <select name="" id="" onChange={(e) => setLector(e.target.value)}>
        <option disabled>Select lector</option>
        <option value="Irakli Pirtskhalava">Irakli Pirtskhalava</option>
        <option value="Ketevan Grdzelidze">Ketevan Grdzelidze</option>
        <option value="Maksim Iavich">Maksim Iavich</option>
        <option value="Archil Shengelia">Archil Shengelia</option>
        <option value="David Bochorishvili">David Bochorishvili</option>
        <option value="Tamar Kuchukhidze">Tamar Kuchukhidze</option>
        <option value="Sergo Simonov">Sergo Simonov</option>
      </select>
      <button type="submit">add</button>
    </InputForm>
  );
};

export default InputFiled;
