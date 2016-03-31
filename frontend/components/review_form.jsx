import React, { Component } from 'react';
import linkState from 'react-link-state';

import BeerStore from '../stores/beer_store';
import ReviewStore from '../stores/review_store';

import ReviewUtil from '../util/review_util';

class ReviewForm extends Component {
  constructor(props) {
    super(props);

    if(this.props.beer) {
      this.state = {
        beers: [],
        beer_id: this.props.beer.id,
        body: "",
        rating: 0,
        author_id: props.currentUser.id
      }
    } else {
      this.state = {
        beers: BeerStore.all(),
        beer_id: 0,
        body: "",
        rating: 0,
        author_id: props.currentUser.id
      };
    }
    this.handleBeerChange = this.handleBeerChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.beerToken = BeerStore.addListener(this.onBeerChange);
    this.reviewToken = ReviewStore.addListener(this.onReviewChange);
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

  handleSubmit(e) {
    e.preventDefault();
    ReviewUtil.createReview({
      beer_id: parseInt(this.state.beer_id),
      author_id: this.state.author_id,
      body: this.state.body,
      rating: parseInt(this.state.rating)

    });
    this.props.onClick();
  }

  renderSelect() {
    if(this.props.beer){
      return <div></div>
    } else {
      return (
        <label htmlFor="reviewBeer">What are you drinking?
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
        </label>
      );
    }
  }

  render() {
    return (
      <form className="form-group reviewForm" onSubmit={this.handleSubmit}>

        {this.renderSelect()}

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


          <input className="btn btn-2 reviewFormItem addReviewButton" type="submit" value="Add your review!" />

      </form>
    )
  }
}

export default ReviewForm;
