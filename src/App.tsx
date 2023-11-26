import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Visualizer, { visualizerProps } from "./components/visualizer";
import { bubleSort } from "./static/fuctions/sorting/buble";

const VisualizerProps: visualizerProps = {
  algorithm: bubleSort,
  sortName: "Buble sort",
  animationProps: {
    sleepTime: 1,
    everyNth: 4,
    arrSize: 128,
    canvasSize: {
      width: 896,
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
