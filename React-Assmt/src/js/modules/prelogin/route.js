import '../../../static/stylesheets/style';
import Home from './components/Home.js';
import Child from './components/Child';
import NotFound from './components/NotFound';
import App from './app.js';

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var history = ReactRouter.useRouterHistory(History.createHashHistory)({ queryKey: false });

var routes = (
    <Router history={history}>
        <Route path="/" component ={App} />
        <Route path="/home/" name="home" component = {Home} />
        <Route path="*" component = {NotFound}/>
    </Router>
);

ReactDOM.render(routes, document.getElementById("container"));
