var React = require('react');
var ApiUtil = require('../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

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
      <div>
        Cheers, {name}!
        <button
          className="btn btn-primary" onClick={this.handleSignOut}>Sign Out
        </button>
      </div>
    );
  }

});

module.exports = Home;
