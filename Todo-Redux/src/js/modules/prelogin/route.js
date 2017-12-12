import '../../../static/stylesheets/style';
import NotFound from './components/NotFound.js';
import Home from './components/Home.js';
import React from 'react';
import { TodoList } from './containers';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var history = ReactRouter.useRouterHistory(History.createHashHistory)({ queryKey: false });
var IndexRoute = ReactRouter.IndexRoute;
const logger = createLogger();
export const store = createStore(reducer,applyMiddleware(thunk,logger));

ReactDOM.render((
  <Provider store = {store}>
     <Router history = {history}>
        <div>
          <Route exact path="/" component = {TodoList} />
          <IndexRoute component = {TodoList}/>
          <Route name="home" path="/home/:value" component = {Home} />
          <Route path="*" component = {NotFound} />
        </div>
     </Router>
   </Provider>
), document.getElementById('container'));
