import { sortReturn } from "../../types/sortReturn";

export function* mergeSort(arr: number[]): Generator<sortReturn, sortReturn> {
  const n = arr.length;

  let curr_size;
  let left_start;

  for (curr_size = 1; curr_size <= n - 1; curr_size = 2 * curr_size) {
    for (left_start = 0; left_start < n - 1; left_start += 2 * curr_size) {
      var mid = Math.min(left_start + curr_size - 1, n - 1);

      var right_end = Math.min(left_start + 2 * curr_size - 1, n - 1);

      // merge
      let l = left_start;
      let m = mid;
      let r = right_end;
      var i, j, k;
      var n1 = m - l + 1;
      var n2 = r - m;

      var L = Array(n1).fill(0);
      var R = Array(n2).fill(0);

      for (i = 0; i < n1; i++) {
        L[i] = arr[l + i];
        yield {
          indexRead: [l + i],
          indexWrite: [],
          arr,
        } as sortReturn;
      }
      for (j = 0; j < n2; j++) {
        R[j] = arr[m + 1 + j];
        yield {
          indexRead: [m + 1 + j],
          indexWrite: [],
          arr,
        } as sortReturn;
      }
      i = 0;
      j = 0;
      k = l;
      while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
          arr[k] = L[i];
          i++;
        } else {
          arr[k] = R[j];
          j++;
        }
        yield {
          indexRead: [],
          indexWrite: [k],
          arr,
        } as sortReturn;
        k++;
      }

      while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
        yield {
          indexRead: [],
          indexWrite: [k],
          arr,
        } as sortReturn;
      }

      while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
        yield {
          indexRead: [],
          indexWrite: [k],
          arr,
        } as sortReturn;
      }
    }
  }

  // mergeSort2(arr, arr.length);
  return {
    indexRead: [],
    indexWrite: [],
    arr,
  } as sortReturn;
}

function mergeSort2(arr: number[], n: number) {}
function merge(arr: number[], l: number, m: number, r: number) {
  var i, j, k;
  var n1 = m - l + 1;
  var n2 = r - m;

  /* create temp arrays */
  var L = Array(n1).fill(0);
  var R = Array(n2).fill(0);

  /*
   * Copy data to temp arrays L and R
   */
  for (i = 0; i < n1; i++) L[i] = arr[l + i];
  for (j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

  /*
   * Merge the temp arrays back into arr[l..r]
   */
  i = 0;
  j = 0;
  k = l;
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  /*
   * Copy the remaining elements of L, if there are any
   */
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  /*
   * Copy the remaining elements of R, if there are any
   */
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}
