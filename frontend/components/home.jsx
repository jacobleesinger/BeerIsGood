var React = require('react');
var Navbar = require('./navbar');
var UserShow = require('./user_show');
var UserProfile = require('./user_profile');



var MainContent = React.createClass({


  render:function () {
    return(
      <this.props.subPage
        currentUser={this.props.currentUser}
        onSubPageChange={this.props.onSubPageChange}
        beer={this.props.beer} />
    )
  }
})

var Home = React.createClass({

  getInitialState: function () {
    return ({
      subPage: UserProfile,
      arg: {}
    });
  },

  navbarChangeHandler: function(newSubPage, arg) {
    this.setState({
      subPage: newSubPage,
      arg: arg
    })
  },

  render: function () {
    return(
      <div>
        <Navbar currentUser={this.props.currentUser} subPage={this.state.subPage}
          onChange={this.navbarChangeHandler}/>
        <MainContent
          currentUser={this.props.currentUser}
          subPage={this.state.subPage}
          onSubPageChange={this.navbarChangeHandler}
          beer={this.state.beer}/>
      </div>
    );
  }

});


module.exports = Home;
