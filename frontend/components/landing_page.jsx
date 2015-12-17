var React = require('react');
var Auth = require('./auth/auth_component');
var ApiUtil = require('../util/api_util');
var UserStore=require('../stores/user_store');


var LandingPage = React.createClass({

  getInitialState: function () {
    return(
      {
        signedIn: false,
        button: "",
        auth: false
      }
    )
  },

  handleAuth: function (button) {
    this.setState(
      {
        auth: true,
        button: button
      }
    );
  },

  finishAuth: function () {
    this.setState (
      {
        auth: false,
        signedIn: true
      }
    );
  },

  handleSignOut: function () {
    ApiUtil.signOutUser();
    this.setState({ signedIn: false });
  },

  render: function () {

    var modal;
    var buttons;

    if (this.state.auth) {
      modal = <Auth button={this.state.button} callback={this.finishAuth} />;
    }

    if (this.state.signedIn) {
      buttons = <button onClick={this.handleSignOut}>Sign Out</button>;
    } else {
      buttons = (
        <div>
         <button onClick={this.handleAuth.bind(this, "signup")}>Sign Up</button>
         <button onClick={this.handleAuth.bind(this, "signin")}>Sign In</button>
       </div>
     );
    }

    return (
    <div>
      {buttons}
      {modal}
    </div>
    )
  }

});

module.exports = LandingPage;
