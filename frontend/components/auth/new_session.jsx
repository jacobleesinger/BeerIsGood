var React = require('react');
var AuthStore = require('../../stores/auth_store');



var NewSession = React.createClass ({

  handleSubmit: function (e) {
    e.preventDefault();
  },

  render: function () {
    return (
      <div className='modal-screen'>
        <div className='modal-content new-session'>
          <p>{this.props.method}</p>

          <form id="newSessionForm" className="form-group">

            <div className="form-control">
              <label>Username:
                <input type="text" name="username"/>
              </label>
            </div>

            <div className="form-control">
              <label>Password:
                <input type="password" name="password"/>
              </label>
            </div>

            <div className="form-control">
              <input className="btn btn-primary" type="submit" onClick={this.handleSubmit} value="Sign In!" />
            </div>
          </form>
        </div>
      </div>
    );
  }

});

module.exports = NewSession;
