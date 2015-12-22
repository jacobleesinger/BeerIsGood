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

  handleClick: function(newSubPage) {

    this.props.onChange(newSubPage);
  },


  render: function () {

    return (
    <div className="navbar">
      <div className="fixedWidth">
        <div className="navbarHeader">
            <div className="navbarLogo" to="#"><h1>BeerIsGood</h1></div>

        </div>

        <div className="navbarContent">
          <ul className="navbarLinksUl">
            <li>
              <div
                onClick={this.handleClick.bind(this, BeersIndex)}
                value={BeersIndex}>
                BeersIndex
              </div>
            </li>
            <li>
              <div onClick={this.handleClick.bind(this, FriendsIndex)}
              value={FriendsIndex}>
                FriendsIndex
              </div>
            </li>
            <li>
              <div onClick={this.handleClick.bind(this, User)}
              value={User}>
                User
              </div>
            </li>
            <li>
              <div
                onClick={this.handleClick.bind(this, UsersIndex)}
                value={UsersIndex}>
                UsersIndex
              </div>
            </li>
            <li>
              <button
                className="btn btn-sm btn-primary" onClick={this.handleSignOut}>Sign Out
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
