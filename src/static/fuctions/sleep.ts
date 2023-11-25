/**
 * @param time time in ms
 * @returns promise that will resolve in given number of miliseconds
 */
export function sleep(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
