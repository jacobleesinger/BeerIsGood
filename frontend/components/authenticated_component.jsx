import React, { Component } from 'react';
var SessionStore = require('../stores/session_store');
import CurrentUserStore from '../stores/current_user_store';
// ... imports
export default (ComposedComponent) => {
  return class AuthenticatedComponent extends React.Component {

    willTransitionTo(transition) {
      if (!SessionStore.isLoggedIn()) {
        transition.redirect('/');
      }
    }

    constructor() {
      super();
      this.state = this._getLoginState();
      this._onChange = this._onChange.bind(this);
    }

    _getLoginState() {
      return {
        userLoggedIn: SessionStore.isLoggedIn(),
        currentUser: SessionStore.currentUser(),

      };

    }

    componentDidMount() {
      this.sessionToken = SessionStore.addListener(this._onChange);
      if (!SessionStore.isLoggedIn()) {
        this.props.history.pushState(null, "/");
      }
    }

    // After any change, we update the component’s state so that it’s rendered again.
    _onChange() {

      this.setState(this._getLoginState());
      if(!this.state.userLoggedIn) {
        this.props.history.pushState(null, "/");
      }
    }

    componentWillUnmount() {
        this.sessionToken.remove();
    }

    render() {
      return (
        <div className="homeDiv">
          <ComposedComponent
            { ...this.props }
            currentUser={ this.state.currentUser }
            userLoggedIn={ this.state.userLoggedIn } />
        </div>
      );
    }
  }
};
