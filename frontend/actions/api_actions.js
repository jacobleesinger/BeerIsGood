var AppDispatcher = require('../dispatcher/dispatcher');
var AuthConstants = require('../constants/auth_constants');

var ApiActions = {
  receiveSingleUser: function (user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  },

  receiveSession: function (session) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.SESSION_RECEIVED,
      session: session
    });
  }

};

module.exports = ApiActions;
