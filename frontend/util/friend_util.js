var FriendActions = require('../actions/friend_actions');


var FriendUtil = {

  createFriendship: function(requestObj) {

    $.post(
      "../api/friendships",
        {friendship: {
          user_id: requestObj.requester_id,
          friend_id: requestObj.requested_id
        }
      },
      function(friendship) {
        FriendActions.receiveSingleFriendship(friendship);
      }
    );

    $.post(
      "../api/friendships",
        {friendship: {
          user_id: requestObj.requested_id,
          friend_id: requestObj.requester_id
        }
      },
      function(friendship) {
        FriendActions.receiveSingleFriendship(friendship);
      }
    );
  },

  fetchAllFriendships: function () {
    $.get('../api/friendships', function(friendships){
      FriendActions.receiveAllFriendships(friendships);
    });
  },

};

module.exports = FriendUtil;
