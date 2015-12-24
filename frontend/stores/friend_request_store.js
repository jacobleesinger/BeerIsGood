var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var FriendRequestConstants = require('../constants/friend_request_constants');

var _requests = {};

var FriendRequestStore = new Store(AppDispatcher);

var newFriendRequest = function(requesterId, requestedId) {
  if (_requests[requestedId]) {
    _requests[requestedId].push(requesterId);
  } else {
    _requests[requestedId] = [];
    _requests[requestedId].push(requesterId);
  }
};

FriendRequestStore.getAllRequestsByRequestedId = function(requestedId) {

  if(_requests[requestedId]){
    return _requests[requestedId];
  } else {
    return [];
  }
};

FriendRequestStore.getRequestStatus = function(requesterId, requestedId){
  var status = false;
  var requests = FriendRequestStore.getAllRequestsByRequestedId(requestedId);
  requests.forEach(function(request) {
    if (request === requesterId) {
      status = true;
    }
  })
  return status;
};

FriendRequestStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case FriendRequestConstants.REQUEST_RECEIVED:
      newFriendRequest(payload.requesterId, payload.requestedId);
      FriendRequestStore.__emitChange();
      break;
  }
};

module.exports = FriendRequestStore;
