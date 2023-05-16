import React from "react";
import DownloadApp from "./DownloadApp";
import AirHouse from "./AirHouse";
import Cooperation from "./Cooperation";
import AboutUs from "./AboutUs";
import Safety from "./Safety";

function Fotter() {
  return (
    <div className="container">
      <div className="footer">
        <div className="footer_child">
          <DownloadApp />
          <div className="footer_items_header">
            <AirHouse />
            <Cooperation />
            <AboutUs />
            <Safety />
          </div>

          <div className="footer_bottom">
            <h1>
              «2023© XK MCHJ «Airhouse inc». STIR 3024619637. Barcha huquqlar
              himoyalangan»
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fotter;
