import React, { Component } from 'react';

import ReviewStore from '../stores/review_store';

import ReviewStats from './review_stats';
import CommentForm from './new_comment_form';
import CommentsIndex from './new_comments_index';
import ToastButton from './toast_button';


const ReviewFooter = (props) => {

  const review = props.review;
  const currentUser = props.currentUser;

  return (
    <div className="reviewFooter">
      <ReviewStats review={review} />
      <CommentForm review={review} currentUser={currentUser} />
      <ToastButton review={review} currentUser={currentUser} />
      <CommentsIndex review={review} />
    </div>
  );
};

export default ReviewFooter;
