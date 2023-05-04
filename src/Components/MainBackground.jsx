/** @format */

import React from "react";

const MainBackground = ({ image, title }) => {
  return (
    <div className="main__bg">
      <div
        className="main__bg__img"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${image}')`,
        }}
      ></div>
      <div className="main__bg__content">
        <h1 className="main__bg__content__title">{title}</h1>
      </div>
    </div>
  );
};

export default MainBackground;
