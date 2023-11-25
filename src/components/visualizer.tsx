import React, { useRef, useState } from "react";
import { drawArray } from "./../static/fuctions/draw/array";
import { bubleSort } from "../static/fuctions/sorting/buble";
import { shuffle } from "../static/fuctions/shuffle";
import { sleep } from "../static/fuctions/sleep";

export default function Visualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D>();

  const [arrSize, setSize] = useState<number>(128);
  const [arr, setArr] = useState<number[]>([]);
  const [everyNth, setEveryNth] = useState<number>(2);
  const draw = () => {
    if (canvasRef) {
      const ar = Array(128)
        .fill(0)
        .map((e, i) => i);
      setArr(shuffle(ar));
      const ctx = canvasRef.current!.getContext("2d");
      if (ctx) {
        setCtx(ctx);
        drawArray(ctx, arr, { width: 896, height: 400 });
      }
    }
  };
  const run = async () => {
    const carr = [...arr];
    const sortGen = bubleSort(carr);
    let nx = sortGen.next();
    if (!ctx) return;
    let i = 0;
    while (!nx.done) {
      if (i == everyNth) {
        i = 0;
        drawArray(
          ctx,
          nx.value.arr,
          { width: 896, height: 400 },
          nx.value.indexRead,
          nx.value.indexWrite
        );
        await sleep(1);
      }
      nx = sortGen.next();
      i++;
    }
  };
  return (
    <div>
      <canvas width={896} height={400} ref={canvasRef}></canvas>
      <button onClick={draw}></button>
      <button onClick={run}></button>
    </div>
  );
}
