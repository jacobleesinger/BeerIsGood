import React, { Component } from 'react';
import linkState from 'react-link-state';

import CommentUtil from '../utils/comment_util';

class CommentForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      author_id: props.currentUser.id,
      review_id: props.review.id,
      body: ""
    };
  }

  handleSubmit = (e) => {
    e.preventDefault;
    const commentData = Object.assign({}, this.state);
    CommentUtil.createComment(commentData);
  }

  render() {

    return (
      <div>
        <form className="form-group commentForm">

          <label htmlFor="commentBody">Comment</label>
          <textarea
            className="form-control"
            id="reviewBody"
            valueLink={this.linkState(this, 'body')} ></textarea>

          <input className="btn btn-2 addCommentButton" type="submit" value="Add Comment" onClick={this.handleSubmit}/>
        </form>
      </div>
    );
  }
}

export default CommentForm;
