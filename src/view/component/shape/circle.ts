import { Shape } from "./shape";
import { ShapeSize } from "src/view/constants/shape.constants";
import { random } from "src/common/utils";

export class Circle extends Shape {
  private _radius: number;

  public override get area(): number {
    return Math.ceil(Math.PI * Math.pow(this._radius, 2));
  }

  protected override createShape(): void {
    this._radius = random(ShapeSize.WIDTH_MIN / 2, ShapeSize.WIDTH_MAX / 2);
    this.view.drawCircle(0, 0, this._radius);
  }
}
