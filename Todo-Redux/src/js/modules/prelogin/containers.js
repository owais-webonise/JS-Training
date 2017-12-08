import {connect} from 'react-redux';
import * as components from './components/components.js';
import {addTodo, displayTodo, searchTodo, searchEmpty} from './actions';

export const TodoList = connect(
  function mapStateToProps(state) {
    return {
        todos: state.todos,
        updatedTodos: state.updatedTodos
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      addTodo: text => dispatch(addTodo(text)),
      displayTodo: id => dispatch(displayTodo(id)),
      searchTodo: text => dispatch(searchTodo(text)),
      searchEmpty: () => dispatch(searchEmpty())
    };
  }
)(components.TodoList);


