var Dispatcher = require('../dispatcher/dispatcher');
var FriendRequestConstants = require('../constants/friend_request_constants');

var FriendRequestActions = {

  receiveFriendRequest: function (requesterId, requestedId) {

    Dispatcher.dispatch({
      actionType: FriendRequestConstants.REQUEST_RECEIVED,
      requesterId: requesterId,
      requestedId: requestedId
    });
  },

  receiveAllFriendRequests: function(friendRequests) {
    Dispatcher.dispatch({
      actionType: FriendRequestConstants.REQUESTS_RECEIVED,
      requests: friendRequests
    });
  }
};

module.exports = FriendRequestActions;
