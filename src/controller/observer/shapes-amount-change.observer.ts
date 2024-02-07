import { Observer } from "src/patterns/observer";
import { ShapesAmountIncrementCommand } from "../command/shapes-amount-increment.command";
import { ShapesAmountDecrementCommand } from "../command/shapes-amount-decrement.command";

export class OnShapesPerSecChange extends Observer {
  public update(data: number): void {
    if (data > 0) {
      ShapesAmountIncrementCommand.execute();
    } else {
      ShapesAmountDecrementCommand.execute();
    }
  }
}
