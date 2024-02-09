import { ServicesName } from "src/model/constants/model.constants";
import { ShapesService } from "src/model/services/shapes.service";
import { Command } from "src/patterns/command";
import { GameFacade } from "src/patterns/facade";
import { UIComponent } from "src/view/component/ui.component";
import { ViewComponentName } from "src/view/constants/view.constants";

export class ShapesAmountDecrementCommand extends Command {
  public static execute(): void {
    const shapesService: ShapesService = GameFacade.instance.model.getService(ServicesName.SHAPES);
    const uiView: UIComponent = GameFacade.instance.view.getComponent(ViewComponentName.UI);
    shapesService.decreaseShapesPerSecond();
    uiView.updateShapesPerSecValue(shapesService.getShapesPerSecond());
  }
}
