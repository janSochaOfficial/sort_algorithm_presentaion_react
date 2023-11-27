import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Visualizer, { visualizerProps } from "./components/visualizer";
import { bubleSort } from "./static/fuctions/sorting/buble";
import { selectionSort } from "./static/fuctions/sorting/selection";
import { insertionSort } from "./static/fuctions/sorting/insertion";
import { quickSort } from "./static/fuctions/sorting/quick";
import { countingSort } from "./static/fuctions/sorting/counting";
import { mergeSort } from "./static/fuctions/sorting/merge";
import { radixSort } from "./static/fuctions/sorting/radix";

const VisualizerProps: visualizerProps = {
  algorithm: radixSort,
  sortName: "quick sort",
  animationProps: {
    sleepTime: 1,
    everyNth: 2,
    arrSize: 512,
    canvasSize: {
      width: 1024,
      height: 400,
    },
  },
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Visualizer {...VisualizerProps} />
    </div>
  );
}

export default App;
