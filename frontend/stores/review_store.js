var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var ReviewConstants = require('../constants/review_constants');

var _reviews = [];

var ReviewStore = new Store(AppDispatcher);

var addAllReviews = function (reviews) {
  debugger;
  reviews.forEach(function(review){
    _reviews[review.id] = review;
  });
};

var addSingleReview = function(review) {
  _reviews[review.id] = review;
};

ReviewStore.all = function() {
  return _reviews;
};

ReviewStore.filterReviewsByUserId = function(userId) {
  debugger;
  return _reviews.filter(function(review){
    return review.author_id === userId;
  });
};


ReviewStore.__onDispatch = function(payload) {

  switch(payload.actionType) {
    case ReviewConstants.REVIEWS_RECEIVED:
      addAllReviews(payload.reviews)
      ReviewStore.__emitChange();
      break;
    case ReviewConstants.REVIEW_RECEIVED:
      addSingleReview(payload.review);
      ReviewStore.__emitChange();
      break;

  };
};

module.exports = ReviewStore;
