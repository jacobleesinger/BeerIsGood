var Dispatcher = require('../dispatcher/dispatcher');
var FriendRequestConstants = require('../constants/friend_request_constants');

var FriendRequestActions = {

  receiveFriendRequest: function (requesterId, requestedId) {
  
    Dispatcher.dispatch({
      actionType: FriendRequestConstants.REQUEST_RECEIVED,
      requesterId: requesterId,
      requestedId: requestedId
    });
  }
};

module.exports = FriendRequestActions;
