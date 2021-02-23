/* eslint-disable */
import React, { useState } from 'react';

function TodoForm(props) {
  const [titleInput, setTextInput] = useState('');
//   handleTodoSubmit to be sending state to PARENT.
  const { handleTodoSubmit } = props;
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(titleInput);
    let listItem = { 'completed': false, 'title': "" };
    listItem.title = titleInput;
    handleTodoSubmit(listItem)
    // handle form submittion
  };

  // eslint-disable-next-line no-console
  console.log(props);
  return (
    <div className="todoForm">
      <form onSubmit={handleSubmit}>
        <input name="title" value={titleInput} onChange={(e) => setTextInput(e.target.value)} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default TodoForm;
