import React from "react";
import TopNavbar from "../../TopNavbar/Main";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";

function Exit() {
  return (
    <>
      <TopNavbar />
      <Dashboard />
      <div className="header_exit">
        <Link to="/">
          {" "}
          <h1>Exit</h1>
        </Link>
      </div>
    </>
  );
}

export default Exit;
