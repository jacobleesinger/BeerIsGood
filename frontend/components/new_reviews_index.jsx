import React, { Component } from 'react';

import ReviewIndexItem from './new_review_index_item';
var ReviewStore = require('../stores/review_store');

class ReviewsIndex extends Component {

  constructor(props) {
    super(props);

    const user = props.user;
    const userId = user.id;
    const currentUser = props.currentUser;

    this.state = {
      reviews: ReviewStore.filterReviewsByUserId(userId)
    };

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    this.reviewsToken = ReviewStore.addListener(this._onChange);
  }

  componentWillUnmount() {
    this.reviewsToken.remove();
  }

  _onChange() {
      this.setState({
        reviews: ReviewStore.filterReviewsByUserId(this.props.user.id)
      })
  }


  render() {

    const reviewsList = this.state.reviews.map((review) => {

      return (
        <ReviewIndexItem
          currentUser={this.props.currentUser}
          user={this.props.user}
          review={review}
          key={review.id}
          />
      );
    }
  );
    return(
      <div className="col-md-6 reviewsIndexContainer">
        {reviewsList}
      </div>
    );
  }
}

export default ReviewsIndex;
