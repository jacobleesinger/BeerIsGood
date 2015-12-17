
var Dispatcher = require('../dispatcher/dispatcher'),
    UserConstants = require('../constants/user_constants');

var UserActions = {
  receiveSingleUser: function(user){
    Dispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  },

  receiveAllUsers: function(users){
    var action = {
      actionType: UserConstants.USERS_RECEIVED,
      users: users
    };


    Dispatcher.dispatch(action);
  },


  createSession: function(user){
    debugger;
    Dispatcher.dispatch({
      actionType: UserConstants.SESSION_CREATED,
      user: user
    });
  },

  destroySession: function(user){
    Dispatcher.dispatch({
      actionType: UserConstants.SESSION_DESTROYED,
      user: user
    });
  }

};

module.exports = UserActions;
