var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/user_constants');

var UserStore = new Store(AppDispatcher);

var _users = {};
var userErrors = [];


UserStore.userErrors = function() {
  return userErrors;
};

UserStore.findById = function(id) {
  return _users[id];
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


UserStore.all = function() {
  var users = [];
  for (var key in _users) {
    if (_users.hasOwnProperty(key)){
      users.push(_users[key]);
    }
  }
  return users;
};

UserStore.filterBySearchTerm = function(term) {
  return this.all().filter(function(user) {

    return user.username.toLowerCase().match(term.toLowerCase());
  })
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
