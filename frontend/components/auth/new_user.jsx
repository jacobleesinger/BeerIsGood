var React = require('react');

var NewUser = React.createClass({

  handleSubmit: function (e) {
    e.preventDefault();
  },

  render: function () {

    return(

      <div  className="row">
        <div className="col-md-8" id="newUserFormDiv">
          <form id="newUserForm" className="form-group">
            <div className="row">

              <div className="col-md-4">

                <label htmlFor="newUsername">Username</label>
                <input type="text" className="form-control" id="newUsername"/>

                <label htmlFor="newPassword">Password</label>
                <input type="password" className="form-control"id="newPassword"/>

                <label htmlFor="newLocation">Location</label>
                <input type="text" className="form-control" id="newLocation"/>

              </div>

              <div className="col-md-4">
                <label htmlFor="newEmail">Email</label>
                <input type="email" className="form-control" id="newEmail"/>

                <label htmlFor="newConfirm">Confirm Password</label>
                <input type="password" className="form-control" id="newConfirm"/>

                <label htmlFor="newBirthday">Birthday</label>
                <input type="date" className="form-control" id="newBirthday"/>

              </div>

            </div>

            <input type="submit" onClick={this.handleSubmit} value="Sign Up" className="btn btn-primary"/>


          </form>
        </div>
      </div>


    );
  }

});

module.exports = NewUser;
