var React = require('react');
var Navbar = require('./navbar.jsx');
var UserStore = require('../stores/user_store');

var userToken;

var FriendsIndex = React.createClass({
  getInitialState: function () {
    return({
      friends: []
    });
  },

  componentDidMount: function () {
    userToken = UserStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    userToken.remove();
  },

  _onChange: function () {
    this.setState({
      friends: UserStore.getFriendsByUserId(this.props.currentUser.id)
    });
  },






  render: function () {
    return (

      <div className="fixedWidth">
        THIS IS THE FRIENDS INDEX PAGE
      </div>
    );
  }

});

module.exports = FriendsIndex;
