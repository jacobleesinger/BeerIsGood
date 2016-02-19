import React, { Component } from 'react';
import Navbar from './new_navbar';
import ReviewForm from './new_review_form';
import ReviewsIndex from './new_reviews_index';
import Sidebar from './user_profile_sidebar';
import Footer from './footer';

class UserProfile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      friendRequests: FriendRequestStore.filterFriendshipsByUserId(props.currentUser.id)
    };
  }

  componentDidMount() {
    this.requestToken = FriendRequestStore.addListener(this._onChange);
  };

  componentWillUnmount() {
    this.requestToken.remove();
  };

  _onChange() {
    this.setState({
      friendRequests: FriendRequestStore.filterFriendshipsByUserId(this.props.currentUser.id)
    });
  }

  render() {
    return(
      <div className="userProfile">
        <Navbar currentUser={this.props.currentUser} />
        <ReviewForm currentUser={this.props.currentUser} />
        <ReviewsIndex user={this.props.currentUser} currentUser={this.props.currentUser}/>
        <Sidebar currentUser={this.props.currentUser} />
        <Footer />
      </div>

    )

  }

}

export default UserProfile;
