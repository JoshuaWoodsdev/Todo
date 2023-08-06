import React, { useState } from 'react';
import useTodoStore from '../store/store'; 

const TodoForm = () => {
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: text,
        completed: false,
      };
      useTodoStore.getState().addTodo(newTodo);
      setText('');
    }
  };
  
  return (
    <div>
      <input
        type="text"
        placeholder="Add a new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoForm;
