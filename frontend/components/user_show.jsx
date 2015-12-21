var React = require('react');
var ReviewsIndex = require('./reviewsIndex');
var ReviewStore = require('../stores/review_store');

var UserShow = React.createClass({

  handleSignOut: function () {
    SessionUtil.destroySession();
  },

  render: function(){


    return(
      <div className="row">

        <div className="col-md-4 col-offset-4">

          <br />
          <button
            className="btn btn-primary" onClick={this.handleSignOut}>Sign Out
          </button>
        </div>

        <br />
        {this.props.errors}
        <ReviewsIndex currentUser={this.props.currentUser} />
      </div>

    );
  }
});

module.exports = UserShow;
