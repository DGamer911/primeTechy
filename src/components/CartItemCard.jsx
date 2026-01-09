import React from "react";
import { Heart, Trash } from "lucide-react";
import "../App.css"

function CartItemCard({image, name, price, quantity,}) {
    const [counter, setCounter] = React.useState(quantity);
    if(counter < 1){
        setCounter(1);
    }
    const sumtotal = price * counter;

  return (
    <div style={{width: "550px"}} className="cartItemCard d-flex align-items-center border position-relative border-1 border-light bg-dark p-3 mb-3 rounded">
      <img style={{ width: "100px", height: "100px" }} className="rounded" src={image} alt={name} />
      <div className="d-flex  ms-3 flex-column gap-0">
        <h3 className="fs-6 fw-medium lh-1">{name}</h3>
        <p className=" fs-6 fw-bold lh-1">Price: ${price}</p>
        <div className="d-flex gap-4 text-center align-items-center">
          <button className="d-flex btn btn-primary " onClick={()=>setCounter(counter-1)}>-</button>
          <p className=" fs-6 quantity fw-light lh-1">{counter}</p>
          <button className="d-flex btn btn-primary " onClick={()=>setCounter(counter+1)}>+</button>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center  h-100 py-3 justify-content-between position-absolute end-0 me-3">

          <Heart fill="white" size={18} />
    
        <button className="btn btn-danger rounded p-2">
          <Trash />
        </button>
      </div>

    </div>
  );
}

export default CartItemCard;
