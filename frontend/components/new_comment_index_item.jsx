import React from 'react';
import UserStore from '../stores/user_store';

const CommentIndexItem = (props) => {

  const author = UserStore.findById(props.comment.author_id).username;
  const body = props.comment.body;
  return (
    <div className="commentIndexItem">
      <div><h5>{author} says:</h5></div>
      <div>{body}</div>
    </div>
  );
};

export default CommentIndexItem;
