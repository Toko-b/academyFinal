import Login from "./component/Login";
import Home from "./component/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import About from "./component/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">

      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
