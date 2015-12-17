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

 createSession: function(data){
   debugger;
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
