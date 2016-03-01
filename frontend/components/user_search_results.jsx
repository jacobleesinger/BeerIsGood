import React, { Component } from 'react';
import { Link } from 'react-router';
import FriendStore from '../stores/friend_store';
import UserStore from '../stores/user_store';

class UserSearchResults extends Component {

  constructor(props) {
    super(props);

    this.renderResults = this.renderResults.bind(this);
    this.renderFriends = this.renderFriends.bind(this);
  }

  renderFriends() {
    let friendships = FriendStore.filterFriendshipsByUserId(this.props.currentUser.id);

    return friendships.map((friendship) => {
      let user = UserStore.findById(friendship.friend_id)
      let url = '/user/' + user.id;
      return (
        <div className="userSearchResultsItem" key={user.id}>
          <div className="searchName">
            <i className="fa fa-user userIcon"></i>
            {user.username}
          </div>
          <Link
            className="searchLink"
            to={url}
            key={user.id}>
            <div className="btn btn-2">
              view profile
            </div>
          </Link>
        </div>
      )
    });
  }

  renderResults(searchResults) {
      if(searchResults.length === 0) {
        debugger;
        return (

            this.renderFriends()

        );
      }
      return searchResults.map((user) => {
        let url = '/user/' + user.id;
        return (
          <div className="userSearchResultsItem" key={user.id}>
            <div className="searchName">
              <i className="fa fa-user userIcon"></i>
              {user.username}
            </div>
            <Link
              className="searchLink"
              to={url}
              key={user.id}>
              <div className="btn btn-2">
                view profile
              </div>
            </Link>
          </div>
          );

      }, this);
  }

  render() {
    return(
      <div className="userSearchResults">
        {this.renderResults(this.props.searchResults)}
      </div>
    );
  }
}

export default UserSearchResults;
