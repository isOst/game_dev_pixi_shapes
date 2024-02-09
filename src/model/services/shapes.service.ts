import { Shape } from "src/view/component/shape/shape";

const SHAPES_PER_SECOND_MIN = 1;
const SHAPES_PER_SECOND_MAX = 20;

export class ShapesService {
  private _shapes: Shape[] = [];
  private _shapesPerSecond: number = 1;
  private _timeToGenerate: number = 0;
  private _elapsedGenerationTimeCounter: number = 0;

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
