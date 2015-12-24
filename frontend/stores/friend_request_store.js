var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var FriendRequestConstants = require('../constants/friend_request_constants');

var _requests = {};

var FriendRequestStore = new Store(AppDispatcher);

var addSingleFriendRequest = function(request) {

  _requests[request.id] = request;
};

var addAllFriendRequests = function(requests) {
  _requests = {};
  requests.forEach(function(request) {
    _requests[request.id] = request;
  });
};

FriendRequestStore.all = function () {
  var requests = [];
  for (request in _requests) {
    if (_requests.hasOwnProperty(request)) {
      requests.push(_requests[request]);
    }
  }
  return requests;
};



FriendRequestStore.filterRequestsByRequestedId = function(requestedId) {
  return this.all().filter(function(request){
    return request.requested_id === requestedId;
  });
};



FriendRequestStore.getRequestStatus = function(requesterId, requestedId){
  var status = false;
  var requests = FriendRequestStore.filterRequestsByRequestedId(requestedId);
  requests.forEach(function(request) {
    if (request.requester_id === requesterId) {
      status = true;
    }
  })
  return status;
};

FriendRequestStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case FriendRequestConstants.REQUEST_RECEIVED:
      addSingleFriendRequest(payload.request);
      FriendRequestStore.__emitChange();
      break;
    case FriendRequestConstants.REQUESTS_RECEIVED:
      addAllFriendRequests(payload.requests);
      FriendRequestStore.__emitChange();
      break;

  }
};

module.exports = FriendRequestStore;
