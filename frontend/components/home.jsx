var React = require('react');
var Navbar = require('./navbar');
var UserShow = require('./user_show');
var UserProfile = require('./user_profile');
var CurrentUserStore = require('../stores/current_user_store');


var MainContent = React.createClass({


  render:function () {
    return(
      <this.props.subPage
        currentUser={this.props.currentUser}
        onSubPageChange={this.props.onSubPageChange}
        user={this.props.user}
        beer={this.props.beer} />
    )
  }
})

var Home = React.createClass({

  getInitialState: function () {
    return ({
      subPage: UserProfile,
      user: this.props.currentUser,
      beer: {}
    });
  },

  navbarChangeHandler: function(newSubPage, user, beer) {
    if (typeof user !== "undefined"){
      this.setState({user: user});
    }
    this.setState({
      subPage: newSubPage,
      beer: beer,
    });
  },

  render: function () {
    return(
      <div>
        <Navbar currentUser={this.props.currentUser}
          user={this.props.user} subPage={this.state.subPage}
          onChange={this.navbarChangeHandler}/>
        <MainContent
          currentUser={this.props.currentUser}
          subPage={this.state.subPage}
          onSubPageChange={this.navbarChangeHandler}
          beer={this.state.beer}
          user={this.state.user}/>
      </div>
    );
  }

});


module.exports = Home;
