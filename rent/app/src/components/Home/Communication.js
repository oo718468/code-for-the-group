import React, { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

function Communication() {
  const [cardNumber, setCardNumber] = useState("");

  const input_value = useRef(null);
  const handleInput = (e) => {
    const val = e.target.value;
    setCardNumber(val);
    if (val.length === 5) {
      input_value.current.focus();
    }
  };

  return (
    <div className="header_communicat">
      <h4>Aloqa uchun ma'lumotlar</h4>
      <div className="communicat_name">
        <input type="text" placeholder="ism" />
        <input type="text" placeholder="familiya" />
      </div>
      <div className="communicat_number">
        <div className="comunicat_flags">
          <input
            onChange={handleInput}
            value={cardNumber}
            placeholder="+9989"
          />
        </div>
        <div className="comunicat_child_number">
          <input ref={input_value} placeholder="00 000 00 00" />
        </div>
      </div>
      <div className="communicat_button">
        <Link to="/definitions">
          <button>
            <p>E'lon joylashtirish</p>
          </button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Communication;
