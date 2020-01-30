import React from "react";
import { useStore } from "../helpers/helpers";
import { TodoItem } from "../components/TodoItem";
import { useObserver } from "mobx-react-lite";
import { RouteComponentProps } from "@reach/router";

export const TodoList = (_: RouteComponentProps) => {
  const rootStore = useStore();
  const { todoStore, userStore } = rootStore;

  return useObserver(() => (
    <div className="todo-list">
      <div className="open-todos">
        <span>Open Todos for {userStore.name}</span>
        {todoStore.openTodos.map(todo => (
          <TodoItem key={`${todo.id}-${todo.text}`} todo={todo} />
        ))}
      </div>
      <div className="finished-todos">
        <span>Finished Todos ({todoStore.finishedCount})</span>
        {todoStore.finishedTodos.map(todo => (
          <TodoItem key={`${todo.id}-${todo.text}`} todo={todo} />
        ))}
      </div>
    </div>
  ));
};
