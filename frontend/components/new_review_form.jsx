import React, { Component } from 'react';
import linkState from 'react-link-state';

import BeerStore from '../stores/beer_store';
import ReviewStore from '../stores/review_store';

import ReviewUtil from '../util/review_util';

class ReviewForm extends Component {
  contructor(props) {
    super(props);

    this.state = {
      beers: BeerStore.all(),
      beer_id: 0,
      body: "",
      rating: 0,
      author_id: props.currentUser.id
    };
  }

  componentDidMount() {
    this.beerToken = BeerStore.addListener(this._onChange);
    this.reviewToken = ReviewStore.addListener(this._onChange);
  }

  componentWillUnmount() {
    this.beerToken.remove();
    this.reviewToken.remove();
  }

  handleBeerChange(e) {
    this.setState({
      beer_id: e.target.value
    });
  }

  handleRatingChange(e) {
    this.setState({
      rating: e.target.value
    });
  }



  render() {
    return (
      <form className="form-group reviewForm">

          <label htmlFor="reviewBeer">What are you drinking?</label>
            <select value={this.state.beer_id} onChange={this.handleBeerChange}>
              <option value="0" key="0"></option>
              {
                this.state.beers.map(function(beer) {
                  return(
                    <option value={beer.id} key={beer.id}>{beer.name}</option>
                    )
                  }.bind(this)
                )
              }

            </select>

          <label htmlFor="reviewBody">What do you think?</label>
          <textarea className="form-control" id="reviewBody" valueLink={linkState(this, 'body')} ></textarea>

          <label className="reviewFormItem" htmlFor="reviewRating">Rate it!</label>
            <select className="reviewFormItem" onChange={this.handleRatingChange}>
              <option value="0">rate beer</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>


          <input className="btn btn-2 reviewFormItem" type="submit" value="Add your review!" onClick={this.handleSubmit}/>

      </form>
    )
  }


}

export default ReviewForm;
