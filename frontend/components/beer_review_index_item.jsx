var React = require('react');
var Comment = require('./comment');
var ReviewUtil = require('../util/review_util');
var BeerStore = require('../stores/beer_store');
var CommentStore = require('../stores/comment_store');
var ToastStore = require('../stores/toast_store');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var UserStore = require('../stores/user_store');

var Display;

var BeerReviewIndexItem = React.createClass({

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
    this.setState({editing: false});
  },

  getInitialState: function () {
    return ({
      beers: BeerStore.all(),
      beer: this.props.beer,
      comments: CommentStore.filterCommentsByReviewId(this.props.review.id),
      toasts: ToastStore.filterToastsByReviewId(this.props.review.id),
      beer_id: this.props.beer.id,
      body: this.props.review.body,
      rating: this.props.review.rating,
      author_id: this.props.review.author_id,
      id: this.props.review.id,
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

  render: function () {

    return (
      <div className="row">
        <div className="reviewContainer col-md-12" >
          <div className="reviewContent col-md-12">
            <div className="reviewHeader col-md-12">
              {UserStore.findById(this.props.review.author_id).username} is drinking {this.state.beer.name}
            </div>


            <div className="reviewBody col-md-12">
              {this.props.review.body}
            </div>

            <div className="reviewFooter col-md-12">
              <div className="reviewFooterItem col-md-4">
                {this.props.review.rating} Stars!
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
      </div>
    )
  }
});



module.exports = BeerReviewIndexItem;
