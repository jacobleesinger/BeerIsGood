var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var CurrentUserConstants = require('../constants/current_user_constants');

var _currentUser = {};

var CurrentUserStore = new Store(AppDispatcher);

var resetCurrentUser = function () {
  _currentUser = {};
};

var setCurrentUser = function(user) {
  _currentUser = user;
};

CurrentUserStore.currentUser = function () {
  return _currentUser;
};



CurrentUserStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case CurrentUserConstants.CURRENT_USER_SET:
      resetCurrentUser();
      setCurrentUser(payload.currentUser);
      CurrentUserStore.__emitChange();
      break;
    case CurrentUserConstants.CURRENT_USER_RESET:
      resetCurrentUser;
      CurrentUserStore.__emitChange();
      break;
  }
};





module.exports = CurrentUserStore;
