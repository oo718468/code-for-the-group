import React from "react";
import findImage from "../../assets/images/next.svg";

function Search() {
  return (
    <div className="find">
      <button>Qidirish</button>
      <img src={findImage} alt="" />
    </div>
  );
}

export default Search;
