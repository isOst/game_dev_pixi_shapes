import { EventName } from "src/common/event.constants";
import { UIElementSelector } from "src/common/ui.constants";
import { getDOMElement } from "src/common/utils";
import { EventManager } from "src/core/event-manager";

export class UIComponent {
  public shapesNumberValue: Element | null = null;
  public shapesAreaValue: Element | null = null;
  public shapesPerSecValue: Element | null = null;
  public shapesIncrementButton: Element | null = null;
  public shapesDecrementButton: Element | null = null;
  public gravityValue: Element | null = null;
  public gravityIncrementButton: Element | null = null;
  public gravityDecrementButton: Element | null = null;
  public app: Element | null = null;

  constructor() {
    this.registerUIElements();
    this.registerEvents();
  }

  public registerUIElements(): void {
    this.shapesNumberValue = getDOMElement(UIElementSelector.SHAPES_NUMBER);
    this.shapesAreaValue = getDOMElement(UIElementSelector.SHAPES_AREA);
    this.shapesPerSecValue = getDOMElement(UIElementSelector.SHAPES_PER_SECOND);
    this.shapesIncrementButton = getDOMElement(UIElementSelector.SHAPES_INCREMENT_BUTTON);
    this.shapesDecrementButton = getDOMElement(UIElementSelector.SHAPES_DECREMENT_BUTTON);
    this.gravityValue = getDOMElement(UIElementSelector.GRAVITY_VALUE);
    this.gravityIncrementButton = getDOMElement(UIElementSelector.GRAVITY_INCREMENT_BUTTON);
    this.gravityDecrementButton = getDOMElement(UIElementSelector.GRAVITY_DECREMENT_BUTTON);
    this.app = getDOMElement("#app");
  }

  public registerEvents(): void {
    if (this.gravityIncrementButton) {
      this.gravityIncrementButton.addEventListener("click", () => {
        EventManager.instance.emit(EventName.GRAVITY_CHANGE, 1);
      });
    }
    if (this.gravityDecrementButton) {
      this.gravityDecrementButton.addEventListener("click", () => {
        EventManager.instance.emit(EventName.GRAVITY_CHANGE, -1);
      });
    }
    if (this.shapesIncrementButton) {
      this.shapesIncrementButton.addEventListener("click", () => {
        EventManager.instance.emit(EventName.SHAPES_AMOUNT_CHANGE, 1);
      });
    }
    if (this.shapesDecrementButton) {
      this.shapesDecrementButton.addEventListener("click", () => {
        EventManager.instance.emit(EventName.SHAPES_AMOUNT_CHANGE, -1);
      });
    }
  }

  public updateGravityValue(gravity: number): void {
    if (this.gravityValue) {
      this.gravityValue.innerHTML = gravity.toString();
    }
  }

  public updateShapesPerSecValue(shapesPerSec: number): void {
    if (this.shapesPerSecValue) {
      this.shapesPerSecValue.innerHTML = shapesPerSec.toString();
    }
  }

  public updateShapesAreaValue(area: number = 0): void {
    if (this.shapesAreaValue) {
      this.shapesAreaValue.innerHTML = area.toString();
    }
  }

  public updateShapesAmountValue(amount: number = 0): void {
    if (this.shapesNumberValue) {
      this.shapesNumberValue.innerHTML = amount.toString();
    }
  }
}
