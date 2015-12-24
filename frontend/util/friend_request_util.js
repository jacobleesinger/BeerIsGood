var FriendRequestActions = require('../actions/friend_request_actions');

var FriendRequestUtil = {

  createFriendRequest: function(requesterId, requestedId) {
  
    FriendRequestActions.receiveFriendRequest(requesterId, requestedId);
  }
};

module.exports = FriendRequestUtil;
