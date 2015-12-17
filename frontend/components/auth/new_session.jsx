var React = require('react');
var SessionStore = require('../../stores/session_store');



var NewSession = React.createClass ({

  handleSubmit: function (e) {
    e.preventDefault();

  },

  render: function () {
    return (
      <div  className="row">
        <div className="col-md-8" id="newSessionFormDiv">
          <form id="newSessionForm" className="form-group">
            <div className="row">

              <div className="col-md-4">

                <label htmlFor="sessionUsername">Username</label>
                <input type="text" className="form-control" id="sessionUsername"/>

                <label htmlFor="sessionPassword">Password</label>
                <input type="password" className="form-control"id="sessionPassword"/>
              </div>
            </div>

            <input type="submit" onClick={this.handleSubmit} value="Sign In" className="btn btn-primary"/>

          </form>
        </div>
      </div>
    );
  }

});

module.exports = NewSession;
