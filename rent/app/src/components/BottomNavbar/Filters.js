import React, { useState } from "react";
import DownArraw from "../../assets/images/downarrow.svg";
import UpArraw from "../../assets/images/uparrow.svg";
import rent from "../../json/rent.json";
import FiltersImage from "../../assets/images/filter.svg";

function Area() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="filters">
      <div className="filters_title">
        <button onClick={() => setIsOpen((prev) => !prev)}>
          <img src={FiltersImage} alt="" />
          <span> Ko'proq filtrlar</span>
          {!isOpen ? (
            <img src={DownArraw} alt="" />
          ) : (
            <img src={UpArraw} alt="" />
          )}
        </button>
        {isOpen && (
          <div className="filters_dropdown">
            {rent.map((item, i) => (
              <div className="filters_dropdown_box">
                <h3>{item.city}</h3>
                {/* <h3>{item.emotions}</h3> */}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Area;
