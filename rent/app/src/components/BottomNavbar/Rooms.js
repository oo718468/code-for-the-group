import React, { useState, useRef } from "react";
import DownArraw from "../../assets/images/downarrow.svg";
import UpArraw from "../../assets/images/uparrow.svg";
import RoomsImage from "../../assets/images/room.svg";

function Rooms() {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef();
  const downRef = useRef();

  // window.addEventListener("click", (e) => {
  //   if (e.target !== menuRef.current && e.target !== downRef.current) {
  //     setIsOpen(false);
  //   }
  // });
  <img src={RoomsImage} alt="" />
  return (
    <div className="rooms">
      <div onClick={() => setIsOpen(!isOpen)} className="rooms_title">
      <button >
            <p>Xonalar</p>     
          {!isOpen ? (
            <img src={DownArraw} alt='' />
          ) : (
            <img src={UpArraw} alt="" />
          )}
          </button>
        {isOpen && (
          <div className="rooms_dropdown" ref={menuRef}>
            <div className="rooms_parahraph">
              <p>Xonalar soni</p>
            </div>
            <div className="rooms_input">
              <div className="rooms_input_min">
                <p>1</p>
              </div>
              <div className="rooms_input_min">
                <p>2</p>
              </div>
              <div className="rooms_input_min">
                <p>3</p>
              </div>
              <div className="rooms_input_min">
                <p>4</p>
              </div>
              <div className="rooms_input_min">
                <p>5+</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Rooms;
