/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SubMenu = ({ item }) => {
  const [subList, setSubList] = useState(false);
  const showList = () => setSubList(!subList);

  return (
    <>
      <i className="fa fa-chevron-down down-list" onClick={showList}></i>
      <div className={subList ? "header__sublist open" : "header__sublist"}>
        <ul className="header__sublist__container">
          {subList &&
            item.subList.map((list, index) => {
              return (
                <li key={index} className="header__sublist__items">
                  <Link to={list.path}>
                    <p>{list.title}</p>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

SubMenu.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SubMenu;
