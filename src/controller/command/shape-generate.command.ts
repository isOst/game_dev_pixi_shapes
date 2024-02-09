import { ServicesName } from "src/model/constants/model.constants";
import { ShapesService } from "src/model/services/shapes.service";
import { Command } from "src/patterns/command";
import { GameFacade } from "src/patterns/facade";
import { AppComponent } from "src/view/component/app.component";
import { ViewComponentName } from "src/view/constants/view.constants";

export class ShapeGenerateCommand extends Command {
  public static execute(): void {
    const shapesService: ShapesService = GameFacade.instance.model.getService(ServicesName.SHAPES);
    const appComponent: AppComponent = GameFacade.instance.view.getComponent(ViewComponentName.APP);
    shapesService.dropElapsedGenTime();
    const shape = shapesService.generateShape();
    appComponent.drawShape(shape.view);
    shapesService.dropElapsedGenTime();
  }
}
