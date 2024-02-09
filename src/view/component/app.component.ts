import { Application, Container, Graphics } from "pixi.js";
import { AppResolution } from "../constants/app.constants";
import { EventManager } from "src/core/event-manager";
import { EventName } from "src/common/event.constants";

export class AppComponent {
  public instance!: Application;

  constructor() {
    this.initPixiApplication();
    this.setBackground();
  }

  public getStage(): Container {
    return this.instance.stage;
  }

  public drawShape(shape: Graphics): void {
    this.instance.stage.addChild(shape);
  }

  private initPixiApplication(): void {
    this.instance = new Application({
      width: AppResolution.WIDTH,
      height: AppResolution.HEIGHT,
      sharedTicker: true
    });
    this.instance.stage.eventMode = "static";
  }

  setBackground() {
    const graphics = new Graphics();
    graphics.beginFill(0x00284d);
    graphics.drawRect(0, 0, this.instance.screen.width, this.instance.screen.height);
    graphics.endFill();
    graphics.eventMode = "static";
    graphics.cursor = "pointer";
    graphics.onpointerdown = (event) => {
      EventManager.instance.emit(EventName.BACKGROUND_INTERACT, event.screen);
    };
    this.instance.stage.addChild(graphics);
  }
}
