import React, { Component } from 'react'
import ToastUtil from '../util/toast_util';
import ToastStore from '../stores/toast_store';

class ToastButton extends Component {

  constructor(props) {
    super(props);
  }




  handleToastClick(e) {
    const toast = {
      review_id: review.id,
      user_id: currentUser.id
    };
    ToastUtil.createToast(toast);
  };

  render() {

    const currentUser = this.props.currentUser;
    const review = this.props.review;
    const hasToasted = ToastStore.userHasToasted(currentUser.id, review.id);
    var Button = <div></div>;
    if(hasToasted) {
      Button = <div>You Toasted This!</div>;
    } else {
      Button = <button
        className="btn btn-1 toastReviewButton"
        onClick={this.handleToastClick}>
        Toast This!
      </button>
    }
    return (<div>{Button}</div>);
  }
}

export default ToastButton;
