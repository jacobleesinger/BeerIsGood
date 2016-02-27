import React, { Component } from 'react';
import Navbar from './new_navbar';
// import ReviewForm from './new_review_form';
import ReviewsIndex from './reviewsIndex';
import Sidebar from './user_profile_sidebar';
import Footer from './footer';
import FriendStore from '../stores/friend_store';

class UserProfile extends Component {

  constructor(props) {

    super(props);


  }



  render() {

    return(

      <div className="userProfile mainPage">
        <Navbar currentUser={this.props.currentUser} />
        <div className="row fixedWidth">
          <ReviewsIndex

            user={this.props.currentUser}
            currentUser={this.props.currentUser}/>
          <Sidebar currentUser={this.props.currentUser} />
        </div>
        <Footer />
      </div>


    )

  }

}

export default UserProfile;
