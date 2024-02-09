import { Ticker } from "pixi.js";
import { random } from "src/common/utils";
import { ServicesName } from "src/model/constants/model.constants";
import { ShapesService } from "src/model/services/shapes.service";
import { Command } from "src/patterns/command";
import { GameFacade } from "src/patterns/facade";
import { AppComponent } from "src/view/component/app.component";
import { Circle } from "src/view/component/shape/circle";
import { Ellipse } from "src/view/component/shape/ellipse";
import { Hexagon } from "src/view/component/shape/hexagon";
import { Pentagon } from "src/view/component/shape/pentagon";
import { Rectangle } from "src/view/component/shape/rectangle";
import { Triangle } from "src/view/component/shape/triangle";
import { ViewComponentName } from "src/view/constants/view.constants";

export class ShapeGenerateCommand extends Command {
  public static execute(): void {
    const shapesService: ShapesService = GameFacade.instance.model.getService(ServicesName.SHAPES);
    const appComponent: AppComponent = GameFacade.instance.view.getComponent(ViewComponentName.APP);
    shapesService.dropElapsedGenTime();

    const shapeList = [Circle, Ellipse, Triangle, Rectangle, Pentagon, Hexagon];
    const shapeType = random(0, shapeList.length);
    const shape = new shapeList[shapeType]();
    shape.view.x = random(0, appComponent.instance.screen.width - shape.view.width);
    shape.view.y = -shape.view.height;
    shapesService.addShape(shape);
    appComponent.drawShape(shape.view);

    shapesService.dropElapsedGenTime();
  }
}
