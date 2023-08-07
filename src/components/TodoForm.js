import React, { useState } from 'react';
import useTodoStore from '/store'; // Update the path accordingly

function TodoForm() {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
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

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;




