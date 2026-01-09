import React from "react";
import { NavLink } from "react-router-dom";
import { Home, LucideShoppingCart, Menu } from "lucide-react";
import Categories from "./categories.jsx";
import '../App.css'

const Navbar = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <>
      <nav className="d-flex position-sticky justify-content-center gap-5 align-items-center bg-dark text-light py-3 w-100">
        <div className="navLinks">
          <NavLink style={{ textDecoration: "none", color: "white" }} to="/">
            Home
          </NavLink>
        </div>
        <div className="navLinks">
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/cart"
          >
            Cart
          </NavLink>
        </div>
        <div className="navLinks">
          <NavLink className={"categories"}
            style={{ textDecoration: "none", color: "white" , display: 'flex', position: 'relative', gap: 10, alignItems: 'center'}}
            to="/search"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span>Categories</span>
                      {isHovered && <Categories />}   
    
          </NavLink>
        </div>
      </nav>

    </>
  );
};

export default Navbar;
