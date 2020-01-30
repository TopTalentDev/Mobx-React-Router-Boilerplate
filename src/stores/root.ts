import { TodoList } from "./todo-list";
import { UserStore } from "./user";

export class RootStore {
  todoStore: TodoList;
  userStore: UserStore;

  constructor() {
    this.todoStore = new TodoList(this);
    this.userStore = new UserStore(this);
  }
}
