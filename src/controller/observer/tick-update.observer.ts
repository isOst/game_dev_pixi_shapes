import { Observer } from "src/patterns/observer";
import { ShapeGenerateCommand } from "../command/shape-generate.command";
import { ShapesMoveCommand } from "../command/shapes-move.command";
import { ShapesService } from "src/model/services/shapes.service";
import { GameFacade } from "src/patterns/facade";
import { Ticker } from "pixi.js";
import { ShapeInfoCommand } from "../command/shapes-info-update.command";
import { ShapesCleanCommand } from "../command/shapes-clean.command";

export class OnTickUpdate extends Observer {
  public update(ticker: Ticker): void {
    const shapesService: ShapesService = GameFacade.instance.model.getService("shapes");
    shapesService.updateElapsedGenTime(ticker.deltaMS);
    if (shapesService.isAllowToGenerate()) {
      ShapeGenerateCommand.execute();
      ShapeInfoCommand.execute();
    }
    ShapesMoveCommand.execute();
    ShapesCleanCommand.execute();
  }
}
