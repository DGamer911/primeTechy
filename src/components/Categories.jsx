import { NavLink } from "react-router-dom";
import '../App.css'
function Categories() {
  return (
   <ul className="categoriesD d-flex gap-3 bg-white text-dark px-3 py-1 rounded-2 align-items-center list">
    <li className="list-group-item">
        <NavLink style={{ textDecoration: "none", color: "black" }} to='/laptops'>Laptops</NavLink>
    </li>
    <li className="list-group-item">
        <NavLink style={{ textDecoration: "none", color: "black" }} to='/smartphones'>Smartphones</NavLink>
    </li>
    <li className="list-group-item">
        <NavLink style={{ textDecoration: "none", color: "black" }} to='/tablets'>Tablets</NavLink>
    </li>
   </ul>
  )
}

export default Categories;