var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var CommentConstants = require('../constants/comment_constants');

var _comments = [];

var CommentStore = new Store(AppDispatcher);

var addAllComments = function (comments) {
  comments.forEach(function(comment){
    _comments[comment.id] = comment;
  });
};

var addSingleComment = function(comment) {
  _comments[comment.id] = comment;
};

CommentStore.all = function() {
  return _comments;
};

CommentStore.find = function (commentId) {
  return _comments[commentId];
}

CommentStore.filterCommentsByReviewId = function (reviewId) {
  return _comments.filter(function(comment){
    return comment.review_id === reviewId;
  });
}

CommentStore.__onDispatch = function(payload) {

  switch(payload.actionType) {
    case CommentConstants.COMMENTS_RECEIVED:
      addAllComments(payload.comments)
      CommentStore.__emitChange();
      break;
    case CommentConstants.COMMENT_RECEIVED:
      addSingleComment(payload.comment);
      CommentStore.__emitChange();
      break;

  };
};

module.exports = CommentStore;
