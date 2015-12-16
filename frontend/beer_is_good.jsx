var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var LandingPage = require('./components/landing_page');


var routes = (
  <Route path="/" component={}>
    <IndexRoute component={LandingPage}/>
  </Route>
);


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Router>{routes}</Router>, document.getElementById("root"));
});
