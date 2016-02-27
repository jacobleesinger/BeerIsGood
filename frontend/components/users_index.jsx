var React = require('react');
var Link = require('react-router').Link;

var UserStore = require('../stores/user_store');
var CurrentUserStore = require('../stores/current_user_store');
var User = require('./user');
var Navbar = require('./new_navbar').default;

var userToken;

var UsersIndex = React.createClass({
  getInitialState: function () {
    return({
      users: UserStore.all(),
      currentUser: CurrentUserStore.currentUser()
    });
  },

  componentDidMount: function () {

    this.userToken = UserStore.addListener(this._onChange);
    this.currentUserToken = CurrentUserStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.userToken.remove();
  },

  _onChange: function () {
    this.setState({
      users: UserStore.all(),
      currentUser: CurrentUserStore.currentUser()
    });
  },

  handleClick: function(newSubPage, user, beer) {

    this.props.onSubPageChange(newSubPage, user, beer);
  },

  render: function () {

    return (
      <div>
        <Navbar currentUser={this.state.currentUser} />
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
      </div>
    );
  }

});

module.exports = UsersIndex;
