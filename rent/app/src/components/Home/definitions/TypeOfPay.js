import React from "react";
import TopNavbar from "../../TopNavbar/Main";
import Dashborad from "../../Home/adminPanel/Dashboard";
import clickPay from "../../../assets/images/clickPay.svg";
import payMePay from "../../../assets/images/payMePay.svg";
import paynetPay from "../../../assets/images/paynetPay.svg";

function TypeOfPay() {
  return (
    <>
      <TopNavbar />
      <Dashborad />
      <div className="typeofpay">
        <div className="child_type_pay">
          <h1>To’lov turini tanlang</h1>
          <p>TypeOfPay</p>
        </div>
        <div className="pay_cards">
          <div className="pay_cards_child">
            <img src={clickPay} />
          </div>
          <div className="pay_cards_child">
            <img src={payMePay} />
          </div>
          <div className="pay_cards_child">
            <img src={paynetPay} />
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default TypeOfPay;
