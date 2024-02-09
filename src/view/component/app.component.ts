import { Application, Container, Graphics } from "pixi.js";

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
    this.instance = new Application({ width: 800, height: 800, sharedTicker: true });
    this.instance.stage.eventMode = "static";
  }

  setBackground() {
    const graphics = new Graphics();
    graphics.beginFill(0x00284d);
    graphics.drawRect(0, 0, this.instance.screen.width, this.instance.screen.height);
    graphics.endFill();
    graphics.eventMode = "static";
    graphics.cursor = "pointer";
    graphics.on("pointerdown", () => {
      console.log("djkfbdjfdf");
    });
    this.instance.stage.addChild(graphics);
  }
}
