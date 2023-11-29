import { useState } from "react";
import "./App.css";
import Visualizer, { visualizerProps } from "./components/visualizer";
import { bubleSort } from "./static/fuctions/sorting/buble";
import { selectionSort } from "./static/fuctions/sorting/selection";
import { insertionSort } from "./static/fuctions/sorting/insertion";
import { quickSort } from "./static/fuctions/sorting/quick";
import { countingSort } from "./static/fuctions/sorting/counting";
import { mergeSort } from "./static/fuctions/sorting/merge";
import { radixSortLSD } from "./static/fuctions/sorting/radix";
import Presentation from "./components/presentation";

const VisualizerProps: visualizerProps = {
  algorithm: quickSort,
  sortName: "quick sort",
  animationProps: {
    sleepTime: 1,
    everyNth: 2,
    arrSize: 256,
    canvasSize: {
      width: 1024,
      height: 400,
    },
  },
  controlsEnabled: {
    play: true,
    sleepTime: true,
    everyNth: true,
    shuffle: true,
    shuffleStyle: true,
    arrSize: true
  }
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Presentation />
    </div>
  );
}

export default App;
