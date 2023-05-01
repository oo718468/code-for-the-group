import React, { useState, useRef } from "react";
import DownArraw from "../../assets/images/downarrow.svg";
import UpArraw from "../../assets/images/uparrow.svg";

function City() {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef();
  const downRef = useRef();

  // window.addEventListener("click", (e) => {
  //   if (e.target !== menuRef.current && e.target !== downRef.current) {
  //     setIsOpen(false);
  //   }
  // });
  return (
    <div className="city">
      <div onClick={() => setIsOpen(!isOpen)} className="city_title">
         <button >
            <p>Toshkent</p>     
          {!isOpen ? (
            <img src={DownArraw} alt='' />
          ) : (
            <img src={UpArraw} alt="" />
          )}
          </button>
        {isOpen && (
          <div className="city_dropdown" ref={menuRef}>
            <div onClick={() => setIsOpen(false)} className="city_dropdown_column">
              <div className="city_dropdown_items">
                <p>Andijan viloyati</p>
              </div>
              <div className="city_dropdown_items">
                <p>Buxoro viloyati</p>
              </div>
              <div className="city_dropdown_items">
                <p>Jizzax viloyati</p>
              </div>
              <div className="city_dropdown_items">
                <p>Qoraqalpog'iston</p>
              </div>
              <div className="city_dropdown_items">
                <p>Qashqadaryo viloyati</p>
              </div>
              <div className="city_dropdown_items">
                <p>Navoi viloyati</p>
              </div>
              <div className="city_dropdown_items">
                <p>Namangan viloyati</p>
              </div>
              <div className="city_dropdown_items">
                <p>Samarqand viloyati</p>
              </div>
              <div className="city_dropdown_items">
                <p>Surxandaryo viloyati</p>
              </div>
              <div className="city_dropdown_items">
                <p>Sirdaryo viloyati</p>
              </div>
              <div className="city_dropdown_items">
                <p>Toshkent viloyati</p>
              </div>
              <div className="city_dropdown_items">
                <p>Xorazm viloyati</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default City;
