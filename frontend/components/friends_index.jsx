var React = require('react');
var Navbar = require('./navbar.jsx');

var FriendsIndex = React.createClass({

  render: function () {
    return (

      <div>
        <Navbar />
        THIS IS THE FRIENDS INDEX PAGE
      </div>
    );
  }

});

module.exports = FriendsIndex;
