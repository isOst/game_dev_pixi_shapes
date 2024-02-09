import { Ticker } from "pixi.js";
import "../assets/styles/index.scss";
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

const game = GameFacade.instance;

game.model.registerService("gravity", new GravityService());
game.model.registerService("shapes", new ShapesService());

game.view.registerComponent("ui", new UIComponent());
game.view.registerComponent("app", new AppComponent());

const ui: UIComponent = game.view.getComponent("ui");
const app: AppComponent = game.view.getComponent("app");

ui.app?.appendChild(app.instance.view);

EventManager.instance.subscribe(EventName.GRAVITY_CHANGE, new OnGravityChange());
EventManager.instance.subscribe(EventName.SHAPES_AMOUNT_CHANGE, new OnShapesPerSecChange());

const ticker = Ticker.shared;
ticker.autoStart = false;
const tickerObserver = new OnTickUpdate();
ticker.add(() => {
  tickerObserver.update(ticker);
});

ticker.start();
