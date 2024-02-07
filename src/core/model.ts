export class Model {
  private _models: Record<string, any> = {};

  public registerService(name: string, model: any): void {
    if (!this._models[name]) {
      this._models[name] = model;
    }
  }

  public getService(name: string): any | null {
    if (this._models[name]) {
      return this._models[name];
    } else {
      return null;
    }
  }

  public deleteService(name: string): void {
    if (this._models[name]) {
      delete this._models[name];
    }
  }
}
