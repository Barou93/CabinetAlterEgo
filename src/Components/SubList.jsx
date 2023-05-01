/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";

const SubMenu = ({ lists }) => {
  const [subList, setSubList] = useState(false);
  const showList = () => setSubList(!subList);

  return (
    <>
      {subList &&
        lists.subList.map((list, index) => {
          return (
            <ul key={index} className="header__sublist__container">
              <li className="header__sublist__items">
                <Link to={list.path}>
                  <p>{list.title}</p>
                </Link>
              </li>
            </ul>
          );
        })}
    </>
  );
};

export default SubMenu;
