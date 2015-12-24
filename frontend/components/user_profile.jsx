var React = require('react');
var ReviewsIndex = require('./reviewsIndex');
var ReviewStore = require('../stores/review_store');
var ReviewForm = require('./review_form');
var FriendRequestStore = require('../stores/friend_request_store');
var UserStore= require('../stores/user_store');
var FriendRequestUtil = require('../util/friend_request_util');

var PendingRequests;

var UserProfile = React.createClass({

  getInitialState: function () {
    debugger;
    return ({
      friendRequests: FriendRequestStore.filterRequestsByRequestedId(this.props.currentUser.id)
    });
  },


  handleSignOut: function () {
    SessionUtil.destroySession();
  },

  handleConfirm: function () {

  },

  handleDeny: function () {
    debugger;
    FriendRequestUtil.destroyFriendRequest(request);

  },

  getFriendRequests: function () {
    debugger;

    var requests = this.state.friendRequests
    PendingRequests = requests.map(function(request) {
      return (
        <div key={request}>
          Friend request from:
          {UserStore.findById(request.requester_id).username}
          <button className="btn btn-sm btn-success"
            onClick={this.handleConfirm(this, request)}>
            Confirm
          </button>
          <button className="btn btn-sm btn-danger"
            onClick={this.handleDeny.bind(this, request)}>
            Deny
          </button>


        </div>
      )
    }.bind(this))
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
