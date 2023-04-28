import React, { useState, useRef } from "react";
import DownArraw from "../../assets/images/downarrow.svg";
import UpArraw from "../../assets/images/uparrow.svg";
import PriceImage from "../../assets/images/price.svg";
import Currency from "../../assets/images/currency.svg";

function Price() {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef();
  const downRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== downRef.current) {
      setIsOpen(false);
    }
  });
  return (
    <div className="price">
      <div className="price_title">
        <button ref={downRef} onClick={() => setIsOpen((prev) => !prev)}>
          <img src={PriceImage} alt="" />
          Narxi
          {!isOpen ? (
            <img src={DownArraw} alt="" />
          ) : (
            <img src={UpArraw} alt="" />
          )}
        </button>
        {isOpen && (
          <div className="price_dropdown" ref={menuRef}>
            <div className="price_parahraph">
              <p>Istalgan narxni kiriting</p>
            </div>
            <div className="price_input">
              <div className="price_input_min">
                <input type="text" placeholder="Min" />
                <img src={Currency} alt="" />
              </div>
              <div className="price_input_max">
                <input type="text" placeholder="Max" />
                <img src={Currency} alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Price;
