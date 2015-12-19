var React = require('react');
var Comment = require('./comment');
var ReviewUtil = require('../util/review_util');
var BeerStore = require('../stores/beer_store');
var CommentStore = require('../stores/comment_store');
var ToastStore = require('../stores/toast_store');
var Modal = require('react-bootstrap/lib/Modal');
var Button = require('react-bootstrap/lib/Button');
var EditForm = require('./review_edit_form');


var ReviewIndexItem = React.createClass({

  getInitialState: function () {
    return ({
      beer: BeerStore.find(this.props.review.beer_id),
      comments: CommentStore.filterCommentsByReviewId(this.props.review.id),
      toasts: ToastStore.filterToastsByReviewId(this.props.review.id),
      showModal: false
    });
  },

  closeEdit() {
    this.setState({ showModal: false });
    },

  openEdit() {
    this.setState({ showModal: true });
  },

  componentDidMount: function() {
    this.beerToken = BeerStore.addListener(this._onChange);
    this.commentToken = CommentStore.addListener(this._onChange);
    this.toastToken = ToastStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.beerToken.remove();
  },

  _onChange: function() {
    this.setState({
      beer: BeerStore.find(this.props.review.beer_id),
      comments: CommentStore.filterCommentsByReviewId(this.props.review.id),
      toasts: ToastStore.filterToastsByReviewId(this.props.review.id)
    });
  },


  handleDeleteClick: function (review) {
    ReviewUtil.destroyReview(review);
  },

  handleEditClick: function (review) {
    this.openEdit();
  },

  render: function () {
    debugger;

    return (
      <div className="reviewContainer col-md-12" >
        <div className="reviewContent col-md-12">
          <div className="reviewHeader col-md-12">
            {this.state.beer.name}

            <div onClick={this.handleDeleteClick.bind(this, this.props.review)} className="deleteReviewButton" value={this.props.review}>delete </div>

            <div onClick={this.handleEditClick}
              className="editReviewButton"
              value={this.props.review}>edit
            </div>

          </div>

          <Modal show={this.state.showModal} onHide={this.closeEdit}>

            <Modal.Header closeButton>
              <Modal.Title>Edit Review</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <EditForm user={this.props.user} review={this.props.review}/>
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={this.closeEdit}>Close</Button>
            </Modal.Footer>

          </Modal>

          <div className="reviewBody col-md-12">
            Review: {this.props.review.body}
          </div>

          <div className="reviewFooter col-md-12">
            <div className="reviewFooterItem col-md-4">
              Rating: {this.props.review.rating}
            </div>

            <div className="reviewFooterItem col-md-4">
              toasts: {this.state.toasts.length}
            </div>

          </div>
        </div>

        <div className="reviewCommentsIndex col-md-12">
          <h4>Comments</h4>
          {
            this.state.comments.map(function(comment) {
                return (<Comment comment={comment} key={comment.id} />);
              }.bind(this)
            )
          }
        </div>

      </div>
    );
  }
});



module.exports = ReviewIndexItem;
