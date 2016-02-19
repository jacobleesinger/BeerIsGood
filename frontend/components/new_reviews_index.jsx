import React, { Component } from 'react';

import ReviewIndexItem from './new_review_index_item';
import ReviewStore from '../stores/review_store';

class ReviewsIndex extends Component {

  constructor(props) {
    super(props);

    const user = props.user;
    const userId = user.id;
    const currentUser = props.currentUser;

    this.state = {
      reviews: filterReviewsByUserId(userId)
    };
  }

  componentDidMount() {
    this.reviewsToken = ReviewStore.addListener(this._onChange);
  }

  componentWillUnmount() {
    this.reviewsToken.remove();
  }

  _onChange() {
      this.setState({
        reviews: ReviewStore.filterReviewsByUserId(userId)
      })
  }

  const reviewsList = this.state.reviews.map((review) => {
      return (
        <ReviewIndexItem
          currentUser={currentUser}
          user={user}
          review={review}
          key={review.id}
        />
      );
    }
  );

  render() {
    return(
      <div>
        {reviewsList}
      </div>
    );
  }
}

export default ReviewsIndex;
