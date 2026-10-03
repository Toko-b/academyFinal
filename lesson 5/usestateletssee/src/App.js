import { useState } from "react";
import InputForm from "./components/InputForm";
import UseEffect from "./components/UseEffect";


function App() {
  const [realData, setRealtData] = useState([])

  const getPost = (data) =>{
    setRealtData([...realData, data])
  }

  return (
    <div className="App">

      <UseEffect/>
      <InputForm sendPost={getPost}/>
      {realData.map((val, index) => (
        <div key={index}>
          <h3>{val.title}</h3>
          <p>{val.desc}</p>
          <p>{val.category}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
