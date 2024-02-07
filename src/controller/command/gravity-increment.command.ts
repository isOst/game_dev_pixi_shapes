import { GravityService } from "src/model/services/gravity.service";
import { Command } from "src/patterns/command";
import { GameFacade } from "src/patterns/facade";
import { UIView } from "src/view/ui.view";

export class GravityIncrementCommand extends Command {
  public static execute(): void {
    const gravityService: GravityService = GameFacade.instance.model.getService("gravity");
    const uiView: UIView = GameFacade.instance.view.getComponent("ui");
    gravityService.increaseGravityValue();
    uiView.updateGravityValue(gravityService.getGravity());
  }
}
