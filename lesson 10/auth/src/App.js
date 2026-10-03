import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import { useAuth } from "./context/Authcontext";

function App() {
  const {auth} = useAuth()
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          {auth ? <Route path="/dashboard" element={<Dashboard />} /> : <Route path="/" element={<Login />} />}
        </Routes>
      </div>
    </>
  );
}

export default App;
// protectRouter