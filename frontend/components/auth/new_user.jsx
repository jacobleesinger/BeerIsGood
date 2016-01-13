var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var UserUtil = require('../../util/user_util');
var SessionUtil = require('../../util/session_util')
var today = new Date();

var NewUser = React.createClass({

  mixins: [LinkedStateMixin],

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function (){
    return({
      username: "",
      password: "",
      location: "",
      email: "",
      password_confirmation: "",
      birthday: today.toISOString().slice(0,10)
    });
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var user = Object.assign({}, this.state);
    UserUtil.createUser(user);

  },

  goBack: function () {
    this.props.cancelAuth();
  },

  render: function () {


    return(

      <div  className="row">
        <div className="" id="newUserFormDiv">
          <form id="newUserForm" className="form-group">
            <div className="row">

              <div className="col-md-6">

                <label htmlFor="newUsername">Username</label>
                <input type="text" className="form-control" id="newUsername" valueLink={this.linkState('username')}/>

                <label htmlFor="newPassword">Password</label>
                <input type="password" className="form-control"id="newPassword" valueLink={this.linkState('password')}/>

                <label htmlFor="newLocation">Location</label>
                <input type="text" className="form-control" id="newLocation" valueLink={this.linkState('location')}/>

              </div>

              <div className="col-md-6">
                <label htmlFor="newEmail">Email</label>
                <input type="email" className="form-control" id="newEmail" valueLink={this.linkState('email')}/>

                <label htmlFor="newConfirm">Confirm Password</label>
                <input type="password" className="form-control" id="newConfirm" valueLink={this.linkState('password_confirmation')}/>

                <label htmlFor="newBirthday">Birthday</label>
                <input type="date" className="form-control" id="newBirthday" valueLink={this.linkState('birthday')} />

              </div>

            </div>

            <input type="submit" onClick={this.handleSubmit} value="Create My Account!" className="btn btn-lg btn-1 authButton"/>
            <button onClick={this.goBack} value="Cancel" className="btn btn-lg btn-3 authButton">Cancel</button>


          </form>
        </div>
      </div>


    );
  }

});

module.exports = NewUser;
