var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var BeerConstants = require('../constants/beer_constants');

var _beers = {};

var BeerStore = new Store(AppDispatcher);

var addAllBeers = function (beers) {
  beers.forEach(function(beer){
    _beers[beer.id] = beer;
  });
};

var addSingleBeer = function(beer) {
  _beers[beer.id] = beer;
};

BeerStore.all = function() {

  var beers = [];
  for(key in _beers) {
    if (_beers.hasOwnProperty(key)) {
      beers.push(_beers[key])
    }
  }
  return beers;
};


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


  };
};

module.exports = BeerStore;
