import logo from "../assets/logo.svg";
import profile from "../assets/profile.png";
import "../App.css";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header className="d-flex justify-content-between w-100 py-4 px-3 align-items-center bg-dark ">
      <div className="logo d-flex gap-1 align-items-center">
        <p className="text-light fw-bold text-center logoText">
          Prime<span className="text-primary">Techy</span>
        </p>
        <img src={logo} alt="logo" className="logo-pic w-25" />
      </div>
      <div className="search d-flex align-items-center  gap-1">
        <input
          style={{ width: "450px" }}
          className=" searchBar rounded-3 form-control shadow-none"
          type="search"
          name="search"
          placeholder="Search here for Gadgets"
          id=""
        />
      </div>
      <div className="dashboard">
        <NavLink style={{ textDecoration: "none" }} to="/dashboard">
          <img src={profile} alt="profile" className="profile-pic w-75" />
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
