var React = require('react');
var UserStore = require('../stores/user_store');

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

    return (
      <div className="commentContainer">

        <h5>{this.state.author.username}</h5>

        <div className ="commentBody">
          {this.props.comment.body}
        </div>

      </div>
    )
  }

});

module.exports = Comment;
