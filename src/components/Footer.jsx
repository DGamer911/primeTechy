import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark mt-3 text-light pt-5 w-100">
      <div className="container">
        <div className="row g-4">


          <div className="col-md-4">
            <h5 className="fw-bold">PrimeTechy</h5>
            <p className="text-secondary small">
              Your trusted store for laptops, smartphones, tablets, and modern
              tech essentials — quality you can rely on.
            </p>
          </div>


          <div className="col-md-2">
            <h6 className="fw-semibold">Shop</h6>
            <ul className="list-unstyled">
              <li><Link to="/laptops" className="text-secondary text-decoration-none">Laptops</Link></li>
              <li><Link to="/smartphones" className="text-secondary text-decoration-none">Smartphones</Link></li>
              <li><Link to="/tablets" className="text-secondary text-decoration-none">Tablets</Link></li>
              <li><a href="#" className="text-secondary text-decoration-none">Accessories</a></li>
            </ul>
          </div>


          <div className="col-md-3">
            <h6 className="fw-semibold">Support</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-secondary text-decoration-none">Help Center</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Returns & Refunds</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Shipping Info</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Warranty</a></li>
            </ul>
          </div>


          <div className="col-md-3">
            <h6 className="fw-semibold">Company</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-secondary text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Contact</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Privacy Policy</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Terms & Conditions</a></li>
            </ul>
          </div>

        </div>

        <hr className="border-secondary mt-4" />


        <div className="text-center pb-3">
          <small className="text-secondary">
            © {new Date().getFullYear()} PrimeTechy. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
