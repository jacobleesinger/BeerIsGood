import React from 'react';
import UserStore from '../stores/user_store';
import { Link } from 'react-router';

export default Comment = (props) => {

    let author = UserStore.findById(props.comment.author_id)
    let url = "/user/" + author.id

    return (
      <div className="commentContainer">
        <div className ="commentBody">
          <Link
            className="commentAuthor"
            to={ url }>{ author.username }:
          </Link> { props.comment.body }
        </div>
      </div>
    );
};
