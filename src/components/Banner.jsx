import React from "react";
import { Smartphone, Laptop, Tablet, Watch, Cable } from "lucide-react";
function Banner({ BannerText }) {
  return (
    <div style={{boxShadow: "0 2px 4px rgba(0,0,0,0.5)"}} className="bg-light py-3 mb-2 w-100 text-center d-flex align-items-center position-relative">
      <div className="d-flex justify-content-around w-100 opacity-25">
                <Smartphone color="black"/>
        <Laptop color="black"/>
        <Tablet color="black"/>
        <Watch color="black"/>
        <Cable color="black"/>
      </div>
      <span style={{transform: "translateX(-50%)"}} className=" position-absolute text-black fw-bold start-50">{BannerText}</span>
    </div>
    );
}

export default Banner;
