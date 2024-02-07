import "../assets/styles/index.scss";
import { EventName } from "./common/event.constants";
import { OnGravityChange } from "./controller/observer/gravity-change.observer";
import { OnShapesPerSecChange } from "./controller/observer/shapes-amount-change.observer";
import { EventManager } from "./core/event-manager";
import { GravityService } from "./model/services/gravity.service";
import { ShapesService } from "./model/services/shapes.service";
import { GameFacade } from "./patterns/facade";
import { UIView } from "./view/ui.view";

const game = GameFacade.instance;

game.model.registerService("gravity", new GravityService());
game.model.registerService("shapes", new ShapesService());

game.view.registerComponent("ui", new UIView());

EventManager.instance.subscribe(EventName.GRAVITY_CHANGE, new OnGravityChange());
EventManager.instance.subscribe(EventName.SHAPES_AMOUNT_CHANGE, new OnShapesPerSecChange());
