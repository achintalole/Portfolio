import React from "react";
import "./TopBar.css";
import { Link } from "react-router-dom";
import Home from "./../home/Home";

import "@fortawesome/fontawesome-free/css/all.min.css";

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-left"></div>
      <div className="topbar-center">
        <ul className="topbar-list">
          <li className="topbar-list-items">
            <Link to="/">
              <i className="fa fa-home"> Home</i>
            </Link>
          </li>
          <li className="topbar-list-items">
            <Link to="/project">
              <i className="fas fa-project-diagram"> Project</i>
            </Link>
          </li>
          <li className="topbar-list-items">
            <Link to="/contact">
              <i className="fa fa-phone-square"> Contact</i>
            </Link>
          </li>
        </ul>
      </div>
      <div className="topbar-right"></div>
    </div>
  );
}

export default TopBar;
