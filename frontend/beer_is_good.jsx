import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';

import LandingPage from './components/landing_page';
import UserUtil from './util/user_util';
import BeerUtil from './util/beer_util';
import ReviewUtil from './util/review_util';
import CommentUtil from './util/comment_util';
import ToastUtil from './util/toast_util';
import FriendRequestUtil from './util/friend_request_util';
import FriendUtil from './util/friend_util';
import ComposedUser from'./components/composed_components/user';
import ComposedBeerShow from './components/composed_components/beer_show';
import ComposedUsersIndex from './components/composed_components/users_index';

import createBrowserHistory from 'history/lib/createBrowserHistory';

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
    <Route path="/beer/:id" component={ComposedBeerShow} />
    <Route path="/user/:id" component={ComposedUser} />
    <Route path="/usersindex" component={ComposedUsersIndex} />
  </Route>
);


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router history={browserHistory}>{routes}</Router>,
      document.getElementById("root"));

  UserUtil.fetchAllUsers();
  BeerUtil.fetchAllBeers();
  ReviewUtil.fetchAllReviews();
  CommentUtil.fetchAllComments();
  ToastUtil.fetchAllToasts();
  FriendRequestUtil.fetchAllFriendRequests();
  FriendUtil.fetchAllFriendships();
});
