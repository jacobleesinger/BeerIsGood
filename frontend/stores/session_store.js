var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var SessionConstants = require('../constants/session_constants');

var _session = "";
var currentUser = {};
var sessionErrors = [];
var SessionStore = new Store(AppDispatcher);

SessionStore.currentUser = function(){
  return currentUser;
};

SessionStore.currentSession = function(){
  return _session;
};

SessionStore.isLoggedIn = function() {
  if(_session) {
    return true;
  } else {
    return false;
  }
}

SessionStore.sessionErrors = function() {
  return sessionErrors;
};

var newCurrentUser = function(user){
  currentUser = user;
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

SessionStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case SessionConstants.SESSION_CREATED:
      resetErrors();
      newCurrentUser(payload.user);
      newSession(payload.user.session_token);
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
};

module.exports = SessionStore;
