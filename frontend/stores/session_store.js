var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var _session = false;
var SessionStore = new Store(AppDispatcher);
var SessionConstants = require('../constants/session_constants');

var resetSession = function(session) {
  _session = false;
};

SessionStore.newSession = function() {
  _session = true;
};

SessionStore.session = function () {
  return _session;
};


SessionStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case SessionConstants.SESSION_RECEIVED:

      resetSession();
      newSession(paylaod.session);
      SessionStore.__emitChange();
      break;
  }
};



module.exports = SessionStore;
