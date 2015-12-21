var React = require('react');
var Comment = require('./comment');
var ReviewUtil = require('../util/review_util');
var BeerStore = require('../stores/beer_store');
var CommentStore = require('../stores/comment_store');
var ToastStore = require('../stores/toast_store');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ReviewDisplay = require('./review_display');
var ReviewEditForm = require('./review_edit_form');


var ReviewIndexItem = React.createClass({

  mixins: [LinkedStateMixin],

  contextTypes: {
    router: React.PropTypes.func
  },

  filteredState: function() {
    filteredState = {};
    for (key in this.state) {
      if (this.state.hasOwnProperty(key)){

        if (key !== "beers") {
          filteredState[key] = this.state[key];
        }
      }
    }
    return filteredState;
  },

  handleSubmit: function(e) {
    e.preventDefault;
    Object.assign({}, this.state);
    ReviewUtil.updateReview(this.filteredState());
    this.closeEdit();
  },

  getInitialState: function () {
    return ({
      beers: BeerStore.all(),
      beer: BeerStore.find(this.props.review.beer_id),
      comments: CommentStore.filterCommentsByReviewId(this.props.review.id),
      toasts: ToastStore.filterToastsByReviewId(this.props.review.id),
      showModal: false,
      beer_id: this.props.review.beer_id,
      body: this.props.review.body,
      rating: this.props.review.rating,
      author_id: this.props.review.author_id,
      id: this.props.review.id,
      editing: false
    });
  },

  openEdit: function() {
    this.setState({ showModal: true });
  },

  closeEdit: function() {
    this.setState({ showModal: false });
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
    this.setState({
      editing: true
    });
  },

  handleRatingChange: function(event) {
    this.setState({rating: event.target.value});
  },

  isEditing: function () {
    if (this.state.editing){
      Display = <ReviewEditForm review={this.props.review}
    } else {
      Display = <ReviewDisplay review={this.props.review}
    }
  },

  render: function () {

    var option;


    return (
      <div className="reviewContainer col-md-12" >
        <div className="reviewContent col-md-12">
          <div className="reviewHeader col-md-12">
            {this.state.beer.name}

            <div onClick={this.handleDeleteClick.bind(this, this.props.review)} className="deleteReviewButton" value={this.props.review}>delete</div>

            <div onClick={this.handleEditClick.bind(this, this.props.review)} className="editReviewButton" value={this.props.review}>edit</div>

          </div>

          <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div className="modal-dialog" role="document">
              <div className="modal-content">

                <div className="modal-header">
                  <h4 className="modal-title" id="myModalLabel">Edit Review</h4>
                </div>

                <div className="modal-body">
                  <form className="form-group reviewForm">




                    <label htmlFor="reviewBody">What do you think?</label>
                    <textarea className="form-control" id="reviewBody" valueLink={this.linkState('body')} ></textarea>

                    <label htmlFor="reviewRating">Your Rating</label>
                      <select onChange={this.handleRatingChange} value={this.state.rating} onChange={this.handleRatingChange}>

                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>

                      </select>

                    <input className="btn btn-success" type="submit" defaultValue="Update Review" onClick={this.handleSubmit}/>

                </form>
            </div>

          <div className="modal-footer">

              <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>

          </div>

        </div>
      </div>
    </div>

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
