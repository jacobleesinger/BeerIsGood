var React = require('react');
var Navbar = require('./navbar.jsx');

var BeersIndex = React.createClass({

  render: function () {
    return (

      <div>
        <Navbar />
        THIS IS THE BEERS INDEX PAGE
      </div>
    );
  }

});

module.exports = BeersIndex;
