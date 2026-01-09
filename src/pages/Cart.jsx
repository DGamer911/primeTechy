import Navbar from "../components/Navbar";
import cartItems from "../data/cartItems";
import CartItemCard from "../components/CartItemCard";
import Banner from "../components/banner";
import Footer from "../components/Footer"
import Header from "../components/header";
import "../App.css";
function Cart() {
  const deliveryFee = 10;
  return (
    <div className="cartContainer bg-secondary  w-100 text-light align-items-center d-flex flex-column">
        <Header />
      <Banner BannerText="Your Shopping Cart"/>
      <Navbar />
      <div className="d-flex my-5 cart">
        <div className="cartItems ">
          <ul className="list-unstyled ">
            {cartItems.map((item) => (
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
          className="checkout d-flex position-relative flex-column  border border-1 border-light bg-dark p-3 ms-4 rounded"
          style={{ width: "250px", height: "fit-content" }}
        >
          <h3 className="fs-4 border-1 fw-medium border-bottom p-2">
            Order Summary
          </h3>
          <p className="border-dotted">
            Sub Total ({cartItems.length} items): $
            {cartItems.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          </p>
          <p className="border-block">Delivery: ${deliveryFee}</p>
          <p className="border-dotted fw-bold fs-6">
            Total: $
            {cartItems.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            ) + deliveryFee}
          </p>
          <div className="w-100 d-flex  justify-content-center  align-items-center my-4">
            <button className="btn btn-warning ">Proceed to Checkout</button>
          </div>{" "}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Cart;
