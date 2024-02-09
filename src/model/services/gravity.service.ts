const GRAVITY_MIN = 1;
const GRAVITY_MAX = 10;

export class GravityService {
  private _gravity: number = 4;

  public getGravity(): number {
    return this._gravity;
  }

  public increaseGravityValue(): void {
    const newGravityValue = this._gravity + 1;
    if (newGravityValue > GRAVITY_MAX) {
      this._gravity = GRAVITY_MAX;
    } else {
      this._gravity = newGravityValue;
    }
  }

  public decreaseGravityValue(): void {
    const newGravityValue = this._gravity - 1;
    if (newGravityValue < GRAVITY_MIN) {
      this._gravity = GRAVITY_MIN;
    } else {
      this._gravity = newGravityValue;
    }
  }
}
