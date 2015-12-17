var Store = require('flux/utils').Store;
var _users = {};
var UserConstants = require('../constants/user_constants');
var AppDispatcher = require('../dispatcher/dispatcher');


var UserStore = new Store(AppDispatcher);

var resetUsers = function(users) {
  _users = users.slice(0);
};



UserStore.all = function () {
  return Object.keys(_users);
};

UserStore.currentUser = function (user) {
  return _users[user.id]
}

var resetUser = function(user) {
  _user[user.id] = user;
}

UserStore.__onDispatch= function (payload) {
  switch(payoad.actionType) {
    case UserConstants.USER_RECEIVED:
    resetUser();



  }
}

module.exports = UserStore;
