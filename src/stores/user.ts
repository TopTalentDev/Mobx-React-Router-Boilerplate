import { observable, action, computed } from "mobx";

export class UserStore {
  @observable name: string = "berkay";
  @observable isAuthorized: boolean = false;

  rootStore: any;

  constructor(rootStore: any) {
    this.rootStore = rootStore;
    this.isAuthorized = false;
  }
}
