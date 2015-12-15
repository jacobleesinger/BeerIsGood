# Phase 2: Flux Architecture and Reviews

### Views (React Components)
* UserShow
* BeerShow
* ReviewsIndex
  - ReviewIndexItem
  - ReviewForm

### Stores
* Beer
* Review
* User

### Actions

* ApiActions.receiveAllUsers
* ApiActions.receiveSingleUser


* ApiActions.receiveAllReviews -> triggered by ApiUtil
* ApiActions.receiveSingleReview
* ApiActions.deleteReview

* ApiActions.receiveAllBeers
* ApiActions.receiveSingleBeer

* UserActions.fetchAllUsers
* UserActions.fetchSingleUser

* ReviewActions.fetchAllReviews -> triggers ApiUtil
* ReviewActions.fetchSingleReview
* ReviewActions.createReview
* ReviewActions.editReview
* ReviewActions.destroyReview

* BeerActions.fetchAllBeers
* BeerActions.fetchSingleBeer

### ApiUtil

* ApiUtil.fetchAllUsers
* ApiUtil.fetchSingleUser

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
