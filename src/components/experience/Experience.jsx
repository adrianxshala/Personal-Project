import React, { useState, useEffect, useRef } from "react";
import "./LineAnimation.css";
import image3 from "../../assets/icon/react.png";
import Test from "./Test";
const LineAnimation = () => {
  const [widths, setWidths] = useState({
    html: 0,
    css: 0,
    js: 0,
    react: 0,
  });

  const lineRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidths({
            html: 20,
            css: 15,
            js: 10,
            react: 25,
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Adjust as needed
    );

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }

    return () => {
      if (lineRef.current) {
        observer.unobserve(lineRef.current);
      }
    };
  }, []);

  return (
    <div className="experience h-screen w-full pt-9 " ref={lineRef}>
      <h1 className="text-center font-montserrat text-3xl py-[50px]">
        Experience
      </h1>
      <div className="flex justify-center items-center pb-[100px] pt-[100px]">
        <div className="w-[50%]">
          <div className="line-container pl-9 pb-5">
            <span className="label text-xl font-montserrat">HTML</span>
            <div
              className="line h-2 rounded-md"
              style={{ width: `${widths.html}em` }}
            />
          </div>
          <div className="line-container pl-9 pb-5">
            <span className="label text-xl font-montserrat">CSS</span>
            <div
              className="line h-2 rounded-md "
              style={{ width: `${widths.css}em` }}
            />
          </div>
          <div className="line-container  pl-9 pb-5">
            <span className="label text-xl font-montserrat">Java Script</span>
            <div
              className="line h-2 rounded-md "
              style={{ width: `${widths.js}em` }}
            />
          </div>
          <div className="line-container pl-9 pb-5">
            <span className="label text-xl font-montserrat">React Js</span>
            <div
              className="line h-2 rounded-md "
              style={{ width: `${widths.react}em` }}
            />
          </div>
        </div>
        <div className="">
          <img className="App-logo" src={image3} alt="iamge3" />{" "}
        </div>
      </div>
      <Test />
    </div>
  );
};

export default LineAnimation;
