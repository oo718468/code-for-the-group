import React from "react";
import instagram from "../../assets/images/instagram.svg";

function AirHouse() {
  return (
    <div className="header_airhouse">
      <h1 id="air">AirHouse</h1>
      <div className="callcentr">
        <h1>Qo’llab - quvvatlash xizmati</h1>
      </div>
      <div className="air_phone_number">
        <p>+998 88 012 97 47</p>
        <p>+998 88 012 97 47</p>
      </div>
      <div className="air_log">
        <img src={instagram} />
        <img src={instagram} />
        <img src={instagram} />
      </div>
    </div>
  );
}

export default AirHouse;
