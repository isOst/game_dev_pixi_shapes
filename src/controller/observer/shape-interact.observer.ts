import { Observer } from "src/patterns/observer";
import { Shape } from "src/view/component/shape/shape";
import { ServicesName } from "src/model/constants/model.constants";
import { ShapesService } from "src/model/services/shapes.service";
import { GameFacade } from "src/patterns/facade";

export class OnShapeInteract extends Observer {
  public update(shape: Shape): void {
    const shapesService: ShapesService = GameFacade.instance.model.getService(ServicesName.SHAPES);
    shapesService.deleteShape(shape);
  }
}
