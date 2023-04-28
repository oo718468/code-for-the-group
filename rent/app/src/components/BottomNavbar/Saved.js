import React from "react";
import SavedImage from "../../assets/images/save.svg";

function Saved() {
  return (
    <div className="saved">
      <img src={SavedImage} alt="" />
      <button>Saqlangan</button>
    </div>
  );
}

export default Saved;
