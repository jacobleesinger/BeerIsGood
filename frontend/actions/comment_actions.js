var Dispatcher = require('../dispatcher/dispatcher');
var CommentConstants = require('../constants/comment_constants');

var CommentActions = {

  receiveAllComments: function(comments) {
    Dispatcher.dispatch({
      actionType: CommentConstants.COMMENTS_RECEIVED,
      reviews: reviews
    });
  },

  receiveSingleComment: function(comment) {
    var action = {
      actionType: CommentConstants.Comment_RECEIVED,
      comment: comment
    };
    Dispatcher.dispatch(action);
  }

};

module.exports = CommentActions;
