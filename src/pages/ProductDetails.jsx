import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import featuredProducts from "../data/FeaturedProducts";


const ProductDetails = () => {
  const { slug } = useParams();
  const [detail, setDetail] = useState(null);
  console.log(featuredProducts)
  const navigate = useNavigate();
  featuredProducts.forEach(p => {
    console.log("Comparing", p.slug, "vs", slug)
  })
 useEffect(() => {
  const product = featuredProducts.find(
    item => item.slug?.toLowerCase() === slug?.toLowerCase()
  );

  setDetail(product || null);
}, [slug]);


  if (!detail) {
    return (
      <div className="container my-4">
        <h2>Product Not Found</h2>
        <button className="btn btn-primary" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-6">
          <img src={detail.image} alt={detail.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{detail.name}</h2>
          <p>Category: {detail.category}</p>
          <p>Price: ${detail.price}</p>
          <p>Discount: {detail.discount}%</p>
          <p>Ratings: {detail.rating}</p>
        </div>
      </div>
    </div>
  );}
  export default ProductDetails;