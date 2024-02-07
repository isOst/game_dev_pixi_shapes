export class View {
  private _components: Record<string, any> = {};

  public registerComponent(name: string, component: any): void {
    if (!this._components[name]) {
      this._components[name] = component;
    }
  }

  public getComponent(name: string): any | null {
    if (this._components[name]) {
      return this._components[name];
    } else {
      return null;
    }
  }

  public deleteModel(name: string): void {
    if (this._components[name]) {
      delete this._components[name];
    }
  }
}
