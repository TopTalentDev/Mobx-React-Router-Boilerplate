import { observer } from "mobx-react-lite";
import React from "react";
import { TodoItem } from "../components/TodoItem";
import { useStore } from "../helpers/helpers";

export const TodoList = observer(props => {
  const rootStore = useStore();
  const { todoStore, userStore } = rootStore;

  return (
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
  );
});
