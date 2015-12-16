var AppDispatcher = require('../dispatcher/dispatcher');
var AuthConstants = require('../constants/auth_constants');

var ApiActions = {
  receiveAuthMessages: function (messages) {
    // debugger;
    AppDispatcher.dispatch({
      actionType: AuthConstants.MESSAGES_RECEIVED,
      messages: messages
    });
  }

};
