var React = require('react');
var ReviewsIndex = require('./reviewsIndex');
var ReviewStore = require('../stores/review_store');
var FriendRequestUtil = require('../util/friend_request_util');
var FriendRequestStore = require('../stores/friend_request_store');
var FriendStore = require('../stores/friend_store');

var friendRequest;

var UserShow = React.createClass({

  getInitialState: function() {
    return ({
      friendRequestStatus: FriendRequestStore.getRequestStatus(this.props.currentUser.id, this.props.user.id),
      friendStatus: FriendStore.getFriendshipStatus(this.props.currentUser.id, this.props.user.id)
    });
  },

  componentDidMount: function () {

      this.requestToken = FriendRequestStore.addListener(this._onChange);

  },

  componentWillUnmount: function () {

    this.requestToken.remove();
  },

  _onChange: function () {

    this.setState({
      friendRequestStatus:
      FriendRequestStore.getRequestStatus(this.props.currentUser.id, this.props.user.id)
    });
  },

  handleFriendClick: function () {
    FriendRequestUtil.createFriendRequest(this.props.currentUser.id, this.props.user.id);

  },


  displayFriendRequest: function () {
    if (this.state.friendStatus) {
      return <div></div>;
    } else if (this.state.friendRequestStatus) {
      return (
        <div>
          Friend Request Sent!
        </div>
      );
    } else{
      return(
        <button className="btn btn-sm btn-1" onClick={this.handleFriendClick}>Add Friend</button>
      );

    }
  },

  render: function(){


    return(
      <div className="row fixedWidth">
        {this.props.errors}
        <div className="row">
          <div className="col-md-6 reviewsIndexContainer">
            {this.displayFriendRequest()}
            <h3>Reviews by {this.props.user.username}</h3>
            <ReviewsIndex currentUser={this.props.currentUser} user={this.props.user}/>
      </div>
    </div>
  </div>

    );
  }
});

module.exports = UserShow;
