import { Observer } from "src/patterns/observer";
import { EventManager } from "./event-manager";

export class Controller {
  private _listeners: Record<string, Observer> = {};

  public registerListener(name: string, listener: Observer): void {
    if (!this._listeners[name]) {
      this._listeners[name] = listener;
      EventManager.instance.subscribe(name, listener);
    }
  }
}
