var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    UserConstants = require('../constants/user_constants');

var UserStore = new Store(AppDispatcher);

var _users = {};
var currentUser = null;
var session = false;

UserStore.currentUser = function(){
  return currentUser;
};

UserStore.currentStatus = function(){
  return session;
};

var resetUser = function(){
  currentUser = null;
};

var resetSession = function() {
  session = false;
};

var addSingleUser = function(newUser){

    _users[newUser.id] = newUser;
    currentUser = newUser;
    session = true;
};

var addAllUsers = function (users) {
  users.forEach(function(user){
    _users[user.id] = user;
  });
};

UserStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case UserConstants.USER_RECEIVED:
      addSingleUser(payload.user);
      UserStore.__emitChange();
      break;
    case UserConstants.USERs_RECEIVED:
      addAllUsersUser(payload.users);
      UserStore.__emitChange();
      break;
    case UserConstants.SESSION_DESTROYED:
      resetUser();
      UserStore.__emitChange();
      break;
    case UserConstants.SESSION_CREATED:
      addSingleUser(payload.user);
      UserStore.__emitChange();
      break;
  };
};

module.exports = UserStore;
