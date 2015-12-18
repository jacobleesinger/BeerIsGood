var React = require('react');

var Comment = React.createClass({


  render: function() {

    return (
      <div className="commentContainer">

        <h5>{this.props.comment.author.username}</h5>

        <div className ="commentBody">
          {this.props.comment.body}
        </div>

      </div>
    )
  }

});

module.exports = Comment;
