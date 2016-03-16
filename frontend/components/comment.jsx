import React, { Component } from 'react';
import UserStore from '../stores/user_store';
import { Link } from 'react-router';

class Comment extends Component {

  constructor(props) {
    super(props);

    this.state = {
      author: UserStore.findById(this.props.comment.author_id)
    };
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    this.authorToken = UserStore.addListener(this._onChange);
  }

  componentWillUnmount() {
    this.authorToken.remove();
  }

  _onChange() {
    this.setState({
      author: UserStore.findById(this.props.comment.author_id)
    });
  }

  render() {
    let url = "/user/" + this.state.author.id
    return (
      <div className="commentContainer">
        <div className ="commentBody">
          <Link
            className="commentAuthor"
            to={url}>{this.state.author.username}:
          </Link> {this.props.comment.body}
        </div>
      </div>
    );
  }

};

export default Comment;
