var ReviewActions = require('../actions/review_actions');

var ReviewUtil = {

  fetchAllReviews: function() {
    $.get('api/reviews', function (reviews) {
      ReviewActions.receiveAllReviews(reviews);
    });
  },
  
  createReview: function(review) {
    $.post('api/reviews', { review: review }, function(user) {
       UserActions.receiveSingleUser(user)
     });
   },

   destroyReview: function(review){
     $.ajax({
       url: "api/reviews/" + review.id,
       type: 'DELETE',
       success: function(user){
         UserActions.receiveSingleUser(user);
       }
     });
   }

};

module.exports = ReviewUtil;
