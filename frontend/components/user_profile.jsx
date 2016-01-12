var React = require('react');
var ReviewsIndex = require('./reviewsIndex');
var ReviewStore = require('../stores/review_store');
var ReviewForm = require('./review_form');
var FriendRequestStore = require('../stores/friend_request_store');
var UserStore= require('../stores/user_store');
var FriendRequestUtil = require('../util/friend_request_util');
var FriendUtil = require('../util/friend_util');


var UserProfile = React.createClass({

  getInitialState: function () {

    return ({
      friendRequests: FriendRequestStore.filterRequestsByRequestedId(this.props.currentUser.id)
    });
  },

  componentDidMount: function () {
    this.RequestToken = FriendRequestStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.RequestToken.remove();
  },

  _onChange: function () {

    this.setState({
      friendRequests: FriendRequestStore.filterRequestsByRequestedId(this.props.currentUser.id)

    });
  },


  handleSignOut: function () {
    SessionUtil.destroySession();
  },

  handleConfirm: function () {

    var requestObj = FriendRequestStore.findById(request);
    FriendUtil.createFriendship(requestObj);
    FriendRequestUtil.destroyFriendRequest(request);

  },

  handleDeny: function (request) {
debugger;
    FriendRequestUtil.destroyFriendRequest(request.id);

  },

  getFriendRequests: function () {


    var requests = this.state.friendRequests
    return requests.map(function(request) {
debugger;
      return (
        <div className="" key={request.id} request={request}>
          <div className="friendRequestNotifcation">
            {UserStore.findById(request.requester_id).username} wants to be your friend!
          </div>
          <div className="friendApproveButtons">
            <button className="btn btn-sm btn-2 friendApproveButton"
              onClick={this.handleConfirm.bind(this, request)}>
              Confirm
            </button>
            <button className="btn btn-sm btn-3 friendApproveButton"
              onClick={this.handleDeny(request)}>
              Deny
            </button>
          </div>


        </div>
      )
    }.bind(this))
  },

  render: function(){




    return(
      <div className="row fixedWidth">

        <div className="row">

          <div className="col-md-6 reviewsIndexContainer">
            <h3>Welcome, {this.props.currentUser.username}!</h3>
            {this.props.errors}
            {this.getFriendRequests()}

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
