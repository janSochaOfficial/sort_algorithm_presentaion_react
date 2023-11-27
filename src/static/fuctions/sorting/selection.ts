import { sortReturn } from "../../types/sortReturn";

export function* selectionSort(
  arr: number[]
): Generator<sortReturn, sortReturn> {
  for (let i = 0; i < arr.length; i++) {
    let maxI = 0;
    for (let j = 1; j < arr.length - i; j++) {
      yield {
        indexRead: [j - 1, j],
        indexWrite: [],
        arr,
      } as sortReturn;
      if (arr[maxI] < arr[j]) {
        maxI = j;
      }
      if (maxI != arr.length - i - 1) {
        const temp = arr[maxI];
        arr[maxI] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
      }
    }
    yield {
      indexRead: [maxI, arr.length - i - 1],
      indexWrite: [],
      arr,
    } as sortReturn;
  }
  return {
    indexRead: [],
    indexWrite: [],
    arr,
  } as sortReturn;
}
