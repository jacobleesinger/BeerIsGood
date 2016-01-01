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

  handleDeny: function () {

    FriendRequestUtil.destroyFriendRequest(request);

  },

  getFriendRequests: function () {


    var requests = this.state.friendRequests
    return requests.map(function(request) {

      return (
        <div key={request.id} request={request}>
          {UserStore.findById(request.requester_id).username} wants to be your friend!
          <button className="btn btn-sm btn-2 friendApproveButton"
            onClick={this.handleConfirm.bind(this, request)}>
            Confirm
          </button>
          <button className="btn btn-sm btn-3 friendApproveButton"
            onClick={this.handleDeny.bind(this, request)}>
            Deny
          </button>


        </div>
      )
    }.bind(this))
  },

  render: function(){




    return(
      <div className="row fixedWidth">
        {this.props.errors}
        <div className="row">

          <div className="col-md-6 reviewsIndexContainer">
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
