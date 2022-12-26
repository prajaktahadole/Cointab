import React from "react";
import { useNavigate } from "react-router-dom";
import '../index.css';

const Navbar = () => {
  const navigate = useNavigate();
  
  return (
    <div className="nav">
        <h3 onClick={()=>navigate("/")}>COINTAB</h3>
    </div>
  );
};

export default Navbar;