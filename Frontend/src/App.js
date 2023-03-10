import "./App.css";
import { Route, Routes } from "react-router-dom";
import User from "./components/User";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
