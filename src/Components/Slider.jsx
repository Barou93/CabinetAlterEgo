/** @format */

import React, { useEffect, useState } from "react";
import { SliderImg } from "./SliderImg";
import { Link } from "react-router-dom";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [translate, setTranslate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === SliderImg.length - 1) {
        setIndex(0);
        setTranslate(0);
      } else {
        setIndex(index + 1);
        setTranslate(translate - 100);
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [index, translate]);
  const moveRight = () => {
    if (index === SliderImg.length - 1) {
      setIndex(0);
      setTranslate(0);
    } else {
      setIndex((prev) => prev + 1);
      setTranslate((prev) => prev - 100);
    }
  };

  const moveLeft = () => {
    if (index === 0) {
      return;
    } else {
      setIndex((prev) => prev - 1);
      setTranslate((prev) => prev + 100);
    }
  };

  return (
    <>
      <div className="header__slider">
        <div
          className="slider-inner"
          style={{ transform: `translateX(${translate}%)` }}
        >
          {SliderImg.map((slide) => {
            return (
              <>
                <div
                  key={slide}
                  className="slide"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.78), rgba(0, 0, 0, 0.78)), url('${slide.img}')`,
                  }}
                >
                  <div className={slide.class}>
                    <p className="slide__title">{slide.title}</p>
                    <Link to={slide.path} className="slide__cta-btn">
                      {slide.cta}
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="arrow left" onClick={moveLeft}>
          <i className="fa fa-chevron-left change"></i>
        </div>
        <div className="arrow right" onClick={moveRight}>
          <i className="fa fa-chevron-right change"></i>
        </div>
        <div className="scroll-arrow">
          <i className="fa fa-chevron-down arrow-first"></i>
          <i className="fa fa-chevron-down arrow-second"></i>
          <i className="fa fa-chevron-down arrow-third"></i>
          <i className="fa-solid fa-computer-mouse arrow-mouse"></i>
        </div>
        <svg
          className="os-intro-scroll-bg"
          width="193px"
          height="47px"
          viewBox="0 0 193 47"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M96.4967964,0.16015625 C143.388672,0.16015625 161.011719,32.3546569 193,46.4859222 L-1.02318154e-12,46.4859222 C31.6328125,29.2287075 49.6049209,0.16015625 96.4967964,0.16015625 Z"
            id="Rectangle-5"
            fill="#FFFFFF"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Slider;
