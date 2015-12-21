var React = require('react');
var Navbar = require('./navbar.jsx');
var BeerStore = require('../stores/beer_store');
var BeerShow = require('./beer_show');


var BeersIndex = React.createClass({

  getInitialState: function () {
    return({
      beers: BeerStore.all(),

    })
  },

  componentDidMount: function () {
    var beerToken = BeerStore.addListener(this._onChange);
  },



  _onChange: function () {
    this.setState({
      beers: BeerStore.all()
    });
  },

  handleClick: function(newSubPage, beer) {
    this.props.onSubPageChange(newSubPage, beer);
  },


  render: function () {


    return (

      <div className="fixedWidth">
        {this.state.beers.map(function(beer) {
            return(
              <div beer={beer} key={beer.id} onClick={this.handleClick.bind(this, BeerShow, beer)}>{beer.name}</div>
            );
          }.bind(this))
        }

      </div>
    );
  }

});

module.exports = BeersIndex;
