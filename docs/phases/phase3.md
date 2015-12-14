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

  * ToastActions.fetchAllToasts
  * ToastActions.fetchSingleToast
  * ToastActions.createToast
  * ToastActions.destroyToast

  * CommentActions.fetchAllComments
  * CommentActions.fetchSingleComment
  * CommentActions.createComment
  * CommentActions.editComment
  * CommentActions.destroyComment

### ApiUtil
  * ApiUtil.fetchAlComments
  * ApiUtil.fetchSingleComment
  * ApiUtil.createComment
  * ApiUtil.editComment
  * ApiUtil.destroyComment





* ApiActions.receiveAllNotebooks -> triggered by ApiUtil
* ApiActions.receiveSingleNotebook
* ApiActions.deleteNotebook
* NotebookActions.fetchAllNotebooks -> triggers ApiUtil
* NotebookActions.fetchSingleNotebook
* NotebookActions.createNotebook
* NotebookActions.editNotebook
* NotebookActions.destroyNotebook

### ApiUtil
* ApiUtil.fetchAllNotebooks
* ApiUtil.fetchSingleNotebook
* ApiUtil.createNotebook
* ApiUtil.editNotebook
* ApiUtil.destroyNotebook

## Gems/Libraries
