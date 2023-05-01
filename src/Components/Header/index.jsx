/** @format */

import React from "react";
import { Link } from "react-router-dom";

import MobileLogo from "../../style/assets/img/logo/mobile/Logo-Alter-Ego-316x316px-White.png";
import { ListData } from "../ListData";
import SubList from "../SubList";
import Slider from "../Slider";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">
            <img src={MobileLogo} alt="logo du cabinet alter ego" />
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header__nav__container">
            {ListData.map((list, index) => {
              if (list.subList) {
                return (
                  <li key={index}>
                    <Link to={list.path || "#"}>
                      <p>{list.title} </p>
                      <SubList lists={list} index={index} />
                    </Link>
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
      </div>
      <Slider />
    </div>
  );
};

export default Header;
