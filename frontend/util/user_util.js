var UserActions = require('../actions/user_actions');
var SessionActions = require('../actions/session_actions');
var ErrorActions = require('../actions/error_actions');
var CurrentUserActions = require('../actions/current_user_actions');

var UserUtil = {

  createUser: function(user) {
    $.ajax({
      url: "api/users",
      type: "POST",
      data: { user: user},
      success: function (user) {
        UserActions.receiveSingleUser(user);
        SessionActions.createSession(user);
        CurrentUserActions.setCurrentUser(user);
      },
      error: function(errors) {
        ErrorActions.receiveAllErrors(errors);
      }
    })
  },


 fetchSingleUser: function(user) {
   $.get('api/user/' + user.id, function(user) {
     UserActions.receiveSingleUser(user);
   });
 },

 fetchAllUsers: function() {
   $.get('api/users', function (users) {
     UserActions.receiveAllUsers(users);
   });
 }

};

module.exports = UserUtil;
