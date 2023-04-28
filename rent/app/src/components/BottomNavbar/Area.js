import React, { useState, useRef } from "react";
import DownArraw from "../../assets/images/downarrow.svg";
import UpArraw from "../../assets/images/uparrow.svg";
import AreaImage from "../../assets/images/area.svg";

function Area() {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef();
  const downRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== downRef.current) {
      setIsOpen(false);
    }
  });
  return (
    <div className="area">
      <div className="area_title">
        <button ref={downRef} onClick={() => setIsOpen((prev) => !prev)}>
          <img src={AreaImage} alt="" />
          Kvadrat
          {!isOpen ? (
            <img src={DownArraw} alt="" />
          ) : (
            <img src={UpArraw} alt="" />
          )}
        </button>
        {isOpen && (
          <div className="area_dropdown" ref={menuRef}>
            <div className="area_parahraph">
              <p>Istalgan maydonni kiriting</p>
            </div>
            <div className="area_input">
              <div className="area_input_min">
                <input type="text" placeholder="Min" />
                <p>
                  m <sup>2</sup>{" "}
                </p>
              </div>
              <div className="area_input_max">
                <input type="text" placeholder="Max" />
                <p>
                  m <sup>2</sup>{" "}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Area;
