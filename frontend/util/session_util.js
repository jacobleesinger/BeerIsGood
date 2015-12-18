var SessionActions = require('./actions/session_actions');

var SessionUtil = {

  fetchCurrentUser: function(){
   $.get('api/session', function(user){
     UserActions.receiveCurrentUser(user);
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
 },

};

module.exports = SessionUtil;
