var React = require('react');
var ReviewIndexItem = require('./reviewIndexItem');
var ReviewForm = require('./review_form');
var ReviewStore = require('../stores/review_store');


var ReviewsIndex = React.createClass ({

  getInitialState: function () {

    return ({
      reviews: ReviewStore.filterReviewsByUserId(this.props.user.id)
    });
  },

  componentDidMount: function() {
    this.reviewsToken = ReviewStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.reviewsToken.remove();
  },

  _onChange: function () {
    this.setState({
      reviews: ReviewStore.filterReviewsByUserId(this.props.user.id)
    });
  },

  render: function () {
debugger;
    return (

      <div>
        {this.state.reviews.map(function(review) {

            return (
              <ReviewIndexItem currentUser={this.props.currentUser} user={this.props.user} review={review} key={review.id} />
            );
          }.bind(this)
        )}
      </div>

    );
  }
});

module.exports = ReviewsIndex;
