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
  // $.ajax({
  //   url: "api/reviews",
  //   data: {review: review},
  //   method: 'post',
  //   success: function () {
  //     ReviewActions.receiveSingleReview(review);
  //   }
  // });
},

   destroyReview: function(review){
     $.ajax({
       url: "api/reviews/" + review.id,
       type: 'DELETE',
       success: function(reviews){
         ReviewActions.receiveAllReviews(reviews);
       }
     });
   }

};

module.exports = ReviewUtil;
