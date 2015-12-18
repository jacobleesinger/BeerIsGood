var React = require('react');
var Auth = require('./auth/auth_component');
var UserStore=require('../stores/user_store');
var SessionStore = require('../stores/session_store');
var Home = require('./home');

var Page;
var modal;
var buttons;


var LandingPage = React.createClass({

  getInitialState: function () {
    return(
      {
        currentUser: {},
        currentSession: "",
        signedIn: false,
        button: "",
        sessionErrors: [],
        userErrors: []
      }
    )
  },


  componentDidMount: function(){
    this.sessionToken = SessionStore.addListener(this._onSessionChange)
  },

  componentWillUnmount: function(){
    this.sessionToken.remove();
  },


  _onSessionChange: function() {
    this.setState({
      currentUser: SessionStore.currentUser(),
      currentSession: SessionStore.currentSession(),
      sessionErrors: SessionStore.sessionErrors()

    });
    this.checkIfSignedIn();
  },

  checkIfSignedIn: function() {
    if (this.state.currentSession === this.state.currentUser.session_token){
      this.setState({signedIn: true})
    } else {
      this.setState({signedIn: false})
    }

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
