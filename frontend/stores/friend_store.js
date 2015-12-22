var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var FriendConstants = require('../constants/friend_constants');

var _requests = {};

var FriendStore = new Store(AppDispatcher);

var newFriendRequest = function(userId, friendId) {
  if (_requests[friendId]) {
    _requests[friendId].push(userId);
  } else {
    _requests[friendId] = [];
    _requests[friendId].push(userId);
  }
};

FriendStore.getRequestsById = function(userId) {

  if(_requests[userId]){
    return _requests[userId];
  } else {
    return [];
  }
};

FriendStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case FriendConstants.REQUEST_RECEIVED:
      newFriendRequest(payload.userId, payload.friendId);
      break;
  }
};

module.exports = FriendStore;
