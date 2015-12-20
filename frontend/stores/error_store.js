var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var ErrorConstants = require('../constants/error_constants');

var ErrorStore = new Store(AppDispatcher);

var _errors = [];

var receiveAllErrors = function(payload) {
  _errors = [];
  var errorMessages = payload.errors.responseJSON;
  if (errorMessages) {
    errorMessages.forEach(function(errorMessage) {
      _errors.push(errorMessage);
    })
  }
};

ErrorStore.all = function() {
  return _errors;
};

ErrorStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case ErrorConstants.ERRORS_RECEIVED:
      receiveAllErrors(payload);
      ErrorStore.__emitChange();
      break;
  };

};

module.exports = ErrorStore;
