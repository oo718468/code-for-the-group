import React from "react";
import area from "../../assets/images/area.svg";

function RoomSize() {
  return (
    <div className="header_room_size">
      <div className="first_room_size">
        <button>
          <img src={area} />
          <p>Kvadrat</p>
        </button>
      </div>
      <div className="second_room_size">
        <div className="room_size_child_one">
          <input placeholder="umumiy maydon" />
          <p>
            m<sup>2</sup>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RoomSize;
