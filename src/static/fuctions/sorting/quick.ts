import { sortReturn } from "../../types/sortReturn";

export function* quickSort(arr: number[]): Generator<sortReturn, sortReturn> {
  let l = 0;
  let h = arr.length - 1;
  // Create an auxiliary stack
  let stack = new Array(h - l + 1);
  stack.fill(0);

  // initialize top of stack
  let top = -1;

  // push initial values of l and h to
  // stack
  stack[++top] = l;
  stack[++top] = h;

  while (top >= 0) {
    // Pop h and l
    h = stack[top--];
    l = stack[top--];

    // Set pivot element at its
    // correct position in
    // sorted array
    let temp;
    let pivot = arr[h];

    // index of smaller element
    let i = l - 1;
    for (let j = l; j <= h - 1; j++) {
      // If current element is smaller
      // than or equal to pivot
      if (arr[j] <= pivot) {
        i++;

        yield {
            indexRead: [h],
            indexWrite: [i, j],
            arr,
          } as sortReturn;
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }

    // swap arr[i+1] and arr[high]
    // (or pivot)

    temp = arr[i + 1];
    arr[i + 1] = arr[h];
    arr[h] = temp;
    yield {
        indexRead: [],
        indexWrite: [h, i + 1],
        arr,
      } as sortReturn;
    let p = i + 1;

    // If there are elements on
    // left side of pivot, then
    // push left side to stack
    if (p - 1 > l) {
      stack[++top] = l;
      stack[++top] = p - 1;
    }

    // If there are elements on
    // right side of pivot, then
    // push right side to stack
    if (p + 1 < h) {
      stack[++top] = p + 1;
      stack[++top] = h;
    }
  }
  return {
    indexRead: [],
    indexWrite: [],
    arr,
  } as sortReturn;
}
function quickSortIterative(arr: number[]) {
  // Keep popping from stack while
  // is not empty
  
}
