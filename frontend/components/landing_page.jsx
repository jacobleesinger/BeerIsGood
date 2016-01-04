var React = require('react');
var Auth = require('./auth/auth_component');
var SessionStore = require('../stores/session_store');
var ErrorStore = require('../stores/error_store');
var Home = require('./home');
var CurrentUserStore = require('../stores/current_user_store');
var SessionUtil = require('../util/session_util');
var Footer = require('./footer');



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

  requireSignedIn: function () {
    if (!this.state.signedIn) {
      this.replaceWith('newSession')
    }
  },

  handleGuest: function (e) {
    e.preventDefault;
    SessionUtil.createSession(guestUser);
  },


  render: function () {



    if (this.state.auth) {
      modal = <Auth button={this.state.button} callback={this.finishAuth} />;
    }

    buttons = (
      <div className="centered">
        <ul className="">
          <li>
            <button className="btn btn-lg btn-1" onClick={this.handleAuth.bind(this, "signup")}>Sign Up</button>
          </li>
          <li>
            <div className="or">OR</div>
          </li>
          <li>
            <button className="btn btn-lg btn-1" onClick={this.handleAuth.bind(this, "signin")}>Sign In</button>
          </li>
        </ul>

        <div className="guest1">Just here to look?</div>
        <p className="guest2" onClick={this.handleGuest}>Sign in as a guest!</p>
      </div>
    );


    if (this.state.signedIn) {
      Page = <Home currentUser={this.state.currentUser} user={this.state.currentUser} errors={this.displayErrorMessages()}/>
    } else {
      var errors = this.displayErrorMessages();
      Page =
      <div className="landingPage">
        <div className="landingPage-1">
          <div className="container landingPageContainer">
           <div className="row">
             <div className="col-md-6 col-md-offset-3 landingPageStuff">
               <h6 className="landingPageSubLogo logo">Good beers, good friends, good times.</h6>
               <h1 className="landingPageLogo logo">Beerisgood</h1>
               <h2 className="landingPageTag">Welcome!</h2>
               <h2 className="landingPageTag">Discover & Share your favorite beers</h2>
               <div className="landingPageErrors">{errors}</div>
               <div className="landingPageForm">{modal}</div>
               <div className="landingPageButtons ">{buttons}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="landingPage-2">
        <div className="container landingPageContainer" >
          <div className="row">
            <div className="col-md-8 col-md-offset-2 landingPageStuff">
              <div className="landingPageTag-2">BeerIsGood is an Untappd-inspired social media web application for craft beer enthusiasts built using Ruby on Rails and React.js.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="landingPage-3">
        <div className="container landingPageContainer" >
          <div className="row landingPageBlurbs">
            <div className="col-md-4 landingPageStuff">
              <div className="landingPageBlurb">
                <h1 className="landingPageBlurbHeader">Good Beers</h1>
                <div className="landingPageBlurbContent">Drinking an awesome beer? Let the world know by writing a review!</div>
              </div>
            </div>
            <div className="col-md-4 landingPageStuff">
              <div className="landingPageBlurb">
                <h1 className="landingPageBlurbHeader">Good Friends</h1>
                <div className="landingPageBlurbContent">Interact with your friends by commenting on and Toasting their reviews!</div>
              </div>
            </div>
            <div className="col-md-4 landingPageStuff">
              <div className="landingPageBlurb">
                <h1 className="landingPageBlurbHeader">Good Times</h1>
                <div className="landingPageBlurbContent">Sign In as a Guest User for quick access to demo content!</div>
              </div>
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
