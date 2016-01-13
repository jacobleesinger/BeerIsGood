var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var CommentUtil = require('../util/comment_util');

var CommentForm = React.createClass({

  mixins: [LinkedStateMixin],

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function () {
    return ({
      author_id: this.props.currentUser.id,
      review_id: this.props.review.id,
      body: ""
    });
  },

  handleSubmit: function (e) {
    e.preventDefault;

    var commentData = Object.assign({}, this.state)
    CommentUtil.createComment(commentData);
    this.props.onChange();
  },

  render: function () {




    return (
      <div className="col-md-12">
        <form className="form-group commentForm">

          <label htmlFor="commentBody">Comment</label>
          <textarea
            className="form-control"
            id="reviewBody"
            valueLink={this.linkState('body')} ></textarea>

          <input className="btn btn-2 addCommentButton" type="submit" value="Add Comment" onClick={this.handleSubmit}/>
        </form>

      </div>
    )
  }

});

module.exports = CommentForm;
