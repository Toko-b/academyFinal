import Login from "./page/Login";
import Dashboard from "./page/Dashboard";
import Registration from "./page/Registration";
import { Route, Routes } from "react-router";
import ProtectRouter from "./context/ProtectRouter";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route element={<ProtectRouter/>}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
