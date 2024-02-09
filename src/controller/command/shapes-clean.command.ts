import { GravityService } from "src/model/services/gravity.service";
import { ShapesService } from "src/model/services/shapes.service";
import { Command } from "src/patterns/command";
import { GameFacade } from "src/patterns/facade";
import { AppComponent } from "src/view/component/app.component";
import { Shape } from "src/view/component/shape/shape";
import { ShapeSize } from "src/view/constants/shape.constants";

export class ShapesCleanCommand extends Command {
  public static execute(): void {
    const shapesService: ShapesService = GameFacade.instance.model.getService("shapes");
    const appComponent: AppComponent = GameFacade.instance.view.getComponent("app");

    const shapes = shapesService.getShapes();
    shapes.forEach((shape: Shape) => {
      if (shape.view.y > appComponent.instance.screen.height + ShapeSize.HEIGHT_MAX) {
        shapesService.deleteShape(shape);
      }
    });
  }
}
