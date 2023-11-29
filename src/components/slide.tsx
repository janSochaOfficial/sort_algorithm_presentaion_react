import React from "react";
import { slideData } from "../static/types/slide";
import Visualizer from "./visualizer";

type slideProps = {
  slide: slideData;
  id: number;
};
export default function Slide({ slide, id }: slideProps) {
  return <div className="slide">
      <h2>{slide.title}</h2>
      <div className="content" dangerouslySetInnerHTML={{__html: slide.content}}></div>
      {
        slide.visualizer && slide.visualizerProps ? 
        <Visualizer key={id} {...slide.visualizerProps}/>
          : <></>
      }    
    </div>
}
