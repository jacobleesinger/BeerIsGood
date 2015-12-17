var React = require('react');
var SessionStore = require('../../stores/session_store');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../../util/api_util');
var NewUser = require('./new_user');
var NewSession = require('./new_session');
var DestroySession = require('./destroy_session');

var AuthForm;
var session = SessionStore.session();
var Auth = React.createClass({


  GetAppropriateAuthForm: function() {

    if (this.props.button === "signup") {
      AuthForm = NewUser;
    } else if (this.props.button === "signin") {
      AuthForm = NewSession;
    }
  },


  render: function () {
    this.GetAppropriateAuthForm();

    return (
      <AuthForm />
    );

  }

});

module.exports = Auth;
