var React = require('react');
var Comment = require('./comment');
var ReviewUtil = require('../util/review_util');
var BeerStore = require('../stores/beer_store');
var CommentStore = require('../stores/comment_store');
var ToastStore = require('../stores/toast_store');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var CommentForm = require('./comment_form');
var ToastUtil = require('../util/toast_util');
var UserStore = require('../stores/user_store');
var Link = require('react-router').Link;

var Display;
var Buttons;
var CommentFormDisplay;
var CommentButton;
var ToastButton;


var ReviewIndexItem = React.createClass({

  mixins: [LinkedStateMixin],

  contextTypes: {
    router: React.PropTypes.func
  },


  handleToastClick: function (review) {

    var toast = {
      review_id: review.id,
      user_id: this.props.currentUser.id
    };
    ToastUtil.createToast(toast);
  },


  filteredState: function() {
    var filteredState = {};
    for (var key in this.state) {
      if (this.state.hasOwnProperty(key)){

        if (key !== "beers") {
          filteredState[key] = this.state[key];
        }
      }
    }
    return filteredState;
  },

  handleSubmit: function(e) {
    e.preventDefault();
    Object.assign({}, this.state);
    ReviewUtil.updateReview(this.filteredState());
    this.setState({editing: false});
  },

  currentUserHasToastedReview: function () {
    var result = false;

    this.state.toasts.forEach(function(toast) {

      if (toast.user_id === this.props.currentUser.id) {
        result = true;
      }
    }.bind(this))
    return result;
  },

  displayToastButton: function () {
    var currentUserHasToastedReview = this.currentUserHasToastedReview();
    if(currentUserHasToastedReview){
      ToastButton = (
        <div className="reviewFooterItem col-md-4 col-md-offset-6">
          <div className="toastStatus"></div>
        </div>
        );
    } else {
      ToastButton = (
        <div className="reviewFooterItem col-md-4 col-md-offset-6">
          <button
            onClick={this.handleToastClick.bind(this, this.props.review)}
            className="toastReviewButton toastStatus btn btn-1"
            value={this.props.review}>
              <i className="fa fa-beer"></i> Toast!
          </button>
        </div>
      );
    }
  },

  getInitialState: function () {
    return ({
      user: UserStore.findById(this.props.review.author_id),
      beers: BeerStore.all(),
      beer: BeerStore.find(this.props.review.beer_id),
      comments: CommentStore.filterCommentsByReviewId(this.props.review.id),
      toasts: ToastStore.filterToastsByReviewId(this.props.review.id),
      beer_id: this.props.review.beer_id,
      body: this.props.review.body,
      rating: this.props.review.rating,
      author_id: this.props.review.author_id,
      id: this.props.review.id,
      editing: false,
      commenting: false,

    });
  },


  componentDidMount: function() {
    this.beerToken = BeerStore.addListener(this._onChange);
    this.commentToken = CommentStore.addListener(this._onChange);
    this.toastToken = ToastStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.beerToken.remove();
    this.commentToken.remove();
    this.toastToken.remove();
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

  handleCommentClick: function (review) {
    this.setState({
      commenting: true
    });
  },


  handleRatingChange: function(event) {
    this.setState({rating: event.target.value});
  },

  handleBeerChange: function(event) {
    this.setState({beer_id: event.target.value});
  },

  checkIfCurrentUser: function () {
    if(this.props.currentUser.id === this.state.user.id) {
      Buttons = (
        <div>
          <div onClick={this.handleDeleteClick.bind(this, this.props.review)} className="deleteReviewButton" value={this.props.review}>delete</div>

          <div onClick={this.handleEditClick.bind(this, this.props.review)} className="editReviewButton" value={this.props.review}>edit</div>
        </div>
      );

    } else {
      Buttons = <div></div>;
    }
  },

  isCommenting: function () {
    if (this.state.commenting) {
      CommentFormDisplay = <CommentForm review={this.props.review} currentUser={this.props.currentUser} onClick={this.handleCommentFormSubmit}/>;

    } else {
      CommentFormDisplay = <button onClick={this.handleCommentClick.bind(this, this.props.review)} className="btn btn-1 createCommentButton" value={this.props.review}>
        Comment<i className="fa fa-comment-o commentIcon"></i>
      </button>;

    }
  },

  handleCommentFormSubmit: function () {

    this.setState({
      commenting: false
    });
  },

  renderRating: function() {
    var stars = [];
    for(var i = 0; i < this.state.rating; i++) {
      stars.push(<span className="glyphicon glyphicon-star ratingStar" key={i}></span>);
    }
    return stars.map(function(star) {
      return star;
    }, this);
  },

  isEditing: function () {
    this.checkIfCurrentUser();
    this.displayToastButton();
    if (this.state.editing){
      Display =
      <div className="">
        <form className="form-group reviewForm">

            <label htmlFor="reviewBody">What do you think?</label>
            <textarea className="form-control" id="reviewBody" valueLink={this.linkState('body')} ></textarea>

            <label htmlFor="reviewRating" className="reviewFormItem">Your Rating</label>
              <select onChange={this.handleRatingChange}>
                <option value="0">rate beer</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

            <input className="btn btn-2 addReviewButton reviewFormItem" type="submit" value="Update Review" onClick={this.handleSubmit}/>

        </form>
      </div>
    } else {
      var userUrl = '/user/' + this.state.user.id;
      var beerUrl = '/beer/' + this.state.beer.id;

      Display =
        <div className="row">
          <div className="reviewContainer col-md-12" >
            <div className="reviewContent col-md-12">
              <div className="reviewHeader col-md-12">
                <div className="reviewTitle col-md-9">
                  <Link className="reviewLink" to={userUrl} >{this.state.user.username} </Link>
                   is drinking
                  <Link className="reviewLink" to={beerUrl} > {this.state.beer.name}</Link>!
                </div>
                <div className="col-md-3 reviewButtons">
                  {Buttons}
                </div>

              </div>


              <div className="reviewBody col-md-12">
                {this.props.review.body}
                <br />
                <br />
                {this.renderRating()}
              </div>
              <div className="reviewFooter">
                <div className="reviewFooterItem col-md-6">
                  <div className="reviewToasts">
                    {this.state.toasts.length}
                    <i className="fa fa-beer toastIcon"></i>
                  </div>
                </div>
                <div className="reviewFooterItem col-md-6">
                  {ToastButton}
                </div>





              </div>

            </div>

            <div className="reviewCommentsIndex col-md-12">

              {CommentFormDisplay}

              {
                this.state.comments.map(function(comment) {
                    return (<Comment comment={comment} key={comment.id} />);
                  }.bind(this)
                )
              }
            </div>

          </div>
        </div>
    }
  },

  render: function () {

    this.isCommenting();
    this.isEditing();


    return (
      <div>
        {Display}

      </div>
    )
  }
});



module.exports = ReviewIndexItem;
