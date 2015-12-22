var React = require('react');
var ReviewsIndex = require('./reviewsIndex');
var ReviewStore = require('../stores/review_store');

var UserShow = React.createClass({

  handleSignOut: function () {
    SessionUtil.destroySession();
  },

  render: function(){


    return(
      <div className="row fixedWidth">
        {this.props.errors}
        <div className="row">
          <div className="col-md-6 reviewsIndexContainer">
        <ReviewsIndex currentUser={this.props.currentUser} user={this.props.user}/>
      </div>
    </div>
  </div>

    );
  }
});

module.exports = UserShow;
