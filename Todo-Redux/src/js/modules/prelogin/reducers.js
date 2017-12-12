import React, { Component } from 'react';
import { ADD_TODO,SEARCH_TODO,SEARCH_EMPTY,DISPLAY_TODO } from './constants'

let initialState = {todos: [], updatedTodos: []};

export default function(state = initialState, action) {
  switch(action.type) {
    case 'ADD_TODO' :
     return {
        ...state,
        todos: state.todos.concat(action.payload)
     }

    case 'DISPLAY_TODO':
      return {
        ...state,
        todos: state.todos.map(t => {
        if(t.id === action.payload) {
          t.status = !t.status;
          return t;
        }
        return t;
        })
      }

    case 'SEARCH_TODO' :
      state.updatedTodos = Object.assign([],state.todos);
      return {
        ...state,
        updatedTodos: state.updatedTodos.filter(item => {
          return item.text.toUpperCase().indexOf(action.payload.toUpperCase()) > -1;
        })
      }

    case 'SEARCH_EMPTY' :
      return {
        ...state,
        updatedTodos: state.todos
      }

    default:
      return state;
  }
}


