import React, { Component } from 'react';
import { Link } from 'react-router';

import UserSearch from './user_search';
import UserStore from '../stores/user_store';
import CurrentUserStore from '../stores/current_user_store';
import User from './user';
import Navbar from './new_navbar';
import UserSearchResults from './user_search_results';
import Footer from './footer';

class UsersIndex  extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchResults: []
    };

    this.searchResults = this.searchResults.bind(this);
  }

  searchResults(searchResults) {
    this.setState({
      searchResults: searchResults
    });
  }

  render() {
    return (
      <div className="mainPage">
        <Navbar currentUser={ this.props.currentUser } />
        <div className="row fixedwidth">
          <div className="usersIndex col-md-6 col-md-offset-3">
            <UserSearch onSearch={ this.searchResults }/>
            <UserSearchResults searchResults={ this.state.searchResults } currentUser={ this.props.currentUser }/>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

};

export default UsersIndex;
