import React from "react";
import { Heart, Trash } from "lucide-react";
import "../App.css";

function CartItemCard({ image, name, price, quantity, deleteItem }) {
  const [counter, setCounter] = React.useState(quantity);
  const [favorited, setFavorited] = React.useState(false);
 

  
  if (counter < 1) {
    setCounter(1);
  }

  return (
    <div className="cartItemCard w-100 d-flex align-items-center border position-relative border-1 border-secondary text-black bg-light p-3 mb-3 rounded">
      <img
        style={{ width: "100px", height: "100px" }}
        className="rounded"
        src={image}
        alt={name}
      />
      <div className="d-flex  ms-3 flex-column gap-0">
        <h3 className="fs-6 fw-medium lh-1">{name}</h3>
        <p className=" fs-6 fw-bold lh-1">Price: ${price*counter}</p>
        <div className="d-flex gap-4 text-center align-items-center">
          <button
            className="d-flex btn btn-primary "
            onClick={() => setCounter(counter - 1)}
          >
            -
          </button>
          <span className=" fs-6 quantity fw-light">{counter}</span>
          <button
            className="d-flex btn btn-primary "
            onClick={() => setCounter(counter + 1)}
          >
            +
          </button>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center position-absolute end-0  h-100 py-3 justify-content-between  me-3">
        <Heart onClick={() => setFavorited(!favorited)} fill={favorited ? "orange" : "white"} color={favorited ? "orange" : "black"} size={18} />

        <button onClick={deleteItem} className="btn btn-danger rounded p-2">
          <Trash />
        </button>
      </div>
    </div>
  );
}

export default CartItemCard;
