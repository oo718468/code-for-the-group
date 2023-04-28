import React, { useState, useRef } from "react";
import language from "../../assets/images/language.svg";
import languageData from "../../json/language.json";

function Language() {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef();
  const downRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== downRef.current) {
      setIsOpen(false);
    }
  });
  return (
    <div className="language">
      <div className="language_title">
        <button ref={downRef} onClick={() => setIsOpen((prev) => !prev)}>
          UZ
          <img src={language} alt="" />
        </button>

        {isOpen && (
          <div className="language_dropdown" ref={menuRef}>
            {languageData.map((item, i) => (
              <div className="language_dropdown_box">
                <h3>{item.language}</h3>
                {/* <h3>{item.emotions}</h3> */}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Language;
