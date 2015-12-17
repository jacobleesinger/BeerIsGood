var React = require('react');
var ApiUtil = require('../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ReviewsIndex = require('./reviewsIndex');

var Home = React.createClass({

  mixins: [LinkedStateMixin],

  contextTypes: {
    router: React.PropTypes.func
  },

  handleSignOut: function () {
    ApiUtil.destroySession();
  },



  render: function () {
    var name = this.props.currentUser.username;

    return(
      <div className="row">
        
        <div className="col-md-4 col-offset-4">
          Cheers, {name}!
          <br />
          <button
            className="btn btn-primary" onClick={this.handleSignOut}>Sign Out
          </button>
        </div>

        <br />

        <ReviewsIndex user={this.props.currentUser} />
      </div>
    );
  }

});

module.exports = Home;
