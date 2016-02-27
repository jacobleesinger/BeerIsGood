import React, { Component } from 'react';

import ReviewStore from '../stores/review_store';
import FriendStore from '../stores/friend_store';
import FriendRequestStore from '../stores/friend_request_store';
import UserStore from '../stores/user_store';

import FriendUtil from '../util/friend_util';
import FriendRequestUtil from '../util/friend_request_util';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friendRequests: FriendRequestStore.filterRequestsByRequestedId(this.props.currentUser.id)
    }
    this._onChange = this._onChange.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleDeny = this.handleDeny.bind(this);
  }

  componentDidMount() {
    this.requestToken = FriendRequestStore.addListener(this._onChange);
  }

  componentWillUnmount() {
    this.requestToken.remove();
  }

  _onChange() {
    this.setState({
      friendRequests: FriendRequestStore.filterRequestsByRequestedId(this.props.currentUser.id)
    });
  }

  getFriendRequests() {
    var requests = this.state.friendRequests
    return (requests.map(function(request) {

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
              onClick={this.handleDeny.bind(this, request)}>
              Deny
            </button>
          </div>


        </div>
      )
    }.bind(this)));
  }

  handleConfirm(request) {
    FriendUtil.createFriendship(request);
    FriendRequestUtil.destroyFriendRequest(request.id);
  }

  handleDeny(request) {
    FriendRequestUtil.destroyFriendRequest(request.id);
  }

  render() {
    return (
      <div className="userSidebar col-md-4 col-md-offset-1">
        <div className="userSidebarElement">
          <h4>Pending Requests: {this.state.friendRequests.length}</h4>

            {this.getFriendRequests()}

        </div>

        <div className="userSidebarElement">
          <h4>My Stats</h4>
          Reviews: {ReviewStore.filterReviewsByUserId(this.props.currentUser.id).length}
          <br />
          Friends: {FriendStore.filterFriendshipsByUserId(this.props.currentUser.id).length}

        </div>

      </div>);
  }
}

export default Sidebar;
