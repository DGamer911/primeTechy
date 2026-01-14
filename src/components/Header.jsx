import logo from "../assets/logo.svg";
import profile from "../assets/profile.png";
import "../App.css";
import { NavLink } from "react-router-dom";
import { BellDotIcon , ShoppingCart } from "lucide-react";

import { SearchIcon } from "lucide-react";

function Header({onButtonClick}) {
  function searchFilter(){
    onButtonClick()
  }
  return (
    <header className="d-flex justify-content-between w-100 py-4 px-3 align-items-center bg-dark ">
      <div className="logo d-flex gap-1 align-items-center">
        <p className="text-light fw-bold text-center logoText">
          Prime<span className="text-primary">Techy</span>
        </p>
        <img src={logo} alt="logo" className="logo-pic logo w-25" />
      </div>
      <div className="dashboard d-flex align-items-center">
        <SearchIcon onClick={() => searchFilter } />
        <BellDotIcon size={24} className="mx-3" />
        <NavLink style={{ textDecoration: "none" }} to="/dashboard">
          <img src={profile} alt="profile" className="profile-pic w-75" />
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
