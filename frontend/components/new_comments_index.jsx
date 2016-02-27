import React, { Component } from 'react';

import CommentStore from '../stores/comment_store';
import CommentIndexItem from './new_comment_index_item';

class CommentsIndex extends Component {
  constructor(props) {
    super(props);

    const review = props.review;

    this.state = {
      comments: CommentStore.filterCommentsByReviewId(review.id)
    };
  }

  componentDidMount() {
    this.commentToken = CommentStore.addListener(this._onChange);
  }

  componentWillUnmount() {
    this.commentToken.remove();
  }

  _onChange() {
    this.setState({
      comments: CommentStore.filterCommentsByReviewId(review.id)
    });
  }


  render() {
    const commentsList = this.state.comments.map((comment, idx) => {
      return (
        <CommentIndexItem comment={comment} key={idx} />
      );
    });
    return (
      <div>
        {commentsList}
      </div>
    );
  }

}

export default CommentsIndex;
