var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var _messages = [];
var AuthStore = new Store(AppDispatcher);
var AuthConstants = require('../constants/auth_constants');

var resetMessages = function (messages) {
  _messages = messages;
}

AuthStore.all = function () {
  return _messages.slice(0);
};
AuthStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case AuthConstants.MESSAGES_RECEIVED:

      resetMessages(payload.messages);
      AuthStore.__emitChange();
      break;
  }
};



module.exports = AuthStore;
