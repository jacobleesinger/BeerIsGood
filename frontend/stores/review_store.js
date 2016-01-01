var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var ReviewConstants = require('../constants/review_constants');

var _reviews = {};

var ReviewStore = new Store(AppDispatcher);

var addAllReviews = function (reviews) {
  reviews.forEach(function(review){
    _reviews[review.id] = review;
  });
};

var addSingleReview = function(review) {
  _reviews[review.id] = review;
};

var resetReviews = function() {
  _reviews = [];
};

ReviewStore.all = function() {
  var reviews = [];
  for (key in _reviews) {
    if (_reviews.hasOwnProperty(key)){
      reviews.push(_reviews[key]);
    }
  }
  return reviews.reverse();
};

ReviewStore.filterReviewsByUserId = function(userId) {
  return this.all().filter(function(review){
    return review.author_id === userId;
  });
};

ReviewStore.filterReviewsByBeerId = function(beerId) {
  return this.all().filter(function(review){
    return review.beer_id === beerId;
  });
};


ReviewStore.__onDispatch = function(payload) {

  switch(payload.actionType) {
    case ReviewConstants.REVIEWS_RECEIVED:
      resetReviews();
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
