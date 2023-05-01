import React, { useRef, useState } from "react";
import DownArraw from "../../assets/images/downarrow.svg";
import UpArraw from "../../assets/images/uparrow.svg";
import rent from "../../json/typeOfHome.json";
import home_logo from "../../assets/images/home_logo.svg";

function TypeHome() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="type_home_header">
      <div onClick={() => setIsOpen(!isOpen)} className="bottom_header">
        <img src={home_logo} />
        <button>
          <p>Uy turi </p>
          {!isOpen ? (
            <img src={DownArraw} alt="" />
          ) : (
            <img src={UpArraw} alt="" />
          )}
        </button>

        <div>
          {isOpen && (
            <div className="header_json">
              <ul>
                {rent.map((menu) => (
                  <li key={menu} onClick={() => setIsOpen(false)}>
                    {menu.homeType}
                  </li>
                ))}
              </ul>
            </div>
          )}{" "}
        </div>
      </div>

      <div className="second_bottom_header">
        <p>Ko'p qavatli</p>
      </div>
    </div>
  );
}

export default TypeHome;
