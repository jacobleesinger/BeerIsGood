var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var FriendConstants = require('../constants/friend_constants');

var _friendships = {};

var FriendStore = new Store(AppDispatcher);

var addSingleFriendship = function(friendship) {

  _friendships[friendship.id] = friendship;
};

var addAllFriendships = function(friendships) {
  _friendships = {};
  friendships.forEach(function(friendship) {
    _friendships[friendship.id] = friendship;
  });
};

FriendStore.all = function () {
  var friendships = [];
  for (key in _friendships) {
    if (_friendships.hasOwnProperty(key)) {
      friendships.push(_friendships[key]);
    }
  }
  return friendships;
};

FriendStore.findById = function(friendshipId) {
  return _requests[friendshipId];
};



FriendStore.filterFriendshipsByUserId = function(userId) {
  return this.all().filter(function(friendship){
    return friendship.user_id === userId;
  });
};

FriendStore.filterFriendshipsByFriendId = function(friendId) {
  return this.all().filter(function(friendship){
    return friendship.friend_id === friendId;
  });
};



FriendStore.getFriendshipStatus = function(userId, friendId){
  var status = false;
  var requests = FriendStore.filterFriendshipsByUserId(userId);
  friendships.forEach(function(friendship) {
    if (friendship.user_id === userId) {
      status = true;
    }
  })
  return status;
};

FriendStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case FriendConstants.FRIENDSHIP_RECEIVED:
      addSingleFriendship(payload.friendship);
      FriendStore.__emitChange();
      break;
    case FriendConstants.FRIENDSHIPS_RECEIVED:
      addAllFriendships(payload.friendships);
      FriendStore.__emitChange();
      break;

  }
};

module.exports = FriendStore;
