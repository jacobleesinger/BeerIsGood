var FriendActions = require('../actions/friend_actions');

var FriendUtil = {

  createFriendshipRequest: function(userId, friendId) {
    FriendActions.receiveFriendshipRequest(userId, friendId);
  }
};

module.exports = FriendUtil;
