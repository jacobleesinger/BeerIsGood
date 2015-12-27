var React = require('react');
var ReviewStore = require('../stores/review_store');
var BeerReviewIndexItem = require('./beer_review_index_item');
var BeerReviewForm = require('./beer_review_form');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ReviewUtil = require('../util/review_util');

var BeerReviewsIndex = React.createClass ({

  mixins: [LinkedStateMixin],

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function () {
    return ({
      reviews: ReviewStore.filterReviewsByBeerId(this.props.beer.id),
      body: "",
      rating: 0
    });
  },

  getReviewObject: function () {
    return ({
      beer_id: this.props.beer.id,
      body: this.state.body,
      rating: this.state.rating,
      author_id: this.props.currentUser.id
    })
  },

  componentDidMount: function() {
    this.reviewsToken = ReviewStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.reviewsToken.remove();
  },

  _onChange: function () {
    this.setState({
      reviews: ReviewStore.filterReviewsByBeerId(this.props.beer.id)
    });
  },

  handleSubmit: function(e) {
    e.preventDefault;

    Object.assign({}, this.state)
    ReviewUtil.createReview(this.getReviewObject());
  },


  handleRatingChange: function(event) {
    this.setState({rating: event.target.value});
  },

  render: function () {
debugger;
    return (
      <div>
        <div className="row">

          <div className="col-md-6 reviewsIndexContainer">
        <h3>Write a Review!</h3>
        <form className="form-group reviewForm">

            <label htmlFor="reviewBody">What do you think?</label>
            <textarea className="form-control" id="reviewBody" valueLink={this.linkState('body')} ></textarea>

            <label htmlFor="reviewRating">Your Rating</label>
              <select onChange={this.handleRatingChange}>
                <option value="0">rate beer</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

            <input className="btn btn-success" type="submit" value="Add Your Review" onClick={this.handleSubmit}/>

        </form>



            <h3>All Reviews</h3>

            {this.state.reviews.map(function(review) {
                return (
                  <BeerReviewIndexItem beer={this.props.beer} review={review} key={review.id} />
                );
              }.bind(this)
            )}
          </div>
        </div>
      </div>

    );
  }
});

module.exports = BeerReviewsIndex;
