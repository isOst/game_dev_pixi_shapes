import { ServicesName } from "src/model/constants/model.constants";
import { ShapesService } from "src/model/services/shapes.service";
import { Command } from "src/patterns/command";
import { GameFacade } from "src/patterns/facade";
import { UIComponent } from "src/view/component/ui.component";
import { ViewComponentName } from "src/view/constants/view.constants";

export class ShapeInfoCommand extends Command {
  public static execute(): void {
    const shapesService: ShapesService = GameFacade.instance.model.getService(ServicesName.SHAPES);
    const uiComponent: UIComponent = GameFacade.instance.view.getComponent(ViewComponentName.UI);

    uiComponent.updateShapesAreaValue(shapesService.getShapesArea());
    uiComponent.updateShapesAmountValue(shapesService.getShapesNumber());
  }
}
