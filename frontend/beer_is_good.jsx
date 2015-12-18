var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var LandingPage = require('./components/landing_page');
var Home = require('./components/home');
var UserUtil = require('./util/user_util');
var BeerUtil = require('./util/beer_util');
var ReviewUtil = require('./util/review_util');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>BeerIsGood</h1>
        {this.props.children}
      </div>
    )
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={LandingPage}/>
  </Route>
);


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Router>{routes}</Router>, document.getElementById("root"));

  UserUtil.fetchAllUsers();
  BeerUtil.fetchAllBeers();
  ReviewUtil.fetchAllReviews();
});
