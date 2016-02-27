import React from 'react';
import Navbar from './new_navbar';
import ReviewsIndex from './reviewsIndex';
import Footer from './footer';
import Sidebar from './user_show_sidebar';

const UserShow = (props) => {
  return (
    <div className="mainPage">
      <Navbar currentUser={props.currentUser}/>
      <div className="row fixedWidth">
        <ReviewsIndex
          currentUser={props.currentUser}
          user={props.user}/>
        <Sidebar
          currentUser={props.currentUser}
          user={props.user} />
      </div>
      <Footer />
    </div>
  )
}

export default UserShow;
