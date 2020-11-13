import React from "react";
import "./header.css";
import logo from "../../assets/title.svg";
import SearchIcon from "@material-ui/icons/Search";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header__navigation">
        <ul>
          <li>
            <a href="#" className="activeLink">
              Latest
            </a>
          </li>
          <li>
            <a href="#">Political</a>
          </li>
          <li>
            <a href="#">BBC</a>
          </li>
          <li>
            <a href="#">International</a>
          </li>
          <li>
            <a href="#">Local</a>
          </li>
          <li>
            <a href="#">Celebrity</a>
          </li>
        </ul>
        <div className="search">
          <SearchIcon />
        </div>
      </div>
    </header>
  );
}
