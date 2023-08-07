import React from "react";
import useTodoStore from "/store";

function TodoList() {
  const todos = useTodoStore((state) => state.todos);

  const handleDeleteTodo = (id) => {
    useTodoStore.getState().removeTodo(id);
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
