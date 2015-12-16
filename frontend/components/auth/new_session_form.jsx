var React = require('react');
var AuthStore = require('../../stores/auth_store');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../../util/api_util');


var NewSessionForm = React.createClass ({

  handleSubmit: function (e) {
    debugger;
    e.preventDefault();
    var form = document.getElementById("newSessionForm");
    ApiUtil.signInUser(form.username, form.password);

  },

  render: function () {
    return (
      <div className='modal-screen'>
        <div className='modal-content'>
          <p>{this.props.method}</p>

          <form id="newSessionForm">
            <label>Username:
              <input type="text" name="username"/>
            </label>
            <br />
            <label>Password:
              <input type="password" name="password"/>
            </label>
            <br />

            <input className="btn btn-primary" type="submit" onClick={this.handleSubmit} value="Sign In!" />

          </form>
        </div>
      </div>
    );
  }

});

module.exports = NewSessionForm;
