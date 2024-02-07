import { Observer } from "./observer";

export class Observable {
  private _observers: Observer[] = [];

  public subscribe(observer: Observer): void {
    const isExist = this._observers.includes(observer);
    if (isExist) {
      return;
    }

    this._observers.push(observer);
  }

  public unsubscribe(observer: Observer): void {
    const observerIndex = this._observers.indexOf(observer);
    if (observerIndex === -1) {
      return;
    }

    this._observers.splice(observerIndex, 1);
  }

  public notify(data?: unknown): void {
    for (const observer of this._observers) {
      observer.update(data);
    }
  }
}
