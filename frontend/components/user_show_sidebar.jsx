import React, { Component } from 'react';

import FriendRequestStore from '../stores/friend_request_store';
import FriendStore from '../stores/friend_store';
import ReviewStore from '../stores/review_store';

import FriendRequestUtil from '../util/friend_request_util';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friendRequestStatus: FriendRequestStore.getRequestStatus(props.currentUser.id, props.user.id),
      friendStatus: FriendStore.getFriendshipStatus(props.currentUser.id, props.user.id)
    }

    this._onChange = this._onChange.bind(this);
    this.handleFriendClick = this.handleFriendClick.bind(this);
  }

  componentDidMount() {
    this.requestToken = FriendRequestStore.addListener(this._onChange);
  }

  coponentWillUnmount() {
    this.requestToken.remove();
  }

  _onChange() {
    this.setState({
      friendRequestStatus: FriendRequestStore.getRequestStatus(this.props.currentUser.id, this.props.user.id)
    });
  }

  handleFriendClick() {
    FriendRequestUtil.createFriendRequest(this.props.currentUser.id, this.props.user.id);
  }

  renderFriendRequest() {
    if(this.state.friendStatus) {
      return (
        <div>
          <h4>{this.props.user.username}</h4>
            Reviews: {ReviewStore.filterReviewsByUserId(this.props.user.id).length}
            <br />
            Friends: {FriendStore.filterFriendshipsByUserId(this.props.user.id).length}
      </div>);
    } else if(this.state.friendRequestStatus) {
      return (
        <div>Friend Request Sent!</div>
      );
    } else {
      return(
        <button className="btn btn-sm btn-1" onClick={this.handleFriendClick}>Add Friend</button>
      );
    }
  }

  render() {
    return (
      <div className="userSidebar col-md-4 col-md-offset-2">
        <div className="userSidebarElement">
          {this.renderFriendRequest()}
        </div>
      </div>
    )
  }
}

export default Sidebar;
