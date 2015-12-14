# Phase 2: Flux Architecture: Users, Beers, and Reviews (3 days)

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* FriendReviewsIndex
  - FriendReviewIndexItem
    - FriendReviewCommentForm
* UserReviewsIndex
  - UserReviewIndexItem
* BeerReviewsIndex
  - BeerReviewIndexItem
  - BeerReviewForm


### Stores
* Review
* User
* Beer

### Actions
* ApiActions.receiveAllReviews -> triggered by ApiUtil
* ApiActions.receiveSingleReview
* ApiActions.deleteNote
* NoteActions.fetchAllReviews -> triggers ApiUtil
* NoteActions.fetchSingleReview
* NoteActions.createReview
* NoteActions.editReview
* NoteActions.destroyReview

### ApiUtil
* ApiUtil.fetchAllReviews
* ApiUtil.fetchSingleReview
* ApiUtil.createReview
* ApiUtil.editReview
* ApiUtil.destroyReview

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap
