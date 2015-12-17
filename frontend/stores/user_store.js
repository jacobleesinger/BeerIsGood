var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    UserConstants = require('../constants/user_constants');

var UserStore = new Store(AppDispatcher);

var _users = {};
var currentUser = null;
var session = false;
var sessionErrors = [];
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
    currentUser = user;
    session = true;
};

var addAllUsers = function (users) {

  users.forEach(function(user){
    _users[user.id] = user;
  });
};

var resetErrors = function() {
  sessionErrors = [];
  userErrors = [];
};

var addSessionErrors = function(errors) {
  // debugger;
  sessionErrors = errors;
  session = false;
};

var addUserErrors = function(errors) {
  userErrors = errors;
  currentUser = null;
  session = false;
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
      // debugger;
      resetErrors();
      addSessionErrors(payload.errors);
      UserStore.__emitChange();
      break;
    case UserConstants.USER_ERRORS:
      // debugger;
      resetErrors();
      addUserErrors(payload.errors);
      UserStore.__emitChange();
      break;
  };
};

module.exports = UserStore;
