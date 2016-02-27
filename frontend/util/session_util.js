var SessionActions = require('../actions/session_actions');
var ErrorActions = require('../actions/error_actions');
var CurrentUserActions = require('../actions/current_user_actions');

var SessionUtil = {

  fetchCurrentUser: function(){
   $.get('api/session', function(user){
     SessionActions.receiveCurrentUser(user);
   });
 },

 createSession: function (user) {
   $.ajax({
     url: "api/session",
     type: "POST",
     data: {user: user},
     success: function(user) {
       SessionActions.createSession(user);
       CurrentUserActions.setCurrentUser(user);
      },
      error: function(errors) {
        ErrorActions.receiveAllErrors(errors);
      }
   })
 },

 destroySession: function(){
   $.ajax({
     url: "../api/session", // not sure why "api/session" doesn't work anymore
     type: 'DELETE',
     success: function(user){
       SessionActions.destroySession(user);
       CurrentUserActions.resetCurrentUser;
     }
   });
 },

};

module.exports = SessionUtil;
