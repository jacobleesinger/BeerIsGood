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
var CommentUtil = require('./util/comment_util');
var ToastUtil = require('./util/toast_util');
// var BeerShow = require("./components/beer_show");
var BeersIndex = require("./components/beers_index");

var App = React.createClass({
  render: function () {
    return (
      <div>
        {this.props.children}
      </div> 
    )
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={LandingPage}/>
    <Route path="/beers" component={BeersIndex} />
  </Route>
);


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router>{routes}</Router>,
      document.getElementById("root"));

  UserUtil.fetchAllUsers();
  BeerUtil.fetchAllBeers();
  ReviewUtil.fetchAllReviews();
  CommentUtil.fetchAllComments();
  ToastUtil.fetchAllToasts();
});
