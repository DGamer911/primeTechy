import React from "react";
import { Star } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import "../App.css";
import { Heart } from "lucide-react";
import cart from "../stores/cart";
import { Link } from "react-router-dom";


function Card({
  name,
  price,
  ratings,
  image,
  discount,
  category,
id,
slug
}) {

  const [favorited, setFavorited] = React.useState(false);
  const [rated, setRated] = React.useState(false);

  function handleAddToCart(){
    cart.push({
      id: cart.length + 1,
      name: "productName",
      price: "999",
      quantity: "1",
      category: "laptops",
      image: image
    })
    console.log(cart)
  }
  
  

return (
  <div
    className="productCard col-lg-2 col-5 rounded border border-1 border-secondary col-md-3 col-sm-4 d-flex p-1 flex-column justify-content-between position-relative align-items-center border m-2 bg-light   text-dark "
    style={{ maxWidth: "250px" }}
  >

        <img
      src={image}
      className="rounded card-img cardFeatureImage"
      style={{ maxWidth: "230px" }}
      alt={name}
    />
    <div className="favorited bg-dark p-2 text-center d-flex rounded-circle position-absolute top-0 start-0 m-2">
      <Heart
        onClick={() => setFavorited(!favorited)}
        fill={favorited ? "orange" : "white"}
        color={favorited ? "orange" : "white"}
        size={16}
      />
    </div>

    <div className="bg-dark text-white align-items-center rounded-pill px-2 position-absolute top-0 end-0 m-2 py-1 d-flex align-items-center mt-2">
      <Star
        onClick={() => setRated((prev) => !prev)}
        size={16}
        fill={rated ? "gold" : "white"}
        color={rated ? "gold" : "white"}
      />
      <span className="ms-1 fs-6 fw-lighter">
        {rated ? Number((ratings + 0.1).toFixed(1)) : ratings}
      </span>
    </div>
        <Link to={`/product/${slug}`} className="d-flex text-decoration-none text-black flex-column text-center">
        <span className="fs-6  text-center">{name}</span>
    <span className="fs-6 text-center fw-lighter">{category}</span>
    <span className="fw-bold">
      <span className="text-decoration-line-through fw-lighter">${price}</span>{" "}
      ${price - Math.round((price * discount) / 100)}
    </span></Link>
    
    <div className="w-100 p-1">
      <button
        onClick={() => handleAddToCart}
        className="buttonB btn w-100 fs-6 text-nowrap d-flex align-items-center justify-content-center gap-2 btn-primary px-lg-4 px-sm-1"
      >
        <span className="addToCart ">Add to Cart</span> <ShoppingCart size={18} />
      </button>
    </div>
  </div>
);}

export default Card;
