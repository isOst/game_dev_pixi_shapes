import { Observer } from "src/patterns/observer";
import { GravityDecrementCommand } from "../command/gravity-decrement.command";
import { GravityIncrementCommand } from "../command/gravity-increment.command";

export class OnGravityChange extends Observer {
  public update(data: number): void {
    if (data > 0) {
      GravityIncrementCommand.execute();
    } else {
      GravityDecrementCommand.execute();
    }
  }
}
