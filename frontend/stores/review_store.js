var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var ReviewConstants = require('../constants/review_constants');

var _reviews = {};

var ReviewStore = new Store(AppDispatcher);

var addAllReviews = function (reviews) {
  review.forEach(function(review){
    _reviews[review.id] = review;
  });
};

var addSingleBeer = function(review) {
  _reviews[review.id] = review;
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
