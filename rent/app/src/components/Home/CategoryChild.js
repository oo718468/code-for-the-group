import React from "react";
import { useState } from "react";
import DownArraw from "../../assets/images/downarrow.svg";
import UpArraw from "../../assets/images/uparrow.svg";
import rent from "../../json/typeOfHome.json";
import home_logo from "../../assets/images/home_logo.svg";

function CategoryChild() {
  const [isOpen, setIsOpen] = useState(false);
  const [changeValue, setChangeValue] = useState("");

  const handleChange = (event) => {
    setChangeValue(event.target.value);
  };
  return (
    <div className="type_home_header">
      <div onClick={() => setIsOpen(!isOpen)} className="bottom_header">
        <div>
          <div className="header_json">
            <img src={home_logo} />
            <select value={changeValue} onChange={handleChange}>
              <option value={changeValue}>
                {" "}
                <p>Turi</p>
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
    </div>
  );
}

export default CategoryChild;
