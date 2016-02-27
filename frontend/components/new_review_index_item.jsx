import React, { Component } from 'react';

var ReviewStore = require('../stores/review_store');

import ReviewButtons from './review_buttons';
import ReviewEditForm from './new_review_edit_form';
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

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    this.reviewToken = ReviewStore.addListener(this._onChange);
  }

  componentWillUnmount() {
    this.reviewToken.remove();
  }

  _onChange() {

    this.setState({
      review: ReviewStore.findById(this.props.review.id)
    });
  }

  render() {

    return (
      <div className="reviewIndexItem">
        <ReviewHeader review={this.props.review} />
        <ReviewButtons review={this.props.review} currentUser={this.props.currentUser} />
        <ReviewBody review={this.props.review} />
        <ReviewFooter review={this.props.review} currentUser={this.props.currentUser} />

      </div>
    )
  }
}

export default ReviewIndexItem;
