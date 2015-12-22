
var Dispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/user_constants');

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
  }

};

module.exports = UserActions;
