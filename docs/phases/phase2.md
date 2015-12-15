### Views (React Components)
* ReviewsIndex
  - ReviewIndexItem
  - ReviewForm

### Stores
* Review

### Actions
* ApiActions.receiveAllReviews -> triggered by ApiUtil
* ApiActions.receiveSingleReview
* ApiActions.deleteReview

* ApiActions.receiveAllBeers
* ApiActions.receiveSingleBeer

* ReviewActions.fetchAllReviews -> triggers ApiUtil
* ReviewActions.fetchSingleReview
* ReviewActions.createReview
* ReviewActions.editReview
* ReviewActions.destroyReview

* BeerActions.fetchAllBeers
* BeerActions.fetchSingleBeer

### ApiUtil
* ApiUtil.fetchAllReviews
* ApiUtil.fetchSingleReview
* ApiUtil.createReview
* ApiUtil.editReview
* ApiUtil.destroyReview


* ApiUtil.fetchAllBeers
* ApiUtil.fetchSingleBeer

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap
