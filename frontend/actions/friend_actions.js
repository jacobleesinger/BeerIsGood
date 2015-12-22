var Dispatcher = require('../dispatcher/dispatcher');
var FriendConstants = require('../constants/friend_constants');

var FriendActions = {

  receiveFriendshipRequest: function (userId, friendId) {
    Dispatcher.dispatch({
      actionType: FriendConstants.REQUEST_RECEIVED,
      userId: userId,
      friendId: friendId
    });
  }
};

module.exports = FriendActions;
