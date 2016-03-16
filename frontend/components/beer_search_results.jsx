import React, { Component } from 'react';
import { Link } from 'react-router';

var BeerStore = require('../stores/beer_store');

class BeerSearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: []
    }
    this.renderBeers = this.renderBeers.bind(this);
  }

  renderBeers() {

    const term = this.props.term;

    let beers = BeerStore.filterBySearchTerm(term);


    return(
      <div className="beerSearchResults">

          {beers.map((beer) => {
            let url = "/beer/" + beer.id;
            return(
                  <Link
                    to={url}
                    key={beer.id}
                    params={{id: beer.id}}
                    ref={beer.id}
                    >
                      <div className="beerSearchResultItem" onClick={this.props.handleClick}>
                        {beer.name}
                      </div>
                  </Link>
            );
          }, this)}
      </div>
    );

  }
  render() {
    return<div>{this.renderBeers()}</div>;
  }
}

export default BeerSearchResults;
