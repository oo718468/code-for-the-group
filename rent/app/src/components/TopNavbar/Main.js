import React from "react";
import "../../style/style.css";
import Logo from "../../assets/images/logo.svg";
import Search from "../../assets/images/search.svg";
import profile from "../../assets/images/profile.svg";
import Rent from "./Rent";
import Sale from "./Sale";
import NewDevelopment from "./NewDevelopment";
import Language from "./Language";
import { Link } from "react-router-dom";
import humburger from "../../assets/images/humburger.svg";

function Main() {
  return (
    <div className="topNavbar">
      <div className="container">
        <div className="navbarFlex">
          <div className="humburger_menu">
          <img src={humburger} />
          </div>
          <div className="logo">
         <Link to="/" ><div><img src={Logo} alt="" /></div></Link>  
          </div>
          <div className="saleBar">
            <Sale />
            <Rent />
            <NewDevelopment />
          </div>
          <div className="search">
            <input type="text" placeholder="Nimani qidiryapsiz?" />
            <img src={Search} alt="" />
          </div>
          <div className="register">
            <div className="language">
              <Language />
            </div>
            <div className="login">
              <button>Shaxsiy</button>
              <img src={profile} alt="" />
            </div>
            <div className="apply">
             <Link to="/announcement" > <div><button>E’lon berish</button></div></Link> 
            </div>
          </div>
        </div>
        <div className="search_child">
            <input type="text" placeholder="Nimani qidiryapsiz?" />
            <img src={Search} alt="" />
          </div>
      </div>
    </div>
  );
}

export default Main;
