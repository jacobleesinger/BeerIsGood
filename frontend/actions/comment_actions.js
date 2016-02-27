var Dispatcher = require('../dispatcher/dispatcher');
var CommentConstants = require('../constants/comment_constants');

var CommentActions = {

  receiveAllComments: function(comments) {
    Dispatcher.dispatch({
      actionType: CommentConstants.COMMENTS_RECEIVED,
      comments: comments
    });
  },

  receiveSingleComment: function(comment) {

    var action = {
      actionType: CommentConstants.COMMENT_RECEIVED,
      comment: comment
    };
    Dispatcher.dispatch(action);
  }

};

module.exports = CommentActions;
