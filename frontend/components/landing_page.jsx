var React = require('react');
var Auth = require('./auth/auth_component');
var ApiUtil = require('../util/api_util');
var UserStore=require('../stores/user_store');
// var Buttons = require('./auth/buttons');
var Home = require('./home');

var Page;
var modal;
var buttons;


var LandingPage = React.createClass({

  getInitialState: function () {
    return(
      {
        currentUser: {},
        signedIn: false,
        button: "",
        sessionErrors: [],
        userErrors: []
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
      currentUser: UserStore.currentUser(),
      signedIn: UserStore.currentStatus(),
      sessionErrors: UserStore.sessionErrors(),
      userErrors: UserStore.userErrors()
    });
  },

  displayErrorMessages: function () {
    var errorMessages = this.state.sessionErrors.concat(this.state.userErrors);
    return(
      errorMessages.map(function(error, idx){
        return (<div key={idx}>{error}</div>);
      })
    );
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
      var errors = this.displayErrorMessages();
      Page =
       <div>
        {errors}
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
