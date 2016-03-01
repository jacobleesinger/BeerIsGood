var React = require('react');
var Auth = require('./auth/auth_component');
var SessionStore = require('../stores/session_store');
var ErrorStore = require('../stores/error_store');
var Home = require('./new_home').default;
var CurrentUserStore = require('../stores/current_user_store');
var SessionUtil = require('../util/session_util');
var Footer = require('./footer');
var NewUserForm = require('./auth/new_user');
var NewSessionForm = require('./auth/new_session');
var UserProfile = require('./new_user_profile').default;
var User = require('./user');



var Navbar = require('./new_navbar');
import ReviewForm from './new_review_form';
import ReviewsIndex from './new_reviews_index';
import Sidebar from './user_profile_sidebar';





var Page;
var modal;
var buttons;
var guestUser = {
  username: "Guest",
  password: "password"
};


var LandingPage = React.createClass({

  getInitialState: function () {
    return(
      {
        currentUser: {},
        currentSession: "",
        signedIn: false,
        button: "",
        errors: [],
        authButtons: true,
        signingUp: false,
        signingIn: false
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
        button: button,
        authButtons: false
      }
    );
  },

  handleSignUp: function() {
    this.setState({
      authButtons: false,
      signingUp: true
    });
  },

  handleSignIn: function() {
    this.setState({
      authButtons: false,
      signingIn: true
    });
  },

  requireSignedIn: function () {
    if (!this.state.signedIn) {
      this.replaceWith('newSession')
    }
  },

  handleGuest: function (e) {
    e.preventDefault;
    SessionUtil.createSession(guestUser);
  },

  cancelAuth: function () {
    this.setState({
      currentUser: {},
      currentSession: "",
      signedIn: false,
      button: "",
      errors: [],
      authButtons: true,
      signingUp: false,
      signingIn: false
    })
  },

  render: function () {

    if(this.state.signingUp) {
      modal = <NewUserForm cancelAuth={this.cancelAuth} />;
    } else if(this.state.signingIn) {
      modal = <NewSessionForm cancelAuth={this.cancelAuth} />;
    } else {
      modal = <div></div>;
    }

    if(this.state.authButtons) {
      buttons = (
        <div className="centered landingPageButtons">
          <div>

                <button className="btn btn-lg btn-1 inline" onClick={this.handleSignUp}>Sign Up</button>

                <div className="or inline">OR</div>

                <button className="btn btn-lg btn-1 inline" onClick={this.handleSignIn}>Sign In</button>

          </div>
          <div>
            <p className="guest1">Just here to look?</p>
            <button className=" btn btn-lg btn-1" onClick={this.handleGuest}>Guest Sign In</button>
          </div>
        </div>
      );
    } else {
      buttons = <div></div>
    }



    if (this.state.signedIn) {

      var url = '/user/' + this.state.currentUser.id
      this.props.history.pushState(null, url);

    } else {
      var errors = this.displayErrorMessages();
      Page =
      <div className="landingPage">
        <div className="landingPage-1">
          <div className="container landingPageContainer">
           <div className="row">
             <div className="col-md-6 landingPageStuff">
               
               <h1 className="landingPageLogo logo">Beerisgood</h1>
               <h2 className="landingPageTag">Discover & Share your favorite beers</h2>
               <div className="landingPageErrors">{errors}</div>
               <div className="landingPageForm">{modal}</div>
               <div className="landingPageButtons ">{buttons}</div>
            </div>
          </div>
        </div>
      </div>


    </div>
    }

    return (

      <div className="main">
        {Page}
        <Footer />

      </div>
    );
  }

});

module.exports = LandingPage;
