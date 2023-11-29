import React, { useEffect, useState } from "react";
import { presentaion } from "../static/data/presentation";
import Slide from "./slide";
import "./css/presentation.css";

export default function Presentation() {
  const [curr, setCurr] = useState<number>(0);

  useEffect(() => {
    window.onkeydown = handleOnKeyPress;
  }, [curr]);

  const nextSlide = () => {
    setCurr(curr + 1);
  };

  const prevSlide = () => {
    setCurr(curr - 1);
  };

  const handleOnKeyPress = (e: KeyboardEvent) => {
    console.log(e.key, curr);
    if (e.key == "ArrowRight" && curr < presentaion.length - 1) {
      nextSlide();
    }
    if (e.key == "ArrowLeft" && curr != 0) {
      prevSlide();
    }
  };
  return (
    <>
      <div>
        <Slide slide={presentaion[curr]} id={curr} />
      </div>
      
      {curr != 0 ? <button className="prevBtn" onClick={prevSlide}>PREV</button> : <></>}
      {curr < presentaion.length - 1 ? (
        <button className="nextBtn" onClick={nextSlide}>
          NEXT
        </button>
      ) : (
        <></>
      )}
      {curr != 0 ? (
        <button className="prevBtn" onClick={prevSlide}>
          PREV
        </button>
      ) : (
        <></>
      )}
    </>
  );
}
