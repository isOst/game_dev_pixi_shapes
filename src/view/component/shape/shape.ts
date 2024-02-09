import { Graphics, Point } from "pixi.js";
import { random } from "src/common/utils";
import { ColorList } from "../../constants/shape.constants";
import { EventManager } from "src/core/event-manager";
import { EventName } from "src/common/event.constants";

export class Shape {
  private _view: Graphics = new Graphics();
  protected _points: Point[] = [];

  constructor() {
    this.createGraphicsView();
    this.createShape();
    this.addShapeInteraction();
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

  private addShapeInteraction(): void {
    this._view.eventMode = "static";
    this._view.cursor = "pointer";
    this._view.onpointerdown = () => {
      EventManager.instance.emit(EventName.SHAPE_INTERACT, this);
    };
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
