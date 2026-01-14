import React from "react";
import { NavLink } from "react-router-dom";

import Categories from "./categories.jsx";
import "../App.css";
import { useState } from "react";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <nav className=" d-flex z-1 bg-warning justify-content-center gap-5 align-items-center text-light py-3 w-100">
        <div className="navLinks">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="navLinks">
          <NavLink to="/cart">Cart</NavLink>
        </div>
        <div className="navLinks">
          <NavLink
            className={"categories"}
            style={{
              display: "flex",
              position: "relative",
              gap: 10,
              alignItems: "center",
            }}
            to="/search"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span>Categories</span>
            <div>{isHovered && <Categories />} </div>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
