import "../assets/styles/index.scss";
import { Ticker } from "pixi.js";
import { EventName } from "./common/event.constants";
import { OnGravityChange } from "./controller/observer/gravity-change.observer";
import { OnShapesPerSecChange } from "./controller/observer/shapes-amount-change.observer";
import { EventManager } from "./core/event-manager";
import { GravityService } from "./model/services/gravity.service";
import { ShapesService } from "./model/services/shapes.service";
import { GameFacade } from "./patterns/facade";
import { AppComponent } from "./view/component/app.component";
import { UIComponent } from "./view/component/ui.component";
import { OnTickUpdate } from "./controller/observer/tick-update.observer";
import { ViewComponentName } from "./view/constants/view.constants";
import { ServicesName } from "./model/constants/model.constants";
import { OnWindowLoad } from "./controller/observer/window-load.observer";

const game = GameFacade.instance;

game.model.registerService(ServicesName.GRAVITY, new GravityService());
game.model.registerService(ServicesName.SHAPES, new ShapesService());

game.view.registerComponent(ViewComponentName.UI, new UIComponent());
game.view.registerComponent(ViewComponentName.APP, new AppComponent());

const ui: UIComponent = game.view.getComponent(ViewComponentName.UI);
const app: AppComponent = game.view.getComponent(ViewComponentName.APP);

ui.app?.appendChild(app.instance.view);

EventManager.instance.subscribe(EventName.GRAVITY_CHANGE, new OnGravityChange());
EventManager.instance.subscribe(EventName.SHAPES_AMOUNT_CHANGE, new OnShapesPerSecChange());
EventManager.instance.subscribe(EventName.TICKER_UPDATE, new OnTickUpdate());
EventManager.instance.subscribe(EventName.WINDOW_LOAD, new OnWindowLoad());

const ticker = Ticker.shared;
ticker.autoStart = false;
ticker.add(() => {
  EventManager.instance.emit(EventName.TICKER_UPDATE, ticker);
});

window.onload = () => {
  EventManager.instance.emit(EventName.WINDOW_LOAD);
  ticker.start();
};
