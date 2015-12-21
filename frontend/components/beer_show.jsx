var React = require('react');


var BeerShow = React.createClass({
  render: function () {
    return <div>{this.props.beer.name}</div>
  }
});

module.exports = BeerShow;
