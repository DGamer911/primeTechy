import Navbar from "../components/Navbar";
import cart from "../stores/cart";
import CartItemCard from "../components/CartItemCard";
import Banner from "../components/Banner";
import Footer from "../components/Footer"
import Header from "../components/Header";
import { useState } from "react";
import "../App.css";
function Cart() {

    const [totalprice, setTotalPrice] = useState(0);
    function setTotalPriceFunc() {
        const total = cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
        setTotalPrice(total + 10);
        return totalprice;
    }
    
  const deliveryFee = 10;
  return (
    <div className="cartContainer bg-white  w-100 text-light align-items-center d-flex flex-column">
        <Header />
        <Navbar/>
      <Banner BannerText="Your Shopping Cart"/>
      <div style={{maxWidth: "700px"}} className=" w-100 my-5 cart px-2 justify-content-center ">
        <div className="cartItems ">
          <ul className="list-unstyled ">
            {cart.map((item) => (
              <li key={item.id}>
                <CartItemCard
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                />
              </li>
            ))}
          </ul>
        </div>
        <div
          className="checkout text-black d-flex position-relative flex-column  border border-1 border-secondary bg-light p-3 rounded"
          style={{ Width: "fit-content", height: "fit-content" }}
        >
            
          <h3 className="fs-4 border-1 mb-3 fw-medium border-bottom border-secondary p-2">
            Order Summary
          </h3>
          <p className="border-dotted">
            Sub Total ({cart.length} items): $
            {cart.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          </p>
          <p className="border-block">Delivery: ${deliveryFee}</p>
          <p className="border-dotted fw-bold fs-6">
            Total: ${cart.reduce(
              (total, item) => total + deliveryFee + item.price * item.quantity,
              0
            )}

          </p>
          <div className="w-100 d-flex  justify-content-center  align-items-center my-4">
            <button className="btn w-100 btn-warning ">Proceed to Checkout</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Cart;
