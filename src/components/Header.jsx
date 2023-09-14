import { Link } from "react-router-dom";
import "./header.css";
import React from "react";

const Header = () => {
  return (
    
      <div className="header-container">
        <Link to= "/">
          <h2>HOME</h2>
          </Link>
          <Link to = "/search">
          <h2>MORE MOVIES</h2>
          </Link>
      
      </div>
   
  );
};

export default Header;
