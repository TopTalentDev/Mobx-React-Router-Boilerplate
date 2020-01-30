import React, { useState } from "react";
import { useStore, onEnterPress } from "../helpers/helpers";
import { RouteComponentProps } from "@reach/router";

export const TodoNew = (_: RouteComponentProps) => {
  const [newTodo, setTodo] = useState("");
  const rootStore = useStore();
  const { todoStore } = rootStore;

  const addTodo = () => {
    todoStore.addTodo(newTodo);
    setTodo("");
  };

  return (
    <div className="todo-new">
      <input
        type="text"
        value={newTodo}
        onKeyDown={onEnterPress(addTodo)}
        onChange={e => setTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};
