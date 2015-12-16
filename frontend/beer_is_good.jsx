var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var LandingPage = require('./components/landing_page');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>BeerIsGood</h1>
        
      </div>
    )
  }
});

// var routes = (
//   <Route path="/" component={App}>
//     <IndexRoute component={LandingPage}/>
//   </Route>
// );


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<App />, document.getElementById("root"));
});
