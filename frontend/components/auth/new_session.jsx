var React = require('react');
var AuthStore = require('../../stores/auth_store');



var NewSession = React.createClass ({

  handleSubmit: function (e) {
    e.preventDefault();
  },

  render: function () {
    return (
      <div className="row">
        <div className='modal-screen col-md-4 col-offset-4'>
          <div className='modal-content new-session'>
            <p>{this.props.method}</p>

            <form id="newSessionForm" className="form-group">

              <div className="form-control">
                <label htmlFor="newSessionUsername">Username</label>
                  <input type="text" name="username" id="newSessionUsername"/>
              </div>

              <div className="form-control">
                <label htmlFor="newSessionPassword">Password</label>
                  <input type="password" name="newSessionPassword"/>
              </div>

              <div className="form-control">
                <input className="btn btn-primary" type="submit" onClick={this.handleSubmit} value="Sign In!" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = NewSession;
