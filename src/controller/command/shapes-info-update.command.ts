import { Ticker } from "pixi.js";
import { random } from "src/common/utils";
import { ShapesService } from "src/model/services/shapes.service";
import { Command } from "src/patterns/command";
import { GameFacade } from "src/patterns/facade";
import { UIComponent } from "src/view/component/ui.component";

export class ShapeInfoCommand extends Command {
  public static execute(): void {
    const shapesService: ShapesService = GameFacade.instance.model.getService("shapes");
    const uiComponent: UIComponent = GameFacade.instance.view.getComponent("ui");

    uiComponent.updateShapesAreaValue(shapesService.getShapesArea());
    uiComponent.updateShapesAmountValue(shapesService.getShapesNumber());
  }
}
