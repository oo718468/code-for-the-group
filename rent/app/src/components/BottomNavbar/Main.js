import React from "react";
import City from "./City";
import Location from "./Location";
import Type from "./Type";
import Price from "./Price";
import Area from "./Area";
import Rooms from "./Rooms";
import Filters from "./Filters";
import Saved from "./Saved";
import Search from "./Search";
import Category from "./Category";

function Main() {
  return (
    <div className="bottom">
      <div className="container">
        <div className="main">
          <City />
          <Location />
          <Category />
          <Type />
          <Price />
          <Area />
          <Rooms />
          <Filters />
          <Saved />
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Main;
