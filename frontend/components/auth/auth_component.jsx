var React = require('react');
var AuthStore = require('../../stores/auth_store');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../../util/api_util');
var NewUser = require('./new_user_form');
var NewSession = require('./new_session_form');

var Auth = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function() {
    return({
      username: "",
      password: "",
      messages: []
    });
  },

  componentDidMount: function () {
    AuthStore.addListener(this._onChange);
  },

  _onChange: function () {
    var messages = AuthStore.all();
    if (messages[0] === "success") {
      this.props.callback();
    } else {
      this.setState({ messages: messages });
    }
  },

  render: function () {
    var displayMessages;
    if (this.state.messages.length > 0) {
      displayMessages =
      <ul>
        {this.state.messages.map(function (message) {
          return <li>{message}</li>;
        })
      }
      </ul>
    }
    if (this.props.method === "Sign Up!") {
      return (
        <NewUser />
      )
    } elsif (this.props.method === "Sign In!") {
      return (
        <NewSession />
      )
    }


  }

});

module.exports = Auth;
