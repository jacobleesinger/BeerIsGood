var Dispatcher = require('../dispatcher/dispatcher');
var FriendConstants = require('../constants/friend_constants');

var FriendActions = {

  receiveSingleFriendship: function (friendship) {

    Dispatcher.dispatch({
      actionType: FriendConstants.FRIENDSHIP_RECEIVED,
      friendship: friendship
    });
  },

  receiveAllFriendships: function(friendships) {

    Dispatcher.dispatch({
      actionType: FriendConstants.FRIENDSHIPS_RECEIVED,
      friendships: friendships
    });
  }
};

module.exports = FriendActions;
