var React = require('react');
var ReviewsIndex = require('./reviewsIndex');
var ReviewStore = require('../stores/review_store');
var ReviewForm = require('./review_form');
var FriendStore = require('../stores/friend_store');
var UserStore= require('../stores/user_store');

var PendingRequests;

var UserProfile = React.createClass({

  handleSignOut: function () {
    SessionUtil.destroySession();
  },

  handleConfirm: function () {

  },

  handleDeny: function () {

  },

  getFriendRequests: function () {

    var requests = FriendStore.getRequestsById(this.props.currentUser.id);
    PendingRequests = requests.map(function(request) {
      return (
        <div key={request}>
          Friend request from:
          {UserStore.findById(request).username}
          <button className="btn btn-sm btn-success"
            onclick={this.handleConfirm}>
            Confirm
          </button>
          <button className="btn btn-sm btn-danger"
            onclick={this.handleDeny}>
            Deny
          </button>


        </div>
      )
    })
  },

  render: function(){
    this.getFriendRequests();


    return(
      <div className="row fixedWidth">
        {this.props.errors}
        <div className="row">

          <div className="col-md-6 reviewsIndexContainer">
            {PendingRequests}

            <h3>Review a Beer</h3>

            <div className="newReviewFormContainer col-md-12">
              <ReviewForm currentUser={this.props.currentUser} />
            </div>

            <h3>My Reviews</h3>
              <ReviewsIndex currentUser={this.props.currentUser} user={this.props.currentUser}/>
            </div>
          </div>
        </div>

    );
  }
});

module.exports = UserProfile;
