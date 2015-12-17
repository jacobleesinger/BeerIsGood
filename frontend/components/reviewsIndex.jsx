var React = require('react');
var ReviewIndexItem = require('./reviewIndexItem');


var ReviewsIndex = React.createClass ({



  render: function () {

    return (

      <div className="row">
        <div className="col-md-6 reviewsIndexContainer">
          <h3>My Reviews</h3>

          {this.props.user.reviews.map(function(review) {
              return (
                <ReviewIndexItem review={review} key={review.id} />
              );
            }.bind(this)
          )}
        </div>
      </div>

    );
  }
});

module.exports = ReviewsIndex;
