import React, { useState, useRef } from "react";
import DownArraw from "../../assets/images/downarrow.svg";
import UpArraw from "../../assets/images/uparrow.svg";
import newDev from "../../json/new.json";

function NewDevelopment() {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef();
  const downRef = useRef();

  // window.addEventListener("click", (e) => {
  //   if (e.target !== menuRef.current && e.target !== downRef.current) {
  //     setIsOpen(false);
  //   }
  // });
  return (
    <div className="newDev">
      <div className="newDev_title">
         <button onClick={() => setIsOpen(!isOpen)}>      
            <p>Yangi qurilgan</p>     
          {!isOpen ? (
            <img src={DownArraw} alt='' />
          ) : (
            <img src={UpArraw} alt="" />
          )}
          </button>
        {isOpen && (
          <div className="newDev_dropdown" ref={menuRef}>
            {newDev.map((item, i) => (
              <div className="newDev_dropdown_box">
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

export default NewDevelopment;
