import React, { Component } from 'react';

import SessionStore from '../stores/session_store';
import ErrorStore from '../stores/error_store';
import CurrentUserStore from '../stores/current_user_store';
import SessionUtil from '../util/session_util';
import Footer from './footer';
import NewUserForm from './auth/new_user';
import NewSessionForm from'./auth/new_session';
import Navbar from './new_navbar';
import ReviewForm from './new_review_form';
import ReviewsIndex from './new_reviews_index';
import Sidebar from './user_profile_sidebar';

var Page;
var modal;
var buttons;
const guestUser = {
  username: "Guest",
  password: "password"
};


class LandingPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: {},
      currentSession: "",
      signedIn: false,
      button: "",
      errors: [],
      authButtons: true,
      signingUp: false,
      signingIn: false
    }

    this._onSessionChange = this._onSessionChange.bind(this);
    this._onErrorChange = this._onErrorChange.bind(this);
    this._onCurrentUserChange = this._onCurrentUserChange.bind(this);
    this.checkIfSignedIn = this.checkIfSignedIn.bind(this);
    this.handleAuth = this.handleAuth.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.cancelAuth = this.cancelAuth.bind(this);
    this.displayErrorMessages = this.displayErrorMessages.bind(this);
    this.requireSignedIn = this.requireSignedIn.bind(this);
  }

  componentDidMount(){
    this.sessionToken = SessionStore.addListener(this._onSessionChange);
    this.errorToken = ErrorStore.addListener(this._onErrorChange);
    this.currentUserToken = CurrentUserStore.addListener(this._onCurrentUserChange);
  }

  componentWillUnmount(){
    this.sessionToken.remove();
    this.errorToken.remove();
  }


  _onSessionChange() {
    this.setState({
      currentSession: SessionStore.currentSession(),

    });
    this.checkIfSignedIn();
  }

  _onCurrentUserChange() {

    this.setState({
      currentUser: CurrentUserStore.currentUser()
    });
    this.checkIfSignedIn();
  }

  _onErrorChange() {
    this.setState({
      errors: ErrorStore.all()
    })
  }

  checkIfSignedIn() {
    if (this.state.currentUser.session_token === this.state.currentSession){
      this.setState({signedIn: true})
    } else {
      this.setState({signedIn: false})
    }

  }

  displayErrorMessages() {
    var errorMessages = this.state.errors;
    return(
      errorMessages.map(function(error, idx){
        return (<div key={idx}>{error}</div>);
      })
    );
  }

  handleAuth(button) {

    this.setState(
      {
        auth: true,
        button: button,
        authButtons: false
      }
    );
  }

  handleSignUp() {
    this.setState({
      authButtons: false,
      signingUp: true
    });
  }

  handleSignIn() {
    this.setState({
      authButtons: false,
      signingIn: true
    });
  }

  requireSignedIn() {
    if (!this.state.signedIn) {
      this.replaceWith('newSession')
    }
  }

  handleGuest(e) {
    e.preventDefault;
    SessionUtil.createSession(guestUser);
  }

  cancelAuth() {
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
  }

  render() {
    if(this.state.signingUp) {
      modal = <NewUserForm cancelAuth={ this.cancelAuth } />;
    } else if(this.state.signingIn) {
      modal = <NewSessionForm cancelAuth={ this.cancelAuth } />;
    } else {
      modal = <div></div>;
    }

    if(this.state.authButtons) {
      buttons = (
        <div className="centered landingPageButtons">
          <div>

                <button
                  className="btn btn-lg btn-1 inline"
                  onClick={ this.handleSignUp }>
                  Sign Up
                </button>

                <div className="or inline">OR</div>

                <button
                  className="btn btn-lg btn-1 inline"
                  onClick={ this.handleSignIn }>
                  Sign In
                </button>

          </div>
          <div>
            <p className="guest1">Just here to look?</p>
            <button
              className=" btn btn-lg btn-1"
              onClick={ this.handleGuest }>
              Guest Sign In
            </button>
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
               <div className="landingPageErrors">{ errors }</div>
               <div className="landingPageForm">{ modal }</div>
               <div className="landingPageButtons ">{ buttons }</div>
            </div>
          </div>
        </div>
      </div>


    </div>
    }

    return (

      <div className="main">
        { Page }
        <Footer />

      </div>
    );
  }

};

export default LandingPage;
