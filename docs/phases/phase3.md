# Phase 3: Users and Interactivity(2.5 days)

## Rails
### Models
* User
* Comment
* Toast

### Controllers
* Api::CommentsController (create, destroy, show, update)
* Api::ToastsController (create, destroy, show, update)

### Views
* users/show.json.jbuilder


## Flux
### Views (React Components)
* ReviewIndexItemComment
  - Toast


### Stores



### Actions
* ApiActions.deleteComment

* ApiActions.deleteToast

* ApiActions.receiveAllFriends
* ApiActions.deleteFriend


* ToastActions.createToast
* ToastActions.destroyToast


* CommentActions.createComment
* CommentActions.editComment
* CommentActions.destroyComment

* FriendActions.fetchAllFriends
* FriendActions.createFriend
* FriendActions.destroyFriend



### ApiUtil

* ApiUtil.createComment
* ApiUtil.editComment
* ApiUtil.destroyComment


* ApiUtil.createToast
* ApiUtil.destroyToast

* ApiUtil.FetchAllFriends
* ApiUtil.createFriend
* ApiUtil.destroyFriend


## Gems/Libraries
