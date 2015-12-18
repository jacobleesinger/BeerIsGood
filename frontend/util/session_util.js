var SessionActions = require('../actions/session_actions');

var SessionUtil = {

  fetchCurrentUser: function(){
   $.get('api/session', function(user){
     SessionActions.receiveCurrentUser(user);
   });
 },

 createSession: function(data){

   $.post('api/session', { user: data }, function(user){
     SessionActions.createSession(user);
   });
 },

 destroySession: function(){
   $.ajax({
     url: "api/session",
     type: 'DELETE',
     success: function(user){
       SessionActions.destroySession(user);
     }
   });
 },

};

module.exports = SessionUtil;
