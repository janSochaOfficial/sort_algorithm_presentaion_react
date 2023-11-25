import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Visualizer from "./components/visualizer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Visualizer />
    </div>
  );
}

export default App;
