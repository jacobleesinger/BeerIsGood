var React = require('react');
var Navbar = require('./navbar.jsx');
var FriendStore = require('../stores/friend_store');
var UserStore = require('../stores/user_store')
var User = require('./user');


var FriendsIndex = React.createClass({
  getInitialState: function () {
    return({
      friends: this.getFriends()
    });
  },

  // componentDidMount: function() {
  //   this.friendshipsToken = FriendStore.addListener(this._onChange);
  // },
  //
  // componentWillUnmount: function() {
  //   this.friendshipsToken.remove();
  // },
  //
  // _onChange: function () {
  //   this.setState({
  //     friends: this.getFriends()
  //   })
  // },


  getFriends: function () {
    var friends = [];

    var friendships = FriendStore.filterFriendshipsByUserId(this.props.currentUser.id);

    friendships.forEach(function(friendship) {
      friends.push(UserStore.findById(friendship.friend_id));
    });

    return friends;

  },

  handleClick: function(newSubPage, friend, beer) {

    this.props.onSubPageChange(newSubPage, friend, beer);
  },

  render: function () {
    return (

      <div className="fixedWidth">
        {this.state.friends.map(function(friend) {
            return(
              <div friend={friend} key={friend.id}
                onClick={this.handleClick.bind(this, User, friend, this.props.beer)}>{friend.username}</div>
            );
          }.bind(this))
        }
      </div>
    );
  }

});

module.exports = FriendsIndex;
