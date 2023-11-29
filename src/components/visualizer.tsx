import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { drawArray } from "./../static/fuctions/draw/array";
import { shuffle } from "../static/fuctions/shuffle";
import { sleep } from "../static/fuctions/sleep";
import { canvasSize } from "../static/types/canvasSize";
import { sortReturn } from "../static/types/sortReturn";
import { shuffleStyle } from "../static/types/shuffleStyle";
import "./css/visualizer.css";

export type visualizerProps = {
  algorithm: (arr: number[]) => Generator<sortReturn, sortReturn, unknown>;
  sortName: string;
  controlsEnabled?: {
    play?: boolean;
    sleepTime?: boolean;
    everyNth?: boolean;
    shuffle?: boolean;
    shuffleStyle?: boolean;
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
  const [shuffleStyleState, setShuffleStyle] =
    useState<shuffleStyle>("shuffle");
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

  useEffect(() => {
    draw();
  }, [arr]);
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
    setArr(shuffle(arr, shuffleStyleState));
    isAniRunning = false;
    await sleep(4 * animationProps.sleepTime);
    draw();
  };

  const changeShuffleStyle = (e: ChangeEvent<HTMLSelectElement>) => {
    setShuffleStyle(e.target.value as shuffleStyle);
  };

  const arrSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const size = parseInt(e.target.value);
      if (size > 0) {
        setSize(size);
      }
    } catch {}
  };
  const everyNthChange = (e: ChangeEvent<HTMLInputElement>) => {
    try {
      setEveryNth(parseInt(e.target.value));
    } catch {}
  };
  const sleepTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    try {
      setSleepTime(parseInt(e.target.value));
    } catch {}
  };

  const reset = () => {
    isAniRunning = false;
    setArr(
      Array(arrSize)
        .fill(0)
        .map((e, i) => i)
    );
  };

  return (
    <div className="visualizerContainer">
      <h2 className="sortTitle">{sortName}</h2>
      <canvas
        width={canvasSize.width}
        height={canvasSize.height}
        ref={canvasRef}
      ></canvas>
      <div className="btnContainer">
        <button onClick={reset}>Reset</button>
        <button onClick={draw}>Draw array</button>
        {controlsEnabled.play ? (
          <button onClick={run}>Run animation</button>
        ) : (
          <></>
        )}
        {controlsEnabled.shuffle ? (
          <button onClick={shuffleLocal}>shuffle array</button>
        ) : (
          <></>
        )}
      </div>
      <div className="inputContainer">
        {controlsEnabled.shuffleStyle ? (
          <div className="shuffleSelect">
            <p>Shuffle style</p>
            <select onChange={changeShuffleStyle} value={shuffleStyleState}>
              <option>shuffle</option>
              <option value="reverse">reverse</option>
              <option value="almostSorted">almost sorted</option>
            </select>
          </div>
        ) : (
          <></>
        )}
        {controlsEnabled.arrSize ? (
          <div className="inputGroup">
            <p>Array size</p>
            <input type="number" onChange={arrSizeChange} value={arrSize} />
          </div>
        ) : (
          <></>
        )}
        {controlsEnabled.everyNth ? (
          <div className="inputGroup">
            <p>Draw on nth frame</p>
            <input type="number" onChange={everyNthChange} value={everyNth} />
          </div>
        ) : (
          <></>
        )}
        {controlsEnabled.sleepTime ? (
          <div className="inputGroup">
            <p>Sleep time every frame</p>
            <input type="number" onChange={sleepTimeChange} value={sleepTime} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
