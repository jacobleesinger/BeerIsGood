var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var BeerConstants = require('../constants/beer_constants');

var _beers = {};

var BeerStore = new Store(AppDispatcher);

BeerStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case BeerConstants.BEERS_RECEIVED:
      addAllBeers(payload.beers);
      BeerStore.__emitChange();
      break;
    case BeerConstants.BEER_RECEIVED:
      addSingleBeer(payload.beer);
      BeerStore.__emitChange();
      break;


  }
};

module.exports = BeerStore;
