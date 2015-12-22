var React = require('react');
var ReviewsIndex = require('./reviewsIndex');
var ReviewStore = require('../stores/review_store');
var FriendUtil = require('../util/friend_util');

var UserShow = React.createClass({

  handleFriendClick: function () {
    FriendUtil.createFriendshipRequest(this.props.currentUser.id, this.props.user.id);
    alert("Friend request sent!")
  },

  render: function(){


    return(
      <div className="row fixedWidth">
        {this.props.errors}
        <div className="row">
          <div className="col-md-6 reviewsIndexContainer">
            <h3>Reviews by {this.props.user.username}</h3>
            <button className="btn btn-sm btn-success" onClick={this.handleFriendClick}>Add Friend</button>
            <ReviewsIndex currentUser={this.props.currentUser} user={this.props.user}/>
      </div>
    </div>
  </div>

    );
  }
});

module.exports = UserShow;
