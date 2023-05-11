/** @format */

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SubMenu = ({ item }) => {
  const [subListData, setSubListData] = useState(false);
  const subListRef = useRef(null);

  const showList = () => setSubListData(!subListData);

  useEffect(() => {
    const handleScroll = () => {
      setSubListData(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <i className="fa fa-chevron-down down-list" onClick={showList}></i>
      <div
        className={
          (subListData && window.pageYOffset) === 0
            ? "header__sublist open"
            : "header__sublist"
        }
        ref={subListRef}
      >
        <ul className="header__sublist__container">
          {subListData &&
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
  item: PropTypes.shape({
    subList: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default SubMenu;
