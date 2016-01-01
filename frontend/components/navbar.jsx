var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var SessionUtil = require('../util/session_util');
var BeersIndex = require('./beers_index');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var FriendsIndex = require('./friends_index');
var BeerShow = require('./beer_show');
var UsersIndex = require('./users_index');
var User = require('./user');
var UserProfile = require('./user_profile');
var Search = require('./search');




var NavbarInstance = React.createClass({

  mixins: [LinkedStateMixin],

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function () {
    return ({
      subPage: this.props.subPage
    });
  },

  handleSignOut: function () {
    SessionUtil.destroySession();
  },

  handleClick: function(newSubPage, user, beer) {
    this.props.onChange(newSubPage, user, beer);
  },


  render: function () {

    return (
    <div className="navbar">
      <div className="fixedWidth">
        <div className="navbarHeader">
            <div className="navbarLogo logo" to="#"><h1>BeerIsGood</h1></div>

        </div>

        <div className="navbarContent">
          <ul className="navbarLinksUl">
            <li>
              <div
                className="navbarLinks"
                onClick={this.handleClick.bind(this, BeersIndex)}
                value={BeersIndex}>
                Find Beers
              </div>
            </li>
            <li>
              <div
                className="navbarLinks"
                onClick={this.handleClick.bind(this, FriendsIndex)}
                value={FriendsIndex}>
                My Friends
              </div>
            </li>
            <li>
              <div
                className="navbarLinks"
                onClick={this.handleClick.bind(this, UserProfile)}
                value={User}>
                My Profile
              </div>
            </li>
            <li>
              <div
                className="navbarLinks"
                onClick={this.handleClick.bind(this, UsersIndex)}
                value={UsersIndex}>
                Find Friends
              </div>
            </li>

            <li>
              <button
                className="btn btn-sm btn-1" onClick={this.handleSignOut}>Sign Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
  }
});

module.exports = NavbarInstance;
