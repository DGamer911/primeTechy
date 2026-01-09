import React from 'react'
import "../../App.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import laptop from "../../data/laptop";
import Card from '../../components/Card';
import Banner from '../../components/banner';

function Laptops() {
  return (
    <div className='text-white bg-secondary'>
      <Header />
      <Banner BannerText="Laptops"/>
      <Navbar />
      <div  className=" p-lg-5 p-sm-1 d-flex flex-wrap justify-content-center">
        {laptop.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Laptops