# Phase 2: Flux Architecture: Users, Beers, and Reviews (2.5 days)

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* FriendReviewsIndex
  - FriendReviewIndexItem
* UserReviewsIndex
  - UserReviewIndexItem
* BeerReviewsIndex
  - BeerReviewIndexItem
  - BeerReviewForm


### Stores
* User
* Beer

### Actions
* ApiActions.receiveAllReviews -> triggered by ApiUtil
* ApiActions.receiveSingleReview
* ApiActions.deleteNote
* ReviewActions.fetchAllReviews -> triggers ApiUtil
* ReviewActions.fetchSingleReview
* ReviewActions.createReview
* ReviewActions.editReview
* ReviewActions.destroyReview

### ApiUtil
* ApiUtil.fetchAllReviews
* ApiUtil.fetchSingleReview
* ApiUtil.createReview
* ApiUtil.editReview
* ApiUtil.destroyReview

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap
