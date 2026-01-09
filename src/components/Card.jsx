import React from "react";
import { Star } from "lucide-react";
import { ShoppingCart } from "lucide-react";

function Card({ name, price, ratings, image, discount }) {

  const [cartCount, setCartCount] = React.useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };
  return (
    <div
      className="card d-flex flex-column align-items-center border px-3 py-2 m-2 bg-light text-dark rounded"
      style={{ width: "250px" }}
    >
      <img src={image} className="rounded cardFeatureImage" style={{maxWidth: "230px"}} alt={name} />
      <h2 className="fs-6 text-center">{name}</h2>
      <p className="fw-bold">Price: ${price}</p>
      <button onClick={handleAddToCart} className="buttonB btn btn-primary rounded-pill px-lg-4 px-sm-1">
        Add to Cart <ShoppingCart />
      </button>
    </div>
  );
}

export default Card;
