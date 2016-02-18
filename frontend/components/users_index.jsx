var React = require('react');
var Navbar = require('./navbar.jsx');
var UserStore = require('../stores/user_store');
var User = require('./user');
var Link = require('react-router').Link;

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

      <div className="fixedWidth row index">

          {this.state.users.map(function(user) {
            var url = "/user/" + user.id;
              return(
                <Link className="indexItem col-md-12" to={url} key={user.id}
                  >{user.username}</Link>
              );
            }.bind(this))
          }

      </div>
    );
  }

});

module.exports = UsersIndex;
