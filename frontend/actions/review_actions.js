var Dispatcher = require('../dispatcher/dispatcher');
var ReviewConstants = require('../constants/review_constants');

var ReviewActions = {

  receiveAllReviews: function(reviews) {
    Dispatcher.dispatch({
      actionType: ReviewConstants.REVIEWS_RECEIVED,
      reviews: reviews
    });
  },

  receiveSingleReview: function(review) {
    
    var action = {
      actionType: ReviewConstants.REVIEW_RECEIVED,
      review: review
    };
    Dispatcher.dispatch(action);
  }

};

module.exports = ReviewActions;
