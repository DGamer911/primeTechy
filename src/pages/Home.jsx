import Header from "../components/header";
import laptopBanner from "../assets/laptopBanner.png";
import featuredProducts from "../data/FeaturedProducts";
import Card from "../components/Card";
import Footer from "../components/Footer"
import "../App.css";
import Navbar from "../components/Navbar";
import Banner from "../components/banner";


function Home() {
  return (
    <div className="bg-secondary  w-100 text-light align-items-center d-flex flex-column">
      <Header />
      <Banner BannerText="Prime Deals. Smart Prices. Save big on the tech you love 💻📱 Up to 40% OFF Today Only" />
      <Navbar />
      <div className=" main d-flex flex-column align-items-center py-3">
        <div className="imgSlider d-flex justify-content-center">
          <img src={laptopBanner} className="rounded-4 laptopBanner" alt="laptop banner" />
        </div>
        <div style={{overflow: "hidden"}} className="productSection d-flex flex-column w-100 align-items-center my-4">
          <h2 className="fw-bold">Featured Products</h2>
          <div className="products d-flex flex-wrap justify-content-center">
            {featuredProducts.map((item) => (
              <Card
                key={item.id}
                name={item.name}
                price={item.price}
                ratings={item.rating}
                image={item.image}
                discount={item.discount}
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
