var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var SessionConstants = require('../constants/session_constants');

var _session = "";
var currentUser = {};
var sessionErrors = [];
var SessionStore = new Store(AppDispatcher);

UserStore.currentUser = function(){
  return currentUser;
};

UserStore.currentSession = function(){
  return _session;
};

UserStore.sessionErrors = function() {
  return sessionErrors;
};

var resetCurrentUser = function(){
  currentUser = null;
};

var resetSession = function() {
  _session = "";
};

var resetErrors = function() {
  sessionErrors = [];
};

var addSessionErrors = function(errors) {
  sessionErrors = errors;
  _session = "";
};

var newSession = function(sessionToken){
  _session = sessionToken;
}

SessionStore.__onDispatch = function(payload)
  switch(payload.actionType) {
    case SessionConstants.SESSION_CREATED:
      resetErrors();
      currentUser = (payload.user)
      newSession(payload.user.sessionToken);
      SessionStore.__emitChange();
      break;
    case SessionConstants.SESSION_DESTROYED:
      resetErrors();
      resetSession();
      SessionStore.__emitChange();
      break;
    case SessionConstants.SESSION_ERRORS:
      resetErrors();
      addSessionErrors(payload.errors);
      break;

  }

module.exports = SessionStore;
