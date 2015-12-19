var ReviewActions = require('../actions/review_actions');

var ReviewUtil = {

  fetchAllReviews: function() {
    $.get('api/reviews', function (reviews) {
      ReviewActions.receiveAllReviews(reviews);
    });
  },

  createReview: function(review) {
    delete review.beers
    console.log(review);
    $.post('api/reviews', {review: review}, function(review) {
      ReviewActions.receiveSingleReview(review);
    });
  },

  destroyReview: function(review){
   $.ajax({
     url: "api/reviews/" + review.id,
     type: 'DELETE',
     success: function(reviews){
       ReviewActions.receiveAllReviews(reviews);
      }
    });
  },

  updateReview: function(review) {
    $.ajax({
      url: "/api/reviews/" + review.id,
      type: "PATCH",
      data: { review: review },
      success: function(review) {
        ReviewActions.receiveSingleReview(review);
      }
    });
  }

};

module.exports = ReviewUtil;
