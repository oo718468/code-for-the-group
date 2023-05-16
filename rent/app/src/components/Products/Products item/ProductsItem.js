import React from "react";
import TopNavbar from "../../TopNavbar/Main";
import ProductsSlider from "./ProductsSlider";
import ProductsTitle from "./ProductsTitle";
import BottomNavbar from "../../BottomNavbar/Main";
import Convenience from "./Convenience";
import AboutProperty from "./AboutProperty";
import GoogleMaps from "./GoogleMaps";
import SliderBottom from "./SliderBottom";
import Fotter from "../../Fotter menu/Fotter";

function ProductsItem() {
  return (
    <>
      <TopNavbar />
      <BottomNavbar />
      <div className="container">
        <div className="header_products">
          <ProductsSlider />
          <ProductsTitle />
        </div>
        <div className="bottom_products">
          <Convenience />
          <AboutProperty />
          <GoogleMaps />
          <SliderBottom />
        </div>
        {/* <div className="footer_child">
          <Fotter />
        </div> */}
        <Fotter />
      </div>
    </>
  );
}

export default ProductsItem;
