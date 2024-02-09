import { Point } from "pixi.js";
import { random } from "src/common/utils";
import { Circle } from "src/view/component/shape/circle";
import { Ellipse } from "src/view/component/shape/ellipse";
import { Hexagon } from "src/view/component/shape/hexagon";
import { Pentagon } from "src/view/component/shape/pentagon";
import { Rectangle } from "src/view/component/shape/rectangle";
import { Shape } from "src/view/component/shape/shape";
import { Triangle } from "src/view/component/shape/triangle";
import { AppResolution } from "src/view/constants/app.constants";

const SHAPES_PER_SECOND_MIN = 1;
const SHAPES_PER_SECOND_MAX = 20;

export class ShapesService {
  private _shapes: Shape[] = [];
  private _shapesPerSecond: number = 1;
  private _timeToGenerate: number = 0;
  private _elapsedGenerationTimeCounter: number = 0;
  private _predefinedShapePosition: Point | null = null;

  constructor() {
    this.setTimeToGenerate();
  }

  public getShapesPerSecond(): number {
    return this._shapesPerSecond;
  }

  public updateElapsedGenTime(time: number): void {
    this._elapsedGenerationTimeCounter += time;
  }

  public dropElapsedGenTime(): void {
    this._elapsedGenerationTimeCounter = 0;
  }

  public isAllowToGenerate(): boolean {
    return this._elapsedGenerationTimeCounter > this._timeToGenerate;
  }

  public increaseShapesPerSecond(): void {
    const newShapesPerSec = this._shapesPerSecond + 1;
    if (newShapesPerSec > SHAPES_PER_SECOND_MAX) {
      this._shapesPerSecond = SHAPES_PER_SECOND_MAX;
    } else {
      this._shapesPerSecond = newShapesPerSec;
    }
    this.setTimeToGenerate();
    this.dropElapsedGenTime();
  }

  public decreaseShapesPerSecond(): void {
    const newShapesPerSec = this._shapesPerSecond - 1;
    if (newShapesPerSec < SHAPES_PER_SECOND_MIN) {
      this._shapesPerSecond = SHAPES_PER_SECOND_MIN;
    } else {
      this._shapesPerSecond = newShapesPerSec;
    }
    this.setTimeToGenerate();
    this.dropElapsedGenTime();
  }

  public getShapesNumber(): number {
    return this._shapes.length;
  }

  public getShapesArea(): number {
    let area = 0;
    this._shapes.forEach((shape: Shape) => {
      area += shape.area;
    });
    return area;
  }

  public getShapes(): Shape[] {
    return this._shapes;
  }

  public defineShapePosition(position: Point): void {
    this._predefinedShapePosition = position;
  }

  public generateShape(): Shape {
    const shapeList = [Circle, Ellipse, Triangle, Rectangle, Pentagon, Hexagon];
    const shapeType = random(0, shapeList.length);
    const shape = new shapeList[shapeType]();
    if (this._predefinedShapePosition) {
      const { x, y } = this._predefinedShapePosition;
      shape.view.x = x;
      shape.view.y = y;
      this._predefinedShapePosition = null;
    } else {
      shape.view.x = random(0, AppResolution.WIDTH - shape.view.width);
      shape.view.y = -shape.view.height;
    }

    this.addShape(shape);
    return shape;
  }

  public addShape(shape: Shape): void {
    this._shapes.push(shape);
  }

  public deleteShape(shape: Shape): void {
    const index = this._shapes.indexOf(shape);
    if (index > -1) {
      shape.view.destroy();
      this._shapes.splice(index, 1);
    }
  }

  public moveShapes(gravity: number): void {
    this._shapes.forEach((shape) => {
      shape.view.y += gravity;
    });
  }

  private setTimeToGenerate(): void {
    this._timeToGenerate = 1000 / this._shapesPerSecond;
  }
}
