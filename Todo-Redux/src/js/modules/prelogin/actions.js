const uid = () => Math.random().toString(34).slice(2);

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: uid(),
      status: false,
      text: text
    }
  };
}

export function searchTodo(text) {
  return {
    type: 'SEARCH_TODO',
    payload: text
  }
}

export function searchEmpty() {
  return {
    type: 'SEARCH_EMPTY'
  }
}

export function displayTodo(id) {
  return {
    type: 'DISPLAY_TODO',
    payload: id
  }
}
