var Dispatcher = require('../dispatcher/dispatcher');
var ErrorConstants = require('../constants/error_constants');

var ErrorActions = {

  receiveAllErrors: function(errors) {
    Dispatcher.dispatch({
      actionType: ErrorConstants.ERRORS_RECEIVED,
      errors: errors
    });
  }

};

module.exports = ErrorActions;
