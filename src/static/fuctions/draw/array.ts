import { canvasColors } from "../../../consts";
import { canvasSize } from "../../types/canvasSize";
import { clearCanvas } from "./clear";

/**
 * Draws an array onto canvas using given context
 * @param ctx canvas context
 * @param arr array to draw
 * @param size size of HTML canvas
 */
export function drawArray(
  ctx: CanvasRenderingContext2D,
  arr: number[],
  size: canvasSize,
  readIndex: number[] = [],
  writeIndex: number[] = []
) {
  clearCanvas(ctx, size);

  const arrSize = arr.length;
  const elementWidth = size.width / arrSize;

  ctx.fillStyle = canvasColors.itemColor;
  arr.forEach((el, i) => {
    if (readIndex.includes(i)) {
      ctx.fillStyle = canvasColors.readColor;
    }
    if (writeIndex.includes(i)) {
      ctx.fillStyle = canvasColors.writeColor;
    }

    const x = i * elementWidth;
    const h = (el * size.height) / arrSize;
    ctx.fillRect(x, size.height, elementWidth, -h);
    ctx.fillStyle = canvasColors.itemColor;
  });
}
