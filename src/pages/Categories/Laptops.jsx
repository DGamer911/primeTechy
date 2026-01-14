import React from 'react'
import "../../App.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import laptop from "../../data/laptop";
import Card from '../../components/Card';
import Banner from '../../components/banner';
function Laptops() {


  return (
    <div className='text-white bg-white'>
      <Header />
      <Navbar/>
      <Banner BannerText="Laptops"/>
      <div  className=" laptopGroup p-lg-5 p-sm-1 d-flex flex-wrap justify-content-center">
        {laptop.map((item, key) => (
          <Card
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            ratings={item.ratings}
            discount={item.discount}
            category={item.category}
          />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Laptops