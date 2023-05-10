import React from "react";
import wifi from "../../../assets/images/wifi.svg";
import muzlatgich from "../../../assets/images/muzlatgich.svg";
import tv from "../../../assets/images/tv.svg";
import washingM from "../../../assets/images/washingM.svg";
import shower from "../../../assets/images/shower.svg";
import sanuzel from "../../../assets/images/sanuzel.svg";

function Convenience() {
  return (
    <>
      <div className="top_conveniense">
        <h1>Mulkdagi qulayliklar</h1>
        <div className="header_conveniense">
          <div className="left_conveniense">
            <div className="internet">
              <img src={wifi} />
              <p>Internet</p>
            </div>
            <div className="internet">
              <img src={muzlatgich} />
              <p>Muzlatgich</p>
            </div>
            <div className="internet">
              <img src={tv} />
              <p>Televizor</p>
            </div>
          </div>
          <div className="right_conveniense">
            <div className="internet">
              <img src={washingM} />
              <p>Kir yuvish mashinasi</p>
            </div>
            <div className="internet">
              <img src={shower} />
              <p>Dush kabinasi</p>
            </div>
            <div className="internet">
              <img src={sanuzel} />
              <p>Sanuzel</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Convenience;
