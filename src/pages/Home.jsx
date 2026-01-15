import Header from "../components/Header";
import featuredProducts from "../data/FeaturedProducts";
import Card from "../components/Card";
import Footer from "../components/Footer";
import "../App.css";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

function Home() {
  return (
    <div className="bg-white  w-100 text-light align-items-center d-flex flex-column">
      <Header />
      <Navbar />
      <Banner BannerText="Home" />
      <div className=" main d-flex flex-column align-items-center py-3">
        <div className="imgDisplay flex-wrap px-4  d-flex gap-2">
          <div className="left flex-grow-1">
            <div className=" rounded-4 p-3 border-secondary border d-flex flex-column imgSlider d-flex justify-content-end">
              <div className="cardBanner z-3">
                <h1 className="text-white fs-4 fw-medium">Apple Ecosystem</h1>
                <p style={{ maxWidth: "600px" }} className="text-white ">
                  Power, Performance. Precision Seamlessly connected to your
                  Apple world.
                </p>
                <div className="d-flex gap-2">
                  <button className="p-2 btn btn-warning rounded-3">
                    Explore Now
                  </button>
                  <button className="p-2 btn btn-light border rounded-3 ">
                    View Collections
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="right flex-grow-2 d-flex flex-column gap-2">
            <div className="upper d-flex gap-2">
              <div className="rounded-4  d-flex flex-column justify-content-end border-secondary border d samsung p-3">
                <div className="cardBanner z-3">
                  <h1 className="text-white fs-4 fw-medium">
                    Samsung Ecosystem
                  </h1>
                  <p className="text-white ">
                    One Galaxy. Endless possibilities. Seamlessly connected
                    devices for work, play, and life.
                  </p>
                </div>
                <button className="p-2 btn btn-warning rounded-3">
                  Explore Galaxy
                </button>
              </div>
              <div className="rounded-4 d-flex flex-column justify-content-end border-secondary border d p-3 laptop">
                <div className="z-3 cardBanner">
                  <h1 className="text-white fs-3 fw-medium">Gaming Laptops</h1>
                  <p className="text-white ">
                    Built for Gamers. Powered for Victory. Next-gen graphics.
                    Extreme Performance
                  </p>
                </div>
                <button className="p-2 btn btn-warning rounded-3">
                  Explore Deals
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ overflow: "hidden" }}
          className="productSection d-flex flex-column w-100 align-items-center my-4"
        >
          <h2 className="fw-bold text-black">Featured Products</h2>
          <div className=" products d-flex flex-wrap justify-content-center">
            {featuredProducts.map((item) => (
              <Card
                key={item.id}
                name={item.name}
                price={item.price}
                category={item.category}
                ratings={item.rating}
                image={item.image}
                discount={item.discount}
                slug={item.slug}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Home;
