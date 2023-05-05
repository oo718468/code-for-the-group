import React, { useState } from "react";
import room from "../../assets/images/room.svg";

function Rooms() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="big_rooms">
      <div className="first_room">
        <button>
          <img src={room} /> <p>xonalar</p>
        </button>
      </div>
      <div className="second_room">
        <button
          onClick={handleClick}
          className={active ? "black-btn" : "white-btn"}
        >
          <p>1</p>
        </button>
        <button
          onClick={handleClick}
          className={active ? "black-btn" : "white-btn"}
        >
          <p>2</p>
        </button>
        <button
          onClick={(e) => setActive(!active)}
          className={active ? "black-btn" : "white-btn"}
        >
          <p>3</p>
        </button>
        <button
          onClick={(e) => setActive(!active)}
          className={active ? "black-btn" : "white-btn"}
        >
          <p>4</p>
        </button>
        <button
          onClick={(e) => setActive(!active)}
          className={active ? "black-btn" : "white-btn"}
        >
          <p>5+</p>
        </button>
      </div>
    </div>
  );
}

export default Rooms;
