import { canvasColors } from "../../../consts";
import { canvasSize } from "../../types/canvasSize";

export function clearCanvas(ctx: CanvasRenderingContext2D, size: canvasSize) {
  ctx.fillStyle = canvasColors.bgColor;
  ctx.fillRect(0, 0, size.width, size.height);
}
