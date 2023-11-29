import { bubleSort, quickSort } from "../fuctions/sorting";
import { slideData } from "../types/slide";

export const presentaion = [
  {
    title: "why bubble sort?",
    content: "<p>bc <em>i</em> want to do it slow</p>",
    visualizer: true,
    visualizerProps: {
      algorithm: bubleSort,
      sortName: "",
      animationProps: {
        sleepTime: 1,
        everyNth: 2,
        arrSize: 128,
        canvasSize: {
          width: 1024,
          height: 400,
        },
      },
      controlsEnabled: {
        play: true,
        shuffle: true,
        shuffleStyle: true,
      },
    },
  } as slideData,
  {
    title: "why quick sort?",
    content: "bc i want to do it quick",
    visualizer: true,
    visualizerProps: {
      algorithm: quickSort,
      sortName: "",
      animationProps: {
        sleepTime: 1,
        everyNth: 1,
        arrSize: 256,
        canvasSize: {
          width: 1024,
          height: 400,
        },
      },
      controlsEnabled: {
        play: true,
        shuffle: true,
        shuffleStyle: true,
      },
    },
  } as slideData,
] as const;
