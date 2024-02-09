import { Point } from "pixi.js";
import { Shape } from "./shape";
import { ShapeSize } from "src/view/constants/shape.constants";
import { calculatePolygonArea, random } from "src/common/utils";

export class Pentagon extends Shape {
  public override get area(): number {
    return Math.ceil(calculatePolygonArea(this._points));
  }

  protected override createShape(): void {
    this._points = [
      new Point(
        random(ShapeSize.WIDTH_MAX / 3, (ShapeSize.WIDTH_MAX * 2) / 3),
        random(0, ShapeSize.HEIGHT_MAX / 3)
      ),
      new Point(
        random((ShapeSize.WIDTH_MAX * 2) / 3, ShapeSize.WIDTH_MAX),
        random(ShapeSize.HEIGHT_MAX / 3, (ShapeSize.HEIGHT_MAX * 2) / 3)
      ),
      new Point(
        random(ShapeSize.WIDTH_MAX / 2, ShapeSize.WIDTH_MAX),
        random((ShapeSize.HEIGHT_MAX * 2) / 3, ShapeSize.HEIGHT_MAX)
      ),
      new Point(
        random(0, ShapeSize.WIDTH_MAX / 2),
        random((ShapeSize.HEIGHT_MAX * 2) / 3, ShapeSize.HEIGHT_MAX)
      ),
      new Point(
        random(0, ShapeSize.WIDTH_MAX / 3),
        random(ShapeSize.HEIGHT_MAX / 3, (ShapeSize.HEIGHT_MAX * 2) / 3)
      )
    ];
    const vertexes = this._points.reduce((prev, curr) => {
      return Object.values(prev).concat(Object.values(curr));
    });
    this.view.drawPolygon(vertexes);
  }
}
