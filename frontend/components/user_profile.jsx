var React = require('react');
var ReviewsIndex = require('./reviewsIndex');
var ReviewStore = require('../stores/review_store');

var UserProfile = React.createClass({

  handleSignOut: function () {
    SessionUtil.destroySession();
  },

  render: function(){


    return(
      <div className="row fixedWidth">
        {this.props.errors}
        <ReviewsIndex currentUser={this.props.currentUser} user={this.props.arg}/>
      </div>

    );
  }
});

module.exports = UserProfile;
