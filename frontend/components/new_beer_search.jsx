import React, { Component } from 'react';

import BeerSearchResults from './beer_search_results';

class BeerSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault;
    this.setState({
      term: e.target.value
    });
  }

  getSearchResults() {
    if(this.state.term) {
      return(
        <BeerSearchResults term={this.state.term} />
      )
    }
  }

  render() {
    return (
      <div className="beerSearch">
        <form className="form-group has-feedback">
          <input
            type="text"
            placeholder="search for a beer"
            value={this.state.term}
            onChange={this.handleChange}
            className="form-control" />
          <i className="glyphicon glyphicon-search form-control-feedback searchIcon"></i>

        </form>
        {this.getSearchResults()}
      </div>
    );
  }
}

export default BeerSearch;
