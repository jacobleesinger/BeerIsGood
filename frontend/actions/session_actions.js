var Dispatcher = require('../dispatcher/dispatcher');
var SessionConstants = require('../constants/session_constants');

var SessionActions = {
  createSession: function(user){
    if (user.hasOwnProperty("errors")) {
      Dispatcher.dispatch({
        actionType: UserConstants.SESSION_ERRORS,
        errors: user.errors
      });
    } else {
      Dispatcher.dispatch({
        actionType: UserConstants.SESSION_CREATED,
        user: user
      });
    }
  },

  destroySession: function(user){
    Dispatcher.dispatch({
      actionType: UserConstants.SESSION_DESTROYED,
      user: user
    });
  }

};

module.exports = SessionActions;
