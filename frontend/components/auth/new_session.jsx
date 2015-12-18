var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SessionUtil = require('../../util/session_util');


var NewSession = React.createClass ({
  mixins: [LinkedStateMixin],

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function (){
    return({
      username: "",
      password: "",

    });
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var sessionData = Object.assign({}, this.state);
    SessionUtil.createSession(sessionData);

  },

  render: function () {
    return (
      <div  className="row">
        <div className="col-md-8" id="newSessionFormDiv">
          <form id="newSessionForm" className="form-group">
            <div className="row">

              <div className="col-md-4">

                <label htmlFor="sessionUsername">Username</label>
                <input type="text" className="form-control" id="sessionUsername" valueLink={this.linkState('username')}/>

                <label htmlFor="sessionPassword">Password</label>
                <input type="password" className="form-control"id="sessionPassword" valueLink={this.linkState('password')}/>
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
