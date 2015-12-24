var Dispatcher = require('../dispatcher/dispatcher');
var FriendRequestConstants = require('../constants/friend_request_constants');

var FriendRequestActions = {

  receiveFriendRequest: function (request) {

    Dispatcher.dispatch({
      actionType: FriendRequestConstants.REQUEST_RECEIVED,
      request: request
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
