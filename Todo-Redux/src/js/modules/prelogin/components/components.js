import React from 'react'

export function Todo(props) {
  const {todo} = props;
  if(todo.status) {
    return <strike>{todo.text}</strike>
  } else {
    return <span>{todo.text}</span>
  }
}

export function TodoList(props) {
  const {todos, displayTodo, addTodo, searchTodo, updatedTodos, searchEmpty} = props;

  const onSubmit = (event) => {
    const input = event.target;
    const text = input.value;
    const isEnterKey = (event.which == 13);
    const isLongEnough = text.length > 0;

    if(isEnterKey && isLongEnough) {
      input.value = '';
      addTodo(text);
    }
  };

  const onSearch = (event) => {
    const inputSearch = event.target;
    const textSearch= inputSearch.value;
    if (textSearch.length == 0) {
      searchEmpty();
    }

    const isLongEnoughSearch = textSearch.length > 0;

    if(isLongEnoughSearch) {
      searchTodo(textSearch);
    }
  }

  const toggleClick = id => event => displayTodo(id);

  return (
    <div className='todo'>
      <input type='text'
        placeholder='Add Task'
        onKeyDown={onSubmit} />
      <input type='text'
        placeholder='Search Task'
        onChange={onSearch} />
      <ul className='todo_list'>
        {props.todos.map(t => (
          <li key={t.id}
            className='todo_items'
            onClick={toggleClick(t.id)}>
            <Todo todo={t} />
          </li>
          ))}
      </ul>

      <ul className='updatedtodo_items'>
        {props.updatedTodos.map(i => (
          <li key={i.id}>
          <Todo todo={i} />
          </li>
          ))}
      </ul>
    </div>
  );
}
