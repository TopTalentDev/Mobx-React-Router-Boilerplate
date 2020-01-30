import React, { useState } from "react";
import TodoItemClass from "../stores/todo-item";
import { useStore, onEnterPress } from "../helpers/helpers";

interface Props {
  todo: TodoItemClass;
}

export const TodoItem = ({ todo }: Props) => {
  const rootStore = useStore();
  const { todoStore, userStore } = rootStore;
  const [newText, setText] = useState("");
  const [isEditing, setEdit] = useState(false);

  const saveText = () => {
    todo.updateText(newText);
    setEdit(false);
    setText("");
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <div>
          <input
            type="text"
            onKeyDown={onEnterPress(saveText)}
            onChange={e => setText(e.target.value)}
          />
          <button onClick={saveText}>save</button>
        </div>
      ) : (
        <div>
          <span>{todo.text}</span>
          <input
            type="checkbox"
            onChange={todo.toggleIsDone}
            defaultChecked={todo.isDone}
          ></input>
          <button onClick={() => setEdit(true)}>edit</button>
          <button onClick={() => todoStore.removeTodo(todo)}>X</button>
        </div>
      )}
    </div>
  );
};
