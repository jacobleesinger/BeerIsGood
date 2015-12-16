var React = require('react');

var NewUser = React.createClass({

  handleSubmit: function (e) {
    e.preventDefault();
  },

  render: function () {

    return(
      <div className='modal-screen'>
        <div className='modal-content new-user'>
          <p>{this.props.method}</p>

          <form id="newSessionForm" className="form-control">

            <div className="half">

              <div className="form-group">
                <label>Username
                  <input type="text" name="username"/>
                </label>
              </div>

              <div className="form-group">
                <label>Password
                  <input type="password" name="password"/>
                </label>
              </div>

              <div className="form-group">
                <label>Location
                  <input type="text" name="location"/>
                </label>
              </div>

            </div>

            <div className="half">

              <div className="form-group">
                <label>Email
                  <input type="email" name="email"/>
                </label>
              </div>

              <div className="form-group">
                <label>Confirm Password
                  <input type="password" name="password"/>
                </label>
              </div>

              <div className="form-group">
                <label>Birthday
                  <input type="date" name="birthday"/>
                </label>
              </div>

            </div>

            <div className="form-group">
              <input className="btn btn-primary new-user-submit" type="submit" onClick={this.handleSubmit} value="Sign Up!" />
            </div>

          </form>
        </div>
      </div>

    );
  }

});

module.exports = NewUser;
