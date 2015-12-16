var React = require('react');
var AuthStore = require('../../stores/auth_store');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../../util/api_util');
var NewUser = require('./new_user');
var NewSession = require('./new_session');

var AuthForm;
var Auth = React.createClass({


  GetAppropriateAuthForm: function() {

    if (this.props.button === "Sign Up") {
      AuthForm = NewUser;
    } else if (this.props.button === "Sign In") {
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
