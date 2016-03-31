var ReviewActions = require('../actions/review_actions');
var ErrorActions = require('../actions/error_actions');

var ReviewUtil = {

  fetchAllReviews: function() {
    $.get('api/reviews', function (reviews) {
      ReviewActions.receiveAllReviews(reviews);
    });
  },

  createReview: function(review) {

    $.ajax({
      url: "../api/reviews",
      type: "POST",
      data: {review: review},
      success: function(review) {
        ReviewActions.receiveSingleReview(review);
      },
      error: function(errors) {
        ErrorActions.receiveAllErrors(errors);
      }
    });


  },

  destroyReview: function(review){
   $.ajax({
     url: "../api/reviews/" + review.id,
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
