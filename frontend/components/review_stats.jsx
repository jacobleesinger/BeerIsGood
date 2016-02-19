import React from 'react';
import ToastStore from '../stores/toast_store';

const ReviewStats = (props) => {
  const rating = props.review.rating;
  const toasts = ToastStore.filterToastsByReviewId().length;

  return (
    <div className="reviewStats">
      rating: {rating} stars!
      toasts: {toasts}
    </div>
  );
};

export default ReviewStats;
