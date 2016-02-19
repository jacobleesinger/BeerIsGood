import React, { Component } from 'react';

import ReviewStore from '../stores/review_store';

import ReviewEditForm from './review_edit_form';
import ReviewHeader from './review_header';
import ReviewBody from './review_body';
import ReviewFooter from './review_footer';

class ReviewIndexItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      review: review
    };

    const review = props.review;
    const currentUser = props.currentUser;
    const id = props.review.id;

  }

  componentDidMount() {
    this.reviewToken = ReviewStore.addListener(this._onChange);
  }

  componentWillUnmount() {
    this.reviewToken.remove();
  }

  _onChange() {
    this.setState({
      review: ReviewStore.findById(id);
    })
  }

  render() {
    return (
      <div className="reviewIndexItem">
        <ReviewEditForm review={review} currentUser={currentUser} />
        <ReviewHeader review={review} />
        <ReviewBody review={review} />
        <ReviewFooter review={review} currentUser={currentUser} />

      </div>
    )
  }
}

export default ReviewIndexItem;
