var React = require('react');
var BeerReviewsIndex = require('./beer_reviews_index');
var BeerStore = require('../stores/beer_store');


var BeerShow = React.createClass({
  render: function () {

    return (
      <div>
        <h1>{this.props.beer.name}</h1>
        <BeerReviewsIndex beer={this.props.beer} currentUser={this.props.currentUser}/>
      </div>
    )
  }
});

module.exports = BeerShow;
