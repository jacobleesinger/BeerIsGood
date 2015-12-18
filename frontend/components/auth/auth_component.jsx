var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var NewUser = require('./new_user');
var NewSession = require('./new_session');


var AuthForm;
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
