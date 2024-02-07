const SHAPES_PER_SECOND_MIN = 1;
const SHAPES_PER_SECOND_MAX = 20;

export class ShapesService {
  private _shapes: any[] = [];
  private _shapesPerSecond: number = 0;

  public getShapesPerSecond(): number {
    return this._shapesPerSecond;
  }

  public increaseShapesPerSecond(): void {
    const newShapesPerSec = this._shapesPerSecond + 1;
    if (newShapesPerSec > SHAPES_PER_SECOND_MAX) {
      this._shapesPerSecond = SHAPES_PER_SECOND_MAX;
    } else {
      this._shapesPerSecond = newShapesPerSec;
    }
  }

  public decreaseShapesPerSecond(): void {
    const newShapesPerSec = this._shapesPerSecond - 1;
    if (newShapesPerSec < SHAPES_PER_SECOND_MIN) {
      this._shapesPerSecond = SHAPES_PER_SECOND_MIN;
    } else {
      this._shapesPerSecond = newShapesPerSec;
    }
  }

  public getShapesNumber(): number {
    return this._shapes.length;
  }

  public addShape(shape: any): void {
    this._shapes.push(shape);
  }
}
