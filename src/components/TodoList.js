import React from 'react';
import useTodoStore from '../store/store'; 

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => useTodoStore.toggleTodo(todo.id)}
          />
          <span>{todo.text}</span>
          <button onClick={() => useTodoStore.removeTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
