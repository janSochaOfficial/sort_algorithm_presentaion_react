import { sortReturn } from "../../types/sortReturn";

export function* bubleSort(arr: number[]): Generator<sortReturn, sortReturn> {
  let isSorted = true;
  for (let i = 0; i < arr.length; i++) {
    isSorted = true;
    for (let j = 1; j < arr.length - i; j++) {
      yield {
        indexRead: [j - 1, j],
        indexWrite: [],
        arr,
      } as sortReturn;
      if (arr[j - 1] > arr[j]) {
        isSorted = false;
        const temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        yield {
          indexRead: [j - 1, j],
          indexWrite: [],
          arr,
        } as sortReturn;
      }
    }
    if (isSorted) break;
  }
  return {
    indexRead: [],
    indexWrite: [],
    arr,
  } as sortReturn;
}
