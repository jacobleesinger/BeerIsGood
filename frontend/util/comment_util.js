var CommentActions = require('../actions/comment_actions');

var CommentUtil = {

  fetchAllComments: function() {
    $.get('../api/comments', function (comments) {
      CommentActions.receiveAllComments(comments);
    });
  },

  createComment: function(comment) {

    $.post('../api/comments', { comment: comment }, function(comment) {
       CommentActions.receiveSingleComment(comment)
     });
   },

   destroyComment: function(comment){
     $.ajax({
       url: "../api/comment/" + comment.id,
       type: 'DELETE',
       success: function(review){
         ReviewActions.receiveSingleReview(review);
       }
     });
   }

};

module.exports = CommentUtil;
