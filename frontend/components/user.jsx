var React = require('react');
var UserShow = require('./user_show');
var UserProfile = require('./user_profile');

var UserPage;

var User = React.createClass({

  getUserPage: function () {

    if (this.props.currentUser.id === this.props.user.id) {
      UserPage = <UserProfile currentUser={this.props.currentUser} user={this.props.user}/>;
    } else {
      UserPage = <UserShow currentUser={this.props.currentUser} user={this.props.user}/>;
    }
  },

  render: function () {
    this.getUserPage();

    return(
      <div>
        {UserPage}
      </div>
    )
  }

});

module.exports = User;
