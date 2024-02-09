import { ShapesService } from "src/model/services/shapes.service";
import { Command } from "src/patterns/command";
import { GameFacade } from "src/patterns/facade";
import { UIView } from "src/view/component/ui.component";

export class ShapesAmountDecrementCommand extends Command {
  public static execute(): void {
    const shapesService: ShapesService = GameFacade.instance.model.getService("shapes");
    const uiView: UIView = GameFacade.instance.view.getComponent("ui");
    shapesService.decreaseShapesPerSecond();
    uiView.updateShapesPerSecValue(shapesService.getShapesPerSecond());
  }
}
