import { Shape } from "./shape";
import { ShapeSize } from "src/view/constants/shape.constants";
import { random } from "src/common/utils";

export class Ellipse extends Shape {
  private _radiusOne: number;
  private _radiusTwo: number;

  public override get area(): number {
    return Math.ceil(Math.PI * this._radiusOne * this._radiusTwo);
  }

  protected override createShape(): void {
    this._radiusOne = random(ShapeSize.WIDTH_MIN / 2, ShapeSize.WIDTH_MAX / 2);
    this._radiusTwo = random(ShapeSize.WIDTH_MIN / 2, ShapeSize.WIDTH_MAX / 2);
    this.view.drawEllipse(0, 0, this._radiusOne, this._radiusTwo);
  }
}
