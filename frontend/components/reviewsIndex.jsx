import React, { Component } from 'react';
import ReviewIndexItem from './reviewIndexItem';
import ReviewForm from './review_form';
import ReviewStore from '../stores/review_store';


class ReviewsIndex extends Component {

  constructor(props) {
    super(props);

    if(this.props.user) {
      if(this.props.user.id === this.props.currentUser.id) {
        this.state =  {
          reviews: ReviewStore.filterReviewsByUserId(this.props.user.id),
          currentUser: true
        };
      } else {
        this.state = {
          reviews: ReviewStore.filterReviewsByUserId(this.props.user.id),
          currentUser: false
        };
      }
    } else if(this.props.beer) {
      this.state = {
        reviews: ReviewStore.filterReviewsByBeerId(this.props.beer.id),
        currentUser: true,
        beer: this.props.beer
      };
    }

    this._onChange = this._onChange.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderReviewForm = this.renderReviewForm.bind(this);
    this.handleOpenFormClick = this.handleOpenFormClick.bind(this);
    this.handleCloseFormClick = this.handleCloseFormClick.bind(this);
    this.updateBeer = this.updateBeer.bind(this);
  }



  componentDidMount() {
    this.reviewsToken = ReviewStore.addListener(this._onChange);
  }

  componentWillUnmount() {
    this.reviewsToken.remove();
  }

  componentWillReceiveProps() {
    if(this.props.beer) {
      this.setState({
        reviews: ReviewStore.filterReviewsByBeerId(this.props.beer.id)
      });
    }
  }

  _onChange() {
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
  }

  renderHeader() {
    if(this.state.reviews.length === 0 && this.props.user){
      return <h5>You Haven't Reviewed Any Beers Yet!</h5>
    }
  }

  renderReviewForm() {
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
  }

  handleOpenFormClick() {
    this.setState({
      isReviewing: true
    });
  }

  handleCloseFormClick() {
    this.setState({
      isReviewing: false
    });
  }

  updateBeer() {
    if(this.props.beer !== this.state.beer) {
      this.setState({
        reviews: ReviewStore.filterReviewsByBeerId(this.props.beer.id),
        beer: this.props.beer
      });
    }
  }

  render() {
    this.updateBeer();
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
};

export default ReviewsIndex;
