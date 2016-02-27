import React, { Component } from 'react';
import linkState from 'react-link-state';

import CommentUtil from '../util/comment_util';

class CommentForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      author_id: props.currentUser.id,
      review_id: props.review.id,
      body: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {

    e.preventDefault;
    const commentData = Object.assign({}, this.state);
    CommentUtil.createComment(commentData);
  }

  render() {

    return (
      <div>
        <form className="form-group commentForm" onSubmit={this.handleSubmit}>

          <label htmlFor="commentBody">Comment</label>
          <textarea
            className="form-control"
            id="reviewBody"
            valueLink={linkState(this, 'body')} ></textarea>

          <input className="btn btn-2 addCommentButton" type="submit" value="Add Comment" />
        </form>
      </div>
    );
  }
}

export default CommentForm;
