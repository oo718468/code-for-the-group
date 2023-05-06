import React, { useState, useRef } from "react";
import DownArraw from "../../assets/images/downarrow.svg";
import UpArraw from "../../assets/images/uparrow.svg";
import LocationImage from "../../assets/images/location.svg";

function Location() {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef();
  const downRef = useRef();

  // window.addEventListener("click", (e) => {
  //   if (e.target !== menuRef.current && e.target !== downRef.current) {
  //     setIsOpen(false);
  //   }
  // });
  return (
    <div className="location">
      <div onClick={() => setIsOpen(!isOpen)} className="location_title">
        <button>
          <img src={LocationImage} />
          <p>Yangiyo'l</p>
          {!isOpen ? (
            <img src={DownArraw} alt="" />
          ) : (
            <img src={UpArraw} alt="" />
          )}
        </button>
        {isOpen && (
          <div className="location_dropdown" ref={menuRef}>
            <div
              onClick={() => setIsOpen(false)}
              className="location_dropdown_column"
            >
              <div className="location_dropdown_items">
                <p>So'qoq</p>
              </div>
              <div className="location_dropdown_items">
                <p>Oqqo'rg'on</p>
              </div>
              <div className="location_dropdown_items">
                <p>Olmaliq</p>
              </div>
              <div className="location_dropdown_items">
                <p>Angren</p>
              </div>
              <div className="location_dropdown_items">
                <p>Ohangaron</p>
              </div>
              <div className="location_dropdown_items">
                <p>Bekobod</p>
              </div>
              <div className="location_dropdown_items">
                <p>G'azalkent</p>
              </div>
              <div className="location_dropdown_items">
                <p>Yangiobod</p>
              </div>
              <div className="location_dropdown_items">
                <p>Yangiobod</p>
              </div>
              <div className="location_dropdown_items">
                <p>Yangibozor</p>
              </div>
              <div className="location_dropdown_items">
                <p>Eshonguzar</p>
              </div>
              <div className="location_dropdown_items">
                <p>Chirchiq</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Location;
