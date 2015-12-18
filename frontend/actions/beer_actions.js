var Dispatcher = require('../dispatcher/dispatcher');
var BeerConstants = require('../constants/beer_constants');

var BeerActions = {

  receiveAllBeers: function(beers) {
    Dispatcher.dispatch({
      actionType: BeerConstants.BEERS_RECEIVED,
      beers: beers
    });
  },

  receiveSingleBeer: function(beer) {
    var action = {
      actionType: BeerConstants.BEER_RECEIVED,
      beer: beer
    };
    Dispatcher.dispatch(action);
  }

};

module.exports = BeerActions;
