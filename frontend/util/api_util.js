var ApiActions = require('../actions/api_actions');
var UserActions = require('../actions/user_actions');

var ApiUtil = {

  createUser: function (data) {
    $.post("api/users", { user: data }, function (user) {
      UserActions.receiveSingleUser(user);
    });
  },

  fetchCurrentUser: function(){
   $.get('api/session', function(user){
     UserActions.receiveCurrentUser(user);
   });
 },

 fetchSingleUser: function(user) {
   $.get('api/user/' + user.id, function(user) {
     UserActions.receiveSingleUser(user);
   })
 },

 fetchAllUsers: function() {
   $.get('api/users', function (users) {
     UserActions.receiveAllUsers(users);
   });
 },

 createSession: function(data){

   $.post('api/session', { user: data }, function(user){
     UserActions.createSession(user);
   });
 },

 destroySession: function(){
   $.ajax({
     url: "api/session",
     type: 'DELETE',
     success: function(user){
       UserActions.destroySession(user);
     }
   });
 }

};


module.exports = ApiUtil;
