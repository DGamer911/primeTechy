import Card from "../components/Card";
import laptops from "../data/laptop";
import smartphones from "../data/smartphones";
import tablets from "../data/tablets";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
export const allProducts = [...laptops, ...smartphones, ...tablets];

function Search() {
  const [searchFilterActive, setSearchFilterActive] = useState(false);
  function handleSearchFilter(){
    setSearchFilterActive(prev => !prev)
    console.log("clicked")
  }
  return (
    <div className="w-100 position-relative d-flex text-white flex-column align-items-center">
      <Header
      searchFilter={handleSearchFilter}
      />
      <Navbar />
      <Banner BannerText={"Browse"} />
      {searchFilterActive && (
        <div className="searchFilter  bg-light p-2">
          <div className="searchBar">
            <input
              type="text"
              className="px-3 py-2 rounded border-1"
              placeholder="Search here for Gadgets!"
            />
          </div>
          <div className="recommendedSearches"></div>
        </div>
      )}
      <div className="d-flex w-100 justify-content-center flex-wrap">
        {allProducts.map((item) => (
          <Card
            name={item.name}
            image={item.image}
            price={item.price}
            discount={item.discount}
            ratings={item.ratings}
            category={item.category}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
export default Search;
