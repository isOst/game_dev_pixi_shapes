import { Graphics, Point } from "pixi.js";
import { random } from "src/common/utils";
import { ColorList } from "../../constants/shape.constants";

export class Shape {
  private _view: Graphics = new Graphics();
  protected _points: Point[] = [];

  constructor() {
    this.createGraphicsView();
    this.createShape();
  }

  public get view(): Graphics {
    return this._view;
  }

  /**
   * @override
   */
  public get area(): number {
    return 0;
  }

  /**
   * @override
   */
  protected createShape(): void {}

  private createGraphicsView(): void {
    this._view.beginFill(this.getFillColor(), 1);
    this._view.lineStyle(2, this.getLineColor(), 1);
  }

  private getLineColor(): number {
    const colorIndex = random(0, ColorList.LINE.length - 1);
    return ColorList.LINE[colorIndex];
  }

  private getFillColor(): number {
    const colorIndex = random(0, ColorList.FILL.length - 1);
    return ColorList.FILL[colorIndex];
  }
}
