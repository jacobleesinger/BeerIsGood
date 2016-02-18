var React = require('react');
var Navbar = require('./navbar.jsx');
var BeerStore = require('../stores/beer_store');
var BeerShow = require('./beer_show');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


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

  // handleClick: function(beerId) {
  //   this.props.onSubPageChange(newSubPage, user, beer);
  // },


  render: function () {

    return (

      <div className="index fixedWidth row">
        {this.state.beers.map(function(beer) {
          var url = "/beer/" + beer.id;
            return(
              <Link className="indexItem col-md-12" key={beer.id} to={url}>{beer.name}</Link>
            );
          }.bind(this))
        }

      </div>
    );
  }

});

module.exports = BeersIndex;
