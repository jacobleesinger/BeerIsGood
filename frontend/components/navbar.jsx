var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var SessionUtil = require('../util/session_util');
var BeersIndex = require('./beers_index');
var LinkedStateMixin = require('react-addons-linked-state-mixin');




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
    debugger;

    this.props.onChange(newSubPage);
  },


  render: function () {
    debugger;

    return (
    <div className="navbar">
      <div className="fixedWidth">
        <div className="navbarHeader">
            <Link className="navbarLogo" to="#"><h3>BeerIsGood</h3></Link>
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
              <div
                to="#">
                FriendsIndex
              </div>
            </li>
            <li>
              <div to="#">
                UserShow
              </div>
            </li>
            <li>
              <button
                className="btn btn-primary" onClick={this.handleSignOut}>Sign Out
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
