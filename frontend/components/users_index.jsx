var React = require('react');
var Navbar = require('./navbar.jsx');
var UserStore = require('../stores/user_store');
var User = require('./user');

var userToken;

var UsersIndex = React.createClass({
  getInitialState: function () {
    return({
      users: UserStore.all()
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
      users: UserStore.all()
    });
  },

  handleClick: function(newSubPage, user, beer) {

    this.props.onSubPageChange(newSubPage, user, beer);
  },

  render: function () {
    return (

      <div className="fixedWidth">
        {this.state.users.map(function(user) {
            return(
              <div user={user} key={user.id}
                onClick={this.handleClick.bind(this, User, user, this.props.beer)}>{user.username}</div>
            );
          }.bind(this))
        }
      </div>
    );
  }

});

module.exports = UsersIndex;
