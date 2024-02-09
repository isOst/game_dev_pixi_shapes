import { GravityService } from "src/model/services/gravity.service";
import { ShapesService } from "src/model/services/shapes.service";
import { Command } from "src/patterns/command";
import { GameFacade } from "src/patterns/facade";

export class ShapesMoveCommand extends Command {
  public static execute(): void {
    const gravityService: GravityService = GameFacade.instance.model.getService("gravity");
    const shapesService: ShapesService = GameFacade.instance.model.getService("shapes");

    shapesService.moveShapes(gravityService.getGravity());
  }
}
