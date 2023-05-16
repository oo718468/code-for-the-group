import React from "react";
import { useState } from "react";
import rent from "../../json/typeOfHome.json";
import home_logo from "../../assets/images/home_logo.svg";
import CityChild from "./CityChild";
import CategoryChild from "./CategoryChild";

function TypeChild() {
  const [isOpen, setIsOpen] = useState(false);
  const [changeValue, setChangeValue] = useState("");

  const handleChange = (event) => {
    setChangeValue(event.target.value);
  };
  return (
    <div className="type_home_header_one1">
      <div className="type_home_header">
        <div onClick={() => setIsOpen(!isOpen)} className="bottom_header">
          <div>
            <div className="header_json">
              <img src={home_logo} />
              <select>
                <option value={changeValue}>
                  <p>Toifa</p>
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
        <CategoryChild />
      </div>
    </div>
  );
}

export default TypeChild;
