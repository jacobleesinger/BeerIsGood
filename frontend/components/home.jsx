var React = require('react');
var SessionUtil = require('../util/session_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ReviewsIndex = require('./reviewsIndex');
var ReviewStore = require('../stores/review_store');
var NavbarInstance = require('./navbar');

var Home = React.createClass({

  mixins: [LinkedStateMixin],

  contextTypes: {
    router: React.PropTypes.func
  },

  handleSignOut: function () {
    SessionUtil.destroySession();
  },



  render: function () {
    debugger;
    var name = this.props.currentUser.username;

    return(
      <div>
        {NavbarInstance}
        <div className="row">

          <div className="col-md-4 col-offset-4">
            Cheers, {name}!
            <br />
            <button
              className="btn btn-primary" onClick={this.handleSignOut}>Sign Out
            </button>
          </div>

          <br />
          {this.props.errors}
          <ReviewsIndex user={this.props.currentUser} />
        </div>
      </div>
    );
  }

});

module.exports = Home;
