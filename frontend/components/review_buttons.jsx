import React from 'react';
import ReviewEditForm from './new_review_edit_form';
import ReviewUtil from '../util/review_util';

const ReviewButtons = (props) => {

   const handleDeleteClick = function(review) {
    
    ReviewUtil.destroyReview(review);
  };

  const handleEditClick = (review) => {
    // toggle a modal or something
  };

  if(props.currentUser.id != props.review.author_id) {
    return <div></div>;
  } else {
    return (
      <div className="reviewButtons">
        <div className="deleteReviewButton"
             onClick={handleDeleteClick.bind(this, props.review)}
             value={props.review}>delete</div>
           <div className="editReviewButton"
                onclick={handleEditClick.bind(this, props.review)}
                value={props.review}>edit</div>
      </div>
    );
  }

};

export default ReviewButtons;
