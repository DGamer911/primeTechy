import React from "react";

function Banner({ BannerText }) {
  return (
    <p className="bannerTitle bg-warning text-center d-flex py-2 mb-0 w-100 justify-content-center">
      {BannerText}
    </p>
  );
}

export default Banner;
