import { ServicesName } from "src/model/constants/model.constants";
import { ShapesService } from "src/model/services/shapes.service";
import { Command } from "src/patterns/command";
import { GameFacade } from "src/patterns/facade";
import { AppComponent } from "src/view/component/app.component";
import { Shape } from "src/view/component/shape/shape";
import { ShapeSize } from "src/view/constants/shape.constants";
import { ViewComponentName } from "src/view/constants/view.constants";

export class ShapesCleanCommand extends Command {
  public static execute(): void {
    const shapesService: ShapesService = GameFacade.instance.model.getService(ServicesName.SHAPES);
    const appComponent: AppComponent = GameFacade.instance.view.getComponent(ViewComponentName.APP);

    const shapes = shapesService.getShapes();
    shapes.forEach((shape: Shape) => {
      if (shape.view.y > appComponent.instance.screen.height + ShapeSize.HEIGHT_MAX) {
        shapesService.deleteShape(shape);
      }
    });
  }
}
