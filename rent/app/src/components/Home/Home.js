import React from "react";
import Products from "../Products/Products";
import TopNavbar from "../TopNavbar/Main";
import BottomNavbar from "../BottomNavbar/Main";
import Fotter from "../Fotter menu/Fotter";

function Home() {
  return (
    <div>
      <TopNavbar />
      <BottomNavbar />
      <Products />
      <Fotter />
    </div>
  );
}

export default Home;
