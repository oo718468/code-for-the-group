import React, { useRef, useState, useEffect } from "react";
import DownArraw from "../../assets/images/downarrow.svg";
import UpArraw from "../../assets/images/uparrow.svg";
import rent from "../../json/typeOfHome.json";
import home_logo from "../../assets/images/home_logo.svg";
import CityChild from "./CityChild";
import location1 from "../../assets/images/location1.svg";

function TypeHome() {
  const [isOpen, setIsOpen] = useState(false);
  const [changeValue, setChangeValue] = useState("");

  const handleChange = (event) => {
    setChangeValue(event.target.value);
  };

  return (
    <div className="type_home_header_one">
      <div className="type_home_header">
        <div onClick={() => setIsOpen(!isOpen)} className="bottom_header">
          <div>
            <div className="header_json">
              <img src={location1} />
              <select>
                <option value={changeValue}>
                  <p>Shahar</p>
                </option>
                {rent.map((item) => (
                  <option key={item.id} value={item.value}>
                    <p>{item.homeType} </p>
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* <div className="second_bottom_header"></div> */}
        <CityChild />
      </div>
    </div>
  );
}

export default TypeHome;
