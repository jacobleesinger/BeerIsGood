var FriendRequestActions = require('../actions/friend_request_actions');

var FriendRequestUtil = {

  createFriendRequest: function(requesterId, requestedId) {

    FriendRequestActions.receiveFriendRequest(requesterId, requestedId);
  },

  fetchAllFriendRequests: function () {
    $.get('api/friendrequests', function(){
      FriendRequestActions.receiveAllFriendRequests(friendRequests);
    });
  }
};


module.exports = FriendRequestUtil;
