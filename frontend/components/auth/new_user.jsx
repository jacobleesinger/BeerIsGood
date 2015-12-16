var React = require('react');

var NewUser = React.createClass({

  handleSubmit: function (e) {
    e.preventDefault();
  },

  render: function () {

    return(
      <div className='modal-screen'>
        <div className='modal-content'>
          <p>{this.props.method}</p>

          <form id="newSessionForm">
            <label>Username
              <input type="text" name="username"/>
            </label>
            <br />

            <label>Email
              <input type="email" name="email"/>
            </label>
            <br />

            <label>Password
              <input type="password" name="password"/>
            </label>
            <br />

            <label>Confirm Password
              <input type="password" name="password"/>
            </label>
            <br />

            <label>Location
              <input type="text" name="location"/>
            </label>
            <br />

            <label>Birthday
              <input type="date" name="birthday"/>
            </label>
            <br />

            <input className="btn btn-primary" type="submit" onClick={this.handleSubmit} value="Sign Up!" />

          </form>
        </div>
      </div>

    );
  }

});

module.exports = NewUser;
