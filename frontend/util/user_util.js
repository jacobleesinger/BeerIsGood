var UserActions = require('../actions/user_actions');

var UserUtil = {

  createUser: function (data) {
    $.post("api/users", { user: data }, function (user) {
      UserActions.receiveSingleUser(user);
    });
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
