var FriendRequestActions = require('../actions/friend_request_actions');

var FriendRequestUtil = {

  createFriendRequest: function(requesterId, requestedId) {
    $.post('api/friendrequests',
    { friendrequest:
      {
        requester_id: requesterId,
        requested_id: requestedId
      }
    },
    function(friendRequest) {

      FriendRequestActions.receiveFriendRequest(friendRequest);
    });
  },

  fetchAllFriendRequests: function () {
    $.get('api/friendrequests', function(friendRequests){
      FriendRequestActions.receiveAllFriendRequests(friendRequests);
    });
  },

  destroyFriendRequest: function (requestId) {
    $.ajax({
      url: "api/friendrequests/" + requestId,
      type: "DELETE",
      success: function(friendRequests){
        FriendRequestActions.receiveAllFriendRequests(friendRequests);
      }
    });
  }
};


module.exports = FriendRequestUtil;
