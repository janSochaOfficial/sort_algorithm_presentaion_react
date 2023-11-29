import { sortReturn } from "../../types/sortReturn";

export function* insertionSort(
  arr: number[]
): Generator<sortReturn, sortReturn> {
  for (let i = 1; i < arr.length; i++) {
    let breakPoint = -1;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] > arr[j]) {
        breakPoint = j;
        break;
      } else {
        yield {
          indexRead: [j, i],
          indexWrite: [],
          arr,
        } as sortReturn;
      }
    }
    for (let j = breakPoint + 1; j <= i; j++) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      yield {
        indexRead: [],
        indexWrite: [j, i],
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
