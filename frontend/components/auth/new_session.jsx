var React = require('react');
var AuthStore = require('../../stores/auth_store');



var NewSession = React.createClass ({

  handleSubmit: function (e) {
    e.preventDefault();
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

module.exports = NewSession;
