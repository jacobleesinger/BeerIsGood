var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/user_constants');

var UserStore = new Store(AppDispatcher);

var _users = [];
var userErrors = [];

UserStore.currentUser = function(){
  return currentUser;
};

UserStore.currentStatus = function(){
  return session;
};

UserStore.sessionErrors = function() {
  return sessionErrors;
};

UserStore.userErrors = function() {
  return userErrors;
};

var resetUser = function(){
  currentUser = null;
};

var resetSession = function() {
  session = false;
};

var addSingleUser = function(user){
    _users[user.id] = user;
};

var addAllUsers = function (users) {
  users.forEach(function(user){
    _users[user.id] = user;
  });
};

var resetErrors = function() {
  userErrors = [];
};

var addUserErrors = function(errors) {
  userErrors = errors;
};


UserStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case UserConstants.USER_RECEIVED:
      addSingleUser(payload.user);
      UserStore.__emitChange();
      break;
    case UserConstants.USERS_RECEIVED:

      addAllUsers(payload.users);
      UserStore.__emitChange();
      break;
    case UserConstants.SESSION_DESTROYED:
      resetUser();
      resetSession();
      resetErrors();
      UserStore.__emitChange();
      break;
    case UserConstants.SESSION_CREATED:
      addSingleUser(payload.user);
      UserStore.__emitChange();
      break;
    case UserConstants.SESSION_ERRORS:
      resetErrors();
      addSessionErrors(payload.errors);
      UserStore.__emitChange();
      break;
    case UserConstants.USER_ERRORS:
      resetErrors();
      addUserErrors(payload.errors);
      UserStore.__emitChange();
      break;
  };
};

module.exports = UserStore;
