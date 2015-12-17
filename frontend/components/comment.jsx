var React = require('react');

var Comment = React.createClass({


  render: function() {

    return (
      <div>
  
        <h5>{this.props.comment.author.username}:</h5>

        {this.props.comment.body}
      </div>
    )
  }

});

module.exports = Comment;
