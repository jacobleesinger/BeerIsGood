var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var FriendRequestConstants = require('../constants/friend_request_constants');

var _requests = {};

var FriendRequestStore = new Store(AppDispatcher);

var addSingleFriendRequest = function(requesterId, requestedId) {
  if (_requests[requestedId]) {
    _requests[requestedId].push(requesterId);
  } else {
    _requests[requestedId] = [];
    _requests[requestedId].push(requesterId);
  }
};

var addAllFriendRequests = function(requests) {
  requests.forEach(function(request) {

    if (_requests[request.requested_id]) {
      _requests[request.requested_id].push(request.requester_id);
    } else {
      _requests[request.requested_id] = [];
      _requests[request.requested_id].push(request.requester_id);
    }
  });
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
      addSingleFriendRequest(payload.requesterId, payload.requestedId);
      FriendRequestStore.__emitChange();
      break;
    case FriendRequestConstants.REQUESTS_RECEIVED:
      addAllFriendRequests(payload.requests);
      FriendRequestStore.__emitChange();
      break;

  }
};

module.exports = FriendRequestStore;
