var BeerActions = require('../actions/beer_actions');

var BeerUtil = {

  fetchAllBeers: function() {
    $.get('api/beers', function (beers) {
      BeerActions.receiveAllBeers(beers);
    });
  },

  fetchSingleBeer: function(beer) {
    $.get('api/beer/' + beer.id, function(beer){
      BeerActions.receiveSingleBeer(beer)
    });
  },

};

module.exports = BeerUtil;
