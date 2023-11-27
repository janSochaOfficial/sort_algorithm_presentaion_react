import { sortReturn } from "../../types/sortReturn";

export function* countingSort(
  arr: number[]
): Generator<sortReturn, sortReturn> {
  let min = Number.MAX_VALUE,
    max = Number.MIN_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    yield {
      indexRead: [i],
      indexWrite: [],
      arr,
    } as sortReturn;
  }
  const couting = Array(max - min + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    couting[arr[i]]++;
    yield {
      indexRead: [i],
      indexWrite: [],
      arr,
    } as sortReturn;
  }

  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    while (couting[j]) {
      couting[j]--;
      arr[i++] = j;
      yield {
        indexRead: [],
        indexWrite: [i],
        arr,
      } as sortReturn;
    }
  }

  return {
    indexRead: [],
    indexWrite: [],
    arr,
  } as sortReturn;
}
