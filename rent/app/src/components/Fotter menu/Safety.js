import React from "react";
import clickChild from "../../assets/images/clickChild.svg";
import uzumChild from "../../assets/images/uzumChild.svg";
import paymeChild from "../../assets/images/paymeChild.svg";
import paynetChild from "../../assets/images/paynetChild.svg";

function Safety() {
  return (
    <div className="header_safety">
      <h1>Xavfsizlik</h1>
      <div className="about_safety">
        <p>
          Barcha to'lovlar Visa, Visa Electron, Maestro & MasterCard dan 3D
          Secure bilan
        </p>
      </div>
      <div className="click_and_uzum">
        <img src={clickChild} />
        <img src={uzumChild} />
      </div>
      <div className="payme_and_paynet">
        <img src={paymeChild} />
        <img src={paynetChild} />
      </div>
    </div>
  );
}

export default Safety;
