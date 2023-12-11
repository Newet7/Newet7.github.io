import React from "react";
import headerLogo from "../../images/headerLogo.svg";
import "./Header.css";
import FollowCursor from "../Follow-cursor/FollowCursor"; // Импорт компонента FollowCursor

function Header() {
  return (
    <header>
      <FollowCursor />
      {/* <h1 className="header-title">Header</h1> */}
      <img className="header-logo" alt="headerLogo" src={headerLogo} />
      <nav>
        <ul className="nav-menu">
          <li>
            <a href="#todo" id="button-one">
              Сделал
            </a>
          </li>
          <li>
            <a href="#todo" id="button-two">
              Работаю
            </a>
          </li>
          <li>
            <a href="#todo" id="button-three">
              Учусь
            </a>
          </li>
          <li>
            <a href="#todo" id="button-four">
              Хочу сделать
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
