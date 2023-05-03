import React from "react";
import TopNavbar from "../../TopNavbar/Main";
import Dashboard from "../adminPanel/Dashboard";
import colors from "../../../assets/images/colors.svg";
import colors1 from "../../../assets/images/colors1.svg";
import colors2 from "../../../assets/images/colors2.svg";
import correct from "../../../assets/images/correct.svg";
import { Link } from "react-router-dom";

function TypeOfDefinitions() {
  return (
    <>
      <TopNavbar />
      <Dashboard />
      <div className="header_definitions">
        <div className="definitions_about_title">
          <h1>Tarif turini tanlang</h1>
          <p>E’loningizni imkon boricha tezroq soting</p>
        </div>
        <div className="header_card_definitions">
          <div className="definitions_card">
            <div className="definitions_img">
              <img src={colors} />
            </div>
            <div className="definitions_card_item">
              {/* <h1>icon</h1> */}
              <div className="definitions_card_item_child">
                <h2>oson start</h2>
                <h1>45 000</h1>
                <div className="correct_card">
                  <img src={correct} />
                  <p>3 kun davomida topda joylashtirish</p>
                </div>
                <p id="bir_p">0 marta ko’tarish</p>
                <p id="bir_p">0 kun davomida VIP e’lonlarda</p>
                <Link to="/typeofpay">
                  <button>
                    <span>Tanlash</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="definitions_card">
            <div className="definitions_img">
              <img src={colors1} />
            </div>
            <div className="definitions_card_item">
              {/* <h1>icon</h1> */}
              <div className="definitions_card_item_child">
                <h2>Tezkor savdo</h2>
                <h1>89 000</h1>
                <div className="correct_card">
                  <img src={correct} />
                  <p>3 kun davomida topda joylashtirish</p>
                </div>
                <div className="correct_card">
                  <img src={correct} />
                  <p>3 marta ko’tarish</p>
                </div>
                <p id="bir_p">0 kun davomida VIP e’lonlarda</p>
                <Link to="/typeofpay">
                  <button>
                    <span>Tanlash</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="definitions_card">
            <div className="definitions_img">
              <img src={colors2} />
            </div>
            <div className="definitions_card_item">
              {/* <h1>icon</h1> */}
              <div className="definitions_card_item_child">
                <h2>Turbo savdo</h2>
                <h1>260 000</h1>
                <div className="correct_card">
                  <img src={correct} />
                  <p>3 kun davomida topda joylashtirish</p>
                </div>
                <div className="correct_card">
                  <img src={correct} />
                  <p>9 marta ko’tarish</p>
                </div>
                <div className="correct_card">
                  <img src={correct} />
                  <p>7 kun davomida VIP e’lonlarda</p>
                </div>
                <Link to="/typeofpay">
                  {" "}
                  <button>
                    <span>Tanlash</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TypeOfDefinitions;
