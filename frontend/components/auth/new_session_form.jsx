var React = require('react');
var AuthStore = require('../../stores/auth_store');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../../util/api_util');


var NewSessionForm = React.createClass ({

  handleSubmit: function (e) {
    e.preventDefault;
    ApiUtil.SignInUser(user)

  }

  render: function () {
    return (
      <div className='modal-screen'>
        <div className='modal-content'>
          <p>{this.props.method}</p>
          {displayMessages}
          <form>
            Username: <input type="text"/>

            <br />

            Password: <input type="password"/>

            <br />

            <input className="btn btn-primary" type="submit" onClick={this.handleSubmit} value="Sign In!" />

          </form>
        </div>
      </div>
    );
  }

});

module.exports = NewSessionForm;
