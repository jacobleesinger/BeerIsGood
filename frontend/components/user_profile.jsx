var React = require('react');
var ReviewsIndex = require('./reviewsIndex');
var ReviewStore = require('../stores/review_store');
var ReviewForm = require('./review_form');

var UserProfile = React.createClass({

  handleSignOut: function () {
    SessionUtil.destroySession();
  },

  render: function(){


    return(
      <div className="row fixedWidth">
        {this.props.errors}
        <div className="row">

          <div className="col-md-6 reviewsIndexContainer">

            <h3>Review a Beer</h3>

            <div className="newReviewFormContainer col-md-12">
              <ReviewForm currentUser={this.props.currentUser} />
            </div>

            <h3>My Reviews</h3>
              <ReviewsIndex currentUser={this.props.currentUser} user={this.props.user}/>
            </div>
          </div>
        </div>

    );
  }
});

module.exports = UserProfile;
