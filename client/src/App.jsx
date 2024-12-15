import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

const App = () => {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/" element={<Home navigate={navigate} />} />
      <Route path="/dashboard" element={<Dashboard navigate={navigate} />} />
    </Routes>
  );
};

export default App;
