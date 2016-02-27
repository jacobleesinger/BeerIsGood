var React = require('react');
var UserStore = require('../stores/user_store');
import { Link } from 'react-router';

var Comment = React.createClass({
  getInitialState: function() {
    return({
      author: UserStore.findById(this.props.comment.author_id)
    })
  },

  componentDidMount: function() {
    this.authorToken = UserStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.authorToken.remove();
  },

  _onChange: function() {
    this.setState({
      author: UserStore.findById(this.props.comment.author_id)
    });
  },


  render: function() {
    var url = "/user/" + this.state.author.id
    return (
      <div className="commentContainer">

        <div className ="commentBody">
          <Link className="commentAuthor" to={url}>{this.state.author.username}:</Link> {this.props.comment.body}
        </div>

      </div>
    )
  }

});

module.exports = Comment;
