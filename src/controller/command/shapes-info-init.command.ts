import { ServicesName } from "src/model/constants/model.constants";
import { GravityService } from "src/model/services/gravity.service";
import { ShapesService } from "src/model/services/shapes.service";
import { Command } from "src/patterns/command";
import { GameFacade } from "src/patterns/facade";
import { UIComponent } from "src/view/component/ui.component";
import { ViewComponentName } from "src/view/constants/view.constants";

export class ShapeInfoInitCommand extends Command {
  public static execute(): void {
    const shapesService: ShapesService = GameFacade.instance.model.getService(ServicesName.SHAPES);
    const gravityService: GravityService = GameFacade.instance.model.getService(
      ServicesName.GRAVITY
    );
    const uiComponent: UIComponent = GameFacade.instance.view.getComponent(ViewComponentName.UI);

    uiComponent.updateShapesAreaValue(shapesService.getShapesArea());
    uiComponent.updateShapesAmountValue(shapesService.getShapesNumber());
    uiComponent.updateShapesPerSecValue(shapesService.getShapesPerSecond());
    uiComponent.updateGravityValue(gravityService.getGravity());
  }
}
