var React = require('react');
var Auth = require('./auth/auth_component');
var SessionStore = require('../stores/session_store');
var ErrorStore = require('../stores/error_store');
var Home = require('./home');
var CurrentUserStore = require('../stores/current_user_store');


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
        errors: []
      }
    )
  },


  componentDidMount: function(){
    this.sessionToken = SessionStore.addListener(this._onSessionChange);
    this.errorToken = ErrorStore.addListener(this._onErrorChange);
    this.currentUserToken = CurrentUserStore.addListener(this._onCurrentUserChange);
  },

  componentWillUnmount: function(){
    this.sessionToken.remove();
    this.errorToken.remove();
  },


  _onSessionChange: function() {
    this.setState({
      currentSession: SessionStore.currentSession(),

    });
    this.checkIfSignedIn();
  },

  _onCurrentUserChange: function () {
    debugger;
    this.setState({
      currentUser: CurrentUserStore.currentUser()
    });
    this.checkIfSignedIn();
  },

  _onErrorChange: function() {
    this.setState({
      errors: ErrorStore.all()
    })
  },

  checkIfSignedIn: function() {
    if (this.state.currentUser.session_token === this.state.currentSession){
      this.setState({signedIn: true})
    } else {
      this.setState({signedIn: false})
    }

  },

  displayErrorMessages: function () {
    var errorMessages = this.state.errors;
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
      Page = <Home currentUser={this.state.currentUser} user={this.state.currentUser} errors={this.displayErrorMessages()}/>
    } else {
      var errors = this.displayErrorMessages();
      Page =
      <div className="container landingPageContainer">
       <div className="row">
         <div className="col-md-3 col-offset-6">
          {errors}
          {buttons}
          {modal}
        </div>
      </div>
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
