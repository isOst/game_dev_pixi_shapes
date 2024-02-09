import { Observer } from "src/patterns/observer";
import { ServicesName } from "src/model/constants/model.constants";
import { ShapesService } from "src/model/services/shapes.service";
import { GameFacade } from "src/patterns/facade";
import { ShapeGenerateCommand } from "../command/shape-generate.command";
import { Point } from "pixi.js";

export class OnBackgroundInteract extends Observer {
  public update(position: Point): void {
    const shapesService: ShapesService = GameFacade.instance.model.getService(ServicesName.SHAPES);
    shapesService.defineShapePosition(position);
    ShapeGenerateCommand.execute();
  }
}
