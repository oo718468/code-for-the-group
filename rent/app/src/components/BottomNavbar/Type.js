import React, { useState, useRef } from "react";
import DownArraw from "../../assets/images/downarrow.svg";
import UpArraw from "../../assets/images/uparrow.svg";
import TypeImage from "../../assets/images/type.svg";
import House from "../../assets/images/house.svg";
import Apartment from "../../assets/images/apartment.svg";
import Dacha from "../../assets/images/dacha.svg";
import Case from "../../assets/images/case.svg";
import Office from "../../assets/images/office.svg";

function Type() {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef();
  const downRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== downRef.current) {
      setIsOpen(false);
    }
  });
  return (
    <div className="type">
      <div className="type_title">
        <button ref={downRef} onClick={() => setIsOpen((prev) => !prev)}>
          <img src={TypeImage} alt="" />
          Turi
          {!isOpen ? (
            <img src={DownArraw} alt="" />
          ) : (
            <img src={UpArraw} alt="" />
          )}
        </button>
        {isOpen && (
          <div className="type_dropdown" ref={menuRef}>
            <div className="type_dropdown_column">
              <div className="type_dropdown_items">
                <div className="type_left">
                  <img src={House} alt="" />
                  <p>Hovli turar joy</p>
                </div>
                <div className="type_count">
                  <p>628</p>
                </div>
              </div>
              <div className="type_dropdown_items">
                <div className="type_left">
                  <img src={Apartment} alt="" />
                  <p>Xonadon</p>
                </div>
                <div className="type_count">
                  <p>1075</p>
                </div>
              </div>
              <div className="type_dropdown_items">
                <div className="type_left">
                  <img src={Dacha} alt="" />
                  <p>Dala hovli</p>
                </div>
                <div className="type_count">
                  <p>879</p>
                </div>
              </div>
              <div className="type_dropdown_items">
                <div className="type_left">
                  <img src={Office} alt="" />
                  <p>Tijorat binolari</p>
                </div>
                <div className="type_count">
                  <p>2087</p>
                </div>
              </div>
              <div className="type_dropdown_items">
                <div className="type_left">
                  <img src={Case} alt="" />
                  <p>Ofis</p>
                </div>
                <div className="type_count">
                  <p>408</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Type;
