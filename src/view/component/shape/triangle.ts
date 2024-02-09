import { Point } from "pixi.js";
import { Shape } from "./shape";
import { ShapeSize } from "src/view/constants/shape.constants";
import { calculatePolygonArea, random } from "src/common/utils";

export class Triangle extends Shape {
  public override get area(): number {
    return Math.ceil(calculatePolygonArea(this._points));
  }

  protected override createShape(): void {
    this._points = [
      new Point(random(0, ShapeSize.WIDTH_MAX), random(0, ShapeSize.HEIGHT_MAX / 2)),
      new Point(
        random(ShapeSize.WIDTH_MAX / 2, ShapeSize.WIDTH_MAX),
        random(0, ShapeSize.HEIGHT_MAX / 2)
      ),
      new Point(
        random(0, ShapeSize.WIDTH_MAX / 2),
        random(ShapeSize.HEIGHT_MAX / 2, ShapeSize.HEIGHT_MAX)
      )
    ];
    const vertexes = this._points.reduce((prev, curr) => {
      return Object.values(prev).concat(Object.values(curr));
    });
    this.view.drawPolygon(vertexes);
  }
}
