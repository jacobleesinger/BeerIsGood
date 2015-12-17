var React = require('react');
var Auth = require('./auth/auth_component');
var ApiUtil = require('../util/api_util');
var UserStore=require('../stores/user_store');
// var Buttons = require('./auth/buttons');
var Home = require('./home');

var Page;
var modal;

var LandingPage = React.createClass({

  getInitialState: function () {
    return(
      {
        currentUser: {},
        signedIn: false,
        button: ""
      }
    )
  },

  componentDidMount: function(){
    this.UserToken = UserStore.addListener(this._onChange);
  },

  componentWillUnmount: function(){
    this.userToken.remove();
  },

  _onChange: function () {
    this.setState({
      currentUser: UserStore.currentUser,
      signedIn: UserStore.currentStatus
    });
  },

  handleAuth: function (button) {

    this.setState(
      {
        auth: true,
        button: button
      }
    );
  },

  render: function () {
    if (this.state.auth) {
      modal = <Auth button={this.state.button} callback={this.finishAuth} />;
    }

    buttons = (
      <div>
        <button onClick={this.handleAuth.bind(this, "signup")}>Sign Up</button>
        <button onClick={this.handleAuth.bind(this, "signin")}>Sign In</button>
      </div>
    );

    if (this.state.signedIn) {
      Page = <Home currentUser={this.state.currentUser}/>
    } else {
      Page =
       <div>
        {buttons}
        {modal}
      </div>
    }

    return (
      <div>
        {Page}
      </div>
    );
  }

});

module.exports = LandingPage;
