import React from 'react'
import ToastUtil from '../utils/toast_util';

const ToastButton = (props) => {
  const currentUser = props.currentUser;
  const review = props.review;

  const hasToasted = ToastStore.userHasToasted(currentUser.id, review.id);

  if(hasToasted) {
    const Button = <div>You Toasted This!</div>;
  } else {
    const Button = <button
      className="btn btn-1 toastReviewButton"
      onClick={handleToastClick}>
        Toast This!
      </button>
  }

  handleToastClick = (e) => {
    const toast = {
      review_id: review.id,
      user_id: currentUser.id
    };
    ToastUtil.createToast(toast);
  };

  return ({Button});

};

export default ToastButton;
