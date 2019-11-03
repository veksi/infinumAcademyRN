import { UiStore } from './UiStore';
import { BaseStore } from './BaseStore';

export class RootStore {
  public ui: UiStore;
  public base: BaseStore;

  constructor() {
    this.base = new BaseStore();
    this.ui = new UiStore();
  }
}