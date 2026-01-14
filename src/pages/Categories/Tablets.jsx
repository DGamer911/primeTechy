import React from 'react'
import "../../App.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import tablets from "../../data/tablets";
import Card from '../../components/Card';
import Banner from '../../components/Banner';

function Tablets() {
  return (
    <div className='text-white bg-white'>
      <Header />
      <Navbar/>
      <Banner BannerText="Tablets"/>
      <div  className="tabletGroup p-lg-5 p-sm-1 d-flex flex-wrap justify-content-center">
        {tablets.map((item) => (
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

export default Tablets;