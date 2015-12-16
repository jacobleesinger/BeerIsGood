var React = require('react');

var NewUser = React.createClass({

  handleSubmit: function (e) {
    e.preventDefault();
  },

  render: function () {

    return(
      <div className="row">
        <div className='modal-screen'>
          <div className='modal-content col-md-6 col-offset-3'>
            <p>{this.props.method}</p>

            <form id="newSessionForm" className="form-control">
              <div className="col-md-3 col-offset3">
                <div className="form-group">
                  <label htmlFor="newUsername">Username</label>
                  <input type="text" name="username" id="newUsername"/>
                </div>

                <div className="form-group">
                  <label htmlFor="newPassword">Password</label>
                  <input type="password" name="password" id="newUsername"/>
                </div>

                <div className="form-group">
                  <label htmlFor="newLocation">Location</label>
                  <input type="text" name="location" id="newLocation"/>
                </div>
              </div>

              <div className="col-md-3 col-offset-6">

                <div className="form-group">
                  <label htmlFor="newEmail">Email</label>
                  <input type="email" name="email" id="newEmail"/>
                </div>

                <div className="form-group">
                  <label htmlFor="newConfirm">Confirm Password</label>
                  <input type="password" name="password" id="newConfirm"/>
                </div>

                <div className="form-group">
                  <label htmlFor="newBirthday">Birthday</label>
                  <input type="date" name="birthday" id="newBirthday"/>
                </div>
              </div>

              <div className="form-group">
                <input className="btn btn-primary new-user-submit" type="submit" onClick={this.handleSubmit} value="Sign Up!" />
              </div>

            </form>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = NewUser;
