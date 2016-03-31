var React = require('react');
var UserShow = require('./user_show').default;
var UserProfile = require('./user_profile').default;
var CurrentUserStore = require('../stores/current_user_store');
var UserStore = require('../stores/user_store');
var UserPage;
var LandingPage = require('./landing_page');

 var User = React.createClass({

    contextTypes: {
    router: React.PropTypes.func
  },

    getUserPage: function () {
      var currentUser = CurrentUserStore.currentUser();
      var userId = parseInt(this.props.user.id);
      var user = UserStore.findById(userId);

      if (currentUser.id === userId) {
        UserPage = <UserProfile currentUser={currentUser} user={currentUser}/>;
      } else {
        UserPage = <UserShow currentUser={currentUser} user={user}/>;
      }
    },

    render: function () {
      this.getUserPage();
      if(!CurrentUserStore.currentUser()) {
        return <LandingPage />
      }
      return(
        <div>
         {UserPage}
        </div>
      )
    }

 });

 module.exports = User;
