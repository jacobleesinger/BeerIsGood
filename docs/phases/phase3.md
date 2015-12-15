# Phase 3: Comments, Toasts, and Sidebars(2 days)

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
* User


### Actions
* ApiActions.deleteComment

* ApiActions.deleteToast

* ApiActions.receiveAllFriends
* ApiActions.deleteFriend

* ApiActions.receiveAllUsers -> triggered by ApiUtil
* ApiActions.receiveSingleUser
* ApiActions.deleteUser

* UserActions.fetchAllUsers -> triggers ApiUtil
* UserActions.fetchSingleUser
* UserActions.createUser
* UserActions.editUser
* UserActions.destroyUser


* ToastActions.createToast
* ToastActions.destroyToast


* CommentActions.createComment
* CommentActions.editComment
* CommentActions.destroyComment

* FriendActions.fetchAllFriends
* FriendActions.createFriend
* FriendActions.destroyFriend



### ApiUtil
* ApiUtil.fetchAllUsers
* ApiUtil.fetchSingleUser
* ApiUtil.createUser
* ApiUtil.editUser
* ApiUtil.destroyUser


* ApiUtil.createComment
* ApiUtil.editComment
* ApiUtil.destroyComment


* ApiUtil.createToast
* ApiUtil.destroyToast

* ApiUtil.FetchAllFriends
* ApiUtil.createFriend
* ApiUtil.destroyFriend


## Gems/Libraries
