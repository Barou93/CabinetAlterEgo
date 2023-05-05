/** @format */

import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import MobileLogo from "../../style/assets/img/logo/mobile/Logo-Alter-Ego-316x316px-White.png";
import { ListData } from "../ListData";
import SubList from "../SubList";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">
            <img src={MobileLogo} alt="logo du cabinet alter ego" />
          </Link>
        </div>
        <nav className={`header__nav ${showMenu ? "menu-open" : ""}`}>
          <ul className="header__nav__container">
            {ListData.map((list, index) => {
              if (list.subList) {
                return (
                  <li key={index} className="list-sublist sub__link">
                    {list.title}
                    <SubList item={list} index={index} />
                  </li>
                );
              } else {
                return (
                  <li key={index}>
                    <Link to={list.path || "#"}>
                      <p>{list.title} </p>
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
        <div className="header__menu-icon" onClick={toggleMenu}>
          <i className="fa-solid fa-bars bar-burger"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
