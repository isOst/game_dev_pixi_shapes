import { Observer } from "src/patterns/observer";
import { ShapeInfoInitCommand } from "../command/shapes-info-init.command";

export class OnWindowLoad extends Observer {
  public update(): void {
    ShapeInfoInitCommand.execute();
  }
}
