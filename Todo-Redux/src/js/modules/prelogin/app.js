import React from 'react';
import {TodoList} from './containers';
import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducers';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

const logger = createLogger();
export const store = createStore(reducer,applyMiddleware(thunk,logger));
class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
        <TodoList />
      </Provider>
    );
  }
}

export default App;
