var React = require('react');
var ReviewIndexItem = require('./reviewIndexItem');
var ReviewForm = require('./new_review_form').default;
var ReviewStore = require('../stores/review_store');


var ReviewsIndex = React.createClass ({

  getInitialState: function () {
    if(this.props.user) {
      if(this.props.user.id === this.props.currentUser.id) {
        return ({
          reviews: ReviewStore.filterReviewsByUserId(this.props.user.id),
          currentUser: true
        });
      } else {
        return ({
          reviews: ReviewStore.filterReviewsByUserId(this.props.user.id),
          currentUser: false
        });
      }
    } else if(this.props.beer) {
      return ({
        reviews: ReviewStore.filterReviewsByBeerId(this.props.beer.id),
        currentUser: true
      });
    }
  },

  componentDidMount: function() {
    this.reviewsToken = ReviewStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.reviewsToken.remove();
  },

  _onChange: function () {
    if(this.props.user) {
      if(this.props.user.id === this.props.currentUser.id) {
        this.setState({
          reviews: ReviewStore.filterReviewsByUserId(this.props.user.id),
          currentUser: true
        });
      } else {
        this.setState({
          reviews: ReviewStore.filterReviewsByUserId(this.props.user.id),
          currentUser: false
        });
      }
    } else if(this.props.beer) {
      this.setState({
        reviews: ReviewStore.filterReviewsByBeerId(this.props.beer.id),
        currentUser: true
      });
    }
  },

  renderHeader: function() {
    if(this.state.reviews.length === 0 && this.props.user){
      return <h5>You Haven't Reviewed Any Beers Yet!</h5>
    }
  },

  renderReviewForm: function() {
    if(this.state.isReviewing && this.state.currentUser) {
      var beerToReview = this.props.beer;
      return <ReviewForm
        currentUser={this.props.currentUser}
        beer={this.props.beer}
        onClick={this.handleCloseFormClick} />;
    } else if(this.state.currentUser) {
      return(
        <button
          className="btn btn-1 openReviewFormButton" onClick={this.handleOpenFormClick}>
          <span className="glyphicon glyphicon-plus-sign"></span> Add Review</button>
      );
    }
  },

  handleOpenFormClick: function() {
    this.setState({
      isReviewing: true
    });
  },

  handleCloseFormClick: function() {
    this.setState({
      isReviewing: false
    });
  },

  render: function () {

    return (

      <div className="col-md-6 reviewsIndexContainer">
        {this.renderHeader()}
        {this.renderReviewForm()}
        {this.state.reviews.map(function(review) {

            return (
              <ReviewIndexItem currentUser={this.props.currentUser} user={review.author_id} review={review} key={review.id} />
            );
          }.bind(this)
        )}
      </div>

    );
  }
});

module.exports = ReviewsIndex;
