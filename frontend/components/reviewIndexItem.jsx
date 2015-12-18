var React = require('react');
var Comment = require('./comment');
var ApiUtil = require('../util/api_util');

var ReviewIndexItem = React.createClass({


  handleClick: function (review) {
    debugger;
    ApiUtil.destroyReview(review);

  },

  render: function () {
    return (
      <div className="reviewContainer col-md-12" >
        <div className="reviewContent col-md-12">
          <div className="reviewHeader col-md-12">
            {this.props.review.beer.name}
            <div onClick={this.handleClick.bind(this, this.props.review)} className="deleteReviewButton" value={this.props.review}>delete review</div>
          </div>

          <div className="reviewBody col-md-12">
            Review: {this.props.review.body}
          </div>

          <div className="reviewFooter col-md-12">
            <div className="reviewFooterItem col-md-4">
              Rating: {this.props.review.rating}
            </div>

            <div className="reviewFooterItem col-md-4">
              toasts: {this.props.review.toasts.length}
            </div>

          </div>
        </div>

        <div className="reviewCommentsIndex col-md-12">
          <h4>Comments</h4>
          {
            this.props.review.comments.map(function(comment) {
                return (<Comment comment={comment} key={comment.id} />);
              }.bind(this)
            )
          }
        </div>

      </div>
    );
  }
});

module.exports = ReviewIndexItem;
