import { Controller } from "src/core/controller";
import { EventManager } from "src/core/event-manager";
import { Model } from "src/core/model";
import { View } from "src/core/view";

export class GameFacade {
  public model: Model;
  public view;
  public controller;
  public eventManager;

  private static _instance: GameFacade;

  constructor() {
    this.model = new Model();
    this.view = new View();
    this.controller = new Controller();
    this.eventManager = EventManager.instance;
  }

  public static get instance(): GameFacade {
    if (!GameFacade._instance) {
      GameFacade._instance = new GameFacade();
    }

    return GameFacade._instance;
  }
}
