import { observable, action, computed } from "mobx";

export class UserStore {
  @observable hasCheckedAuth: boolean = false;
  @observable name: string = "guest";
  @observable isAuthorized: boolean = false;

  rootStore: any;

  constructor(rootStore: any) {
    this.rootStore = rootStore;
    this.isAuthorized = false;
    this.hasCheckedAuth = false;
  }

  @action
  login = (name: string) => {
    this.name = name;
    this.isAuthorized = true;
    window.localStorage.setItem("__username", this.name);
  };

  @action
  checkLogin = () => {
    console.log("Checking for login");
    this.hasCheckedAuth = true;
    let username = window.localStorage.getItem("__username");
    if (username) {
      console.log("Already has username", username);
      this.name = username;
      this.isAuthorized = true;
    }
  };

  @action
  logout = () => {
    this.name = "guest";
    this.isAuthorized = false;
    window.localStorage.removeItem("__username");
  };

  @computed
  get isLoggedIn(): boolean {
    return this.isAuthorized;
  }
}
