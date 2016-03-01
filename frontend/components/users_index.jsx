var React = require('react');
var Link = require('react-router').Link;

var UserStore = require('../stores/user_store');
var CurrentUserStore = require('../stores/current_user_store');
var User = require('./user');
var Navbar = require('./new_navbar').default;
var UserSearch = require('./user_search').default;
var UserSearchResults = require('./user_search_results').default;
var Footer = require('./footer');
var userToken;


var UsersIndex = React.createClass({
  getInitialState: function () {
    return({
      users: UserStore.all(),
      currentUser: CurrentUserStore.currentUser(),
      searchResults: []
    });
  },

  componentDidMount: function () {

    this.userToken = UserStore.addListener(this._onChange);
    this.currentUserToken = CurrentUserStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.userToken.remove();
  },

  _onChange: function () {
    this.setState({
      users: UserStore.all(),
      currentUser: CurrentUserStore.currentUser()
    });
  },

searchResults: function(searchResults) {
  this.setState({
    searchResults: searchResults
  });
},

  render: function () {

    return (
      <div className="mainPage">
        <Navbar currentUser={this.state.currentUser} />
        <div className="row fixedwidth">
          <div className="usersIndex col-md-6 col-md-offset-3">

            <UserSearch onSearch={this.searchResults}/>
            <UserSearchResults searchResults={this.state.searchResults} currentUser={this.props.currentUser}/>
          </div>
        </div>
        <Footer />

      </div>
    );
  }

});

module.exports = UsersIndex;
