import React, { useState, useRef } from "react";
import DownArraw from "../../assets/images/downarrow.svg";
import UpArraw from "../../assets/images/uparrow.svg";
import sale from "../../json/sale.json";

function Sale() {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef();
  const downRef = useRef();

  // window.addEventListener("click", (e) => {
  //   if (e.target !== menuRef.current && e.target !== downRef.current) {
  //     setIsOpen(false);
  //   }
  // });
  return (
    <div className="sale">
      <div className="sale_title">
          <button onClick={() => setIsOpen(!isOpen)}>        
            <p>Sotuv</p>     
          {!isOpen ? (
            <img src={DownArraw} alt='' />
          ) : (
            <img src={UpArraw} alt="" />
          )}
          </button>
        {isOpen && (
          <div className="sale_dropdown" ref={menuRef}>
            {sale.map((item, i) => (
              <div className="sale_dropdown_box">
                <h3 onClick={() => setIsOpen(false)}>{item.city}</h3>
                {/* <h3>{item.emotions}</h3> */}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Sale;
