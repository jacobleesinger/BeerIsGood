var React = require('react');
var Navbar = require('./navbar.jsx');
var UserStore = require('../stores/user_store');

var userToken;

var UsersIndex = React.createClass({
  getInitialState: function () {
    return({
      users: UserStore.all()
    });
  },

  componentDidMount: function () {
    debugger;
    userToken = UserStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    userToken.remove();
  },

  _onChange: function () {
    this.setState({
      users: UserStore.all()
    });
  },






  render: function () {
    debugger;
    return (

      <div className="fixedWidth">
        {this.state.users.map(function(user) {
            return(
              <div user={user} key={user.id} >{user.username}</div>
            );
          }.bind(this))
        }
      </div>
    );
  }

});

module.exports = UsersIndex;
