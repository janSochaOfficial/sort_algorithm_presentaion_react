import { sortReturn } from "../../types/sortReturn";

export function* insertionSort(
  arr: number[]
): Generator<sortReturn, sortReturn> {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      
      if (arr[i] < arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        yield {
            indexRead: [],
            indexWrite: [j, i],
            arr,
          } as sortReturn;
      }
      else{
        yield {
            indexRead: [j, i],
            indexWrite: [],
            arr,
          } as sortReturn;
      }
    }
  }
  return {
    indexRead: [],
    indexWrite: [],
    arr,
  } as sortReturn;
}
