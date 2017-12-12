import React from 'react';
import { Link } from 'react-router';
import { store } from '../route'

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : props.todo.text,
      id : props.todo.id
    }
  }
  render() {
    return(
      <Link to={"home/"+this.state.id} className="field">
        <span>Id: {this.state.id}</span>
        <span> Text: {this.state.data}</span>
      </Link>
    )
  }
}

export function TodoList(props) {
  const {todos, displayTodo, addTodo, searchTodo, updatedTodos, searchEmpty} = props;

  const onSubmit = (event) => {
    const input = event.target;
    const text = input.value;
    const id = input.id;
    const isEnterKey = (event.which == 13);
    if(isEnterKey) {
      input.value = '';
      addTodo(text);
    }
  };

  const onSearch = (event) => {
    const inputSearch = event.target;
    const textSearch = inputSearch.value;
    if (!textSearch.length) {
      searchEmpty();
    }
    searchTodo(textSearch);
  }

  const toggleClick = id => event => displayTodo(id);

  return (
    <div className = 'todo'>
      <input type = 'text'
        placeholder = 'Add Task'
        onKeyDown = {onSubmit} />
      <input type = 'text'
        placeholder = 'Search Task'
        onChange = {onSearch} />
      <ul className = 'todo_list'>
        {props.todos.map(t => (
          <li key = {t.id}
            className ='todo_items'>
            <Todo todo = {t} />
          </li>
          ))}
      </ul>
      <ul className = 'updatedtodo_items'>
        {props.updatedTodos.map(i => (
          <li key = {i.id}>
          <Todo todo = {i} />
          </li>
          ))}
      </ul>
    </div>
  );
}
