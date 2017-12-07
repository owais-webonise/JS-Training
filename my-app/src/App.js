import React, { Component } from 'react';
import './App.css';
import TodoApp from './todoApp.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <TodoApp name="todo" />
      </div>
    );
  }
}

export default App;
