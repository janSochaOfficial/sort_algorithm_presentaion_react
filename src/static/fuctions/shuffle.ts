import { shuffleStyle } from "../types/shuffleStyle";

export function shuffle(
  array: number[],
  shuffleStyle: shuffleStyle = "shuffle"
): number[] {
  switch (shuffleStyle) {
    case "shuffle":
      return trueShuffle(array);
    case "almostSorted":
      return almostSorted(array);
    case "reverse":
      return array.reverse();
  }
}

function trueShuffle(array: number[]): number[] {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

function almostSorted(array: number[]): number[] {
  for (let i = 0; i < array.length; i++) {
    const id = Math.floor(Math.random() * array.length);
    let id2 = id + (Math.floor(Math.random() * 11) - 5);
    if (id2 < 0) id2 = 0;
    if (id2 >= array.length) id2 = array.length - 1;
    if (id == id2) continue;
    const temp = array[id];
    array[id] = array[id2];
    array[id2] = temp;
  }
  return array;
}
