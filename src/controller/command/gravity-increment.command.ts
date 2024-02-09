import { ServicesName } from "src/model/constants/model.constants";
import { GravityService } from "src/model/services/gravity.service";
import { Command } from "src/patterns/command";
import { GameFacade } from "src/patterns/facade";
import { UIComponent } from "src/view/component/ui.component";
import { ViewComponentName } from "src/view/constants/view.constants";

export class GravityIncrementCommand extends Command {
  public static execute(): void {
    const gravityService: GravityService = GameFacade.instance.model.getService(
      ServicesName.GRAVITY
    );
    const uiView: UIComponent = GameFacade.instance.view.getComponent(ViewComponentName.UI);
    gravityService.increaseGravityValue();
    uiView.updateGravityValue(gravityService.getGravity());
  }
}
