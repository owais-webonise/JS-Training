import '../../../static/stylesheets/style';
import App from './app.js';
import NotFound from './components/NotFound.js';
import Home from './components/Home.js';
import React from 'react';

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var history = ReactRouter.useRouterHistory(History.createHashHistory)({ queryKey: false });
var IndexRoute = ReactRouter.IndexRoute;

ReactDOM.render((
   <Router history={history}>
      <div>
        <Route exact path="/" component={App} />
        <IndexRoute component={App}/>
        <Route path="/home" component={Home} />
        <Route path="*" component={NotFound} />
      </div>
   </Router>
), document.getElementById('container'));
