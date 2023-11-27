import { sortReturn } from "../../types/sortReturn";

export function* radixSort(arr: number[]): Generator<sortReturn, sortReturn> {
  const base = 4;
  let max = Number.MIN_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    yield {
      indexRead: [i],
      indexWrite: [],
      arr,
    } as sortReturn;
  }
  const buckets: number[][] = Array<Array<number>>(base).fill([]);
  for (let i = 0; i < base; i++) {
    buckets[i] = [];
  }

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= base) {
    for (let i = 0; i < arr.length; i++) {
      let x = Math.floor(arr[i] / exp) % base;
      buckets[x].push(arr[i]);
      yield {
        indexRead: [i],
        indexWrite: [],
        arr,
      } as sortReturn;
    }
    console.log(buckets);
    let arrId = 0;
    for (let i = 0; i < base; i++) {
      for (let j = 0; j < buckets[i].length; j++) {
        yield {
          indexRead: [],
          indexWrite: [arrId],
          arr,
        } as sortReturn;
        arr[arrId++] = buckets[i][j];
      }
      buckets[i] = [];
    }
    console.log(buckets);
  }

  return {
    indexRead: [],
    indexWrite: [],
    arr,
  } as sortReturn;
}
