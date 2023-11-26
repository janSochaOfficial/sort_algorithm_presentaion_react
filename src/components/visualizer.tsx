import React, { useEffect, useRef, useState } from "react";
import { drawArray } from "./../static/fuctions/draw/array";
import { bubleSort } from "../static/fuctions/sorting/buble";
import { shuffle } from "../static/fuctions/shuffle";
import { sleep } from "../static/fuctions/sleep";
import { canvasSize } from "../static/types/canvasSize";
import { sortReturn } from "../static/types/sortReturn";

export type visualizerProps = {
  algorithm: (arr: number[]) => Generator<sortReturn, sortReturn, unknown>;
  sortName: string;
  controlsEnabled?: {
    play?: boolean;
    sleepTime?: boolean;
    everyNth?: boolean;
    shuffle?: boolean;
    arrSize?: boolean;
    canvasSize?: boolean;
  };
  animationProps: {
    sleepTime: number;
    everyNth: number;
    arrSize: number;
    canvasSize: canvasSize;
  };
};

export default function Visualizer({
  algorithm,
  sortName,
  controlsEnabled = {
    play: true,
    shuffle: true,
  },
  animationProps,
}: visualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [ctx, setCtx] = useState<CanvasRenderingContext2D>();
  const [arrSize, setSize] = useState<number>(animationProps.arrSize);
  const [arr, setArr] = useState<number[]>([]);
  const [everyNth, setEveryNth] = useState<number>(animationProps.everyNth);
  const [sleepTime, setSleepTime] = useState<number>(animationProps.sleepTime);
  const [canvasSize, setCanvasSize] = useState<canvasSize>(
    animationProps.canvasSize
  );
  // short for is animation running
  let isAniRunning: boolean;
  // const [isAniRunning, setIsAniRunning] = useState<boolean>();

  useEffect(() => {
    isAniRunning = false;
    setArr(
      Array(arrSize)
        .fill(0)
        .map((e, i) => i)
    );
    draw();
  }, [arrSize]);

  const draw = () => {
    if (!canvasRef) return;
    if (!ctx) {
      const ctxLocal = canvasRef.current!.getContext("2d");
      if (!ctxLocal) return;
      setCtx(ctxLocal);
      drawArray(ctxLocal, arr, canvasSize);
    } else {
      drawArray(ctx, arr, canvasSize);
    }
  };
  const run = async () => {
    const carr = [...arr];
    const sortGen = algorithm(carr);
    isAniRunning = true;
    let nx = sortGen.next();
    if (!ctx) return;
    let i = 0;
    while (!nx.done && isAniRunning) {
      if (i == everyNth) {
        i = 0;
        drawArray(
          ctx,
          nx.value.arr,
          canvasSize,
          nx.value.indexRead,
          nx.value.indexWrite
        );
        await sleep(sleepTime);
      }
      nx = sortGen.next();
      i++;
    }
    if (nx?.value) {
      drawArray(
        ctx,
        nx.value.arr,
        canvasSize,
        nx.value.indexRead,
        nx.value.indexWrite
      );
    }
    isAniRunning = false;
  };

  const shuffleLocal = async () => {
    setArr(shuffle(arr));
    isAniRunning = false;
    await sleep(4 * animationProps.sleepTime);
    draw();
  };

  return (
    <div>
      <h2>{sortName}</h2>
      <canvas
        width={canvasSize.width}
        height={canvasSize.height}
        ref={canvasRef}
      ></canvas>
      <button onClick={draw}>Draw array</button>
      <button onClick={run}>Run animation</button>
      <button onClick={shuffleLocal}>shuffle array</button>
    </div>
  );
}
