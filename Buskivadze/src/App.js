import {Routes, Route} from "react-router"
import Login from "./pages/Login";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";
import SinglePage from "./pages/SinglePage";
import { useAuth } from "./context/AuthContext";

function App() {
  const {loading} = useAuth()
  if(loading) return <p>Loading...</p>
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/posts" element={<PostPage/>}/>
      <Route path="/home/:id" element={<SinglePage/>}/>
    </Routes>
  );
}

export default App;
