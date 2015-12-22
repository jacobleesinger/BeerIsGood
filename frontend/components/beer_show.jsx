var React = require('react');
var BeerReviewsIndex = require('./beer_reviews_index');


var BeerShow = React.createClass({
  render: function () {

    return (
      <div>
        <h1>{this.props.arg.name}</h1>
        <BeerReviewsIndex beer={this.props.arg} currentUser={this.props.currentUser}/>
      </div>
    )
  }
});

module.exports = BeerShow;
