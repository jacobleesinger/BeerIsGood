# Phase 3: Comments, Toasts, and Sidebars(2 days)

## Rails
### Models
* User
* Review
* Comment
* Toast

### Controllers
* Api::CommentsController (create, destroy, index, show, update)
* Api::ToastsController (create, destroy, show, update)

### Views
* comments/show.json.jbuilder
* toasts/show.json.jbuilder
* users/show.json.jbuilder


## Flux
### Views (React Components)
* ReviewIndexItemComment
  - Toast


### Stores
* User
* Beer

### Actions
* ApiActions.receiveAllComments
* ApiActions.receiveSingleComment
* ApiActions.deleteComment

* ApiActions.receiveAllToasts
* ApiActions.receiveSingleToast
* ApiActions.deleteToast

* ApiActions.receiveAllFriends
* ApiActions.recieveSingleFriend
* ApiActions.deleteFriend

* ApiActions.receiveAllUsers -> triggered by ApiUtil
* ApiActions.receiveSingleUser
* ApiActions.deleteUser

* UserActions.fetchAllUsers -> triggers ApiUtil
* UserActions.fetchSingleUser
* UserActions.createUser
* UserActions.editUser
* UserActions.destroyUser

* ToastActions.fetchAllToasts
* ToastActions.fetchSingleToast
* ToastActions.createToast
* ToastActions.destroyToast

* CommentActions.fetchAllComments
* CommentActions.fetchSingleComment
* CommentActions.createComment
* CommentActions.editComment
* CommentActions.destroyComment

* FriendActions.fetchAllFriends
* FriendActions.fetchSingleFriend
* FriendActions.createFriend
* FriendActions.destroyFriend



### ApiUtil
* ApiUtil.fetchAllUsers
* ApiUtil.fetchSingleUser
* ApiUtil.createUser
* ApiUtil.editUser
* ApiUtil.destroyUser

* ApiUtil.fetchAllComments
* ApiUtil.fetchSingleComment
* ApiUtil.createComment
* ApiUtil.editComment
* ApiUtil.destroyComment

* ApiUtil.fetchAllToasts
* ApiUtil.fetchSingleToast
* ApiUtil.createToast
* ApiUtil.destroyToast

* ApiUtil.FetchAllFriends
* ApiUtil.fetchSingleFriend
* ApiUtil.createFriend
* ApiUtil.destroyFriend


## Gems/Libraries
