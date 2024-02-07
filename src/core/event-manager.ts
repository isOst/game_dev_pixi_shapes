import { Observable } from "src/patterns/observable";
import { Observer } from "src/patterns/observer";

export class EventManager {
  private static _instance: EventManager;
  private _eventsMap: Record<string, Observable> = {};

  public static get instance(): EventManager {
    if (!EventManager._instance) {
      EventManager._instance = new EventManager();
    }

    return EventManager._instance;
  }

  public subscribe(event: string, listener: Observer): void {
    if (!this._eventsMap[event]) {
      this._eventsMap[event] = new Observable();
    }

    this._eventsMap[event].subscribe(listener);
  }

  public unsubscribe(event: string): void {
    if (!this._eventsMap[event]) {
      return;
    }

    delete this._eventsMap[event];
  }

  public emit<T>(event: string, data?: T): void {
    if (this._eventsMap[event]) {
      this._eventsMap[event].notify(data);
    }
  }
}
