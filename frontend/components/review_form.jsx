var React = require('react');
var BeerStore = require('../stores/beer_store');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ReviewUtil = require('../util/review_util');
var ReviewStore = require('../stores/review_store');


var ReviewForm = React.createClass({

  mixins: [LinkedStateMixin],

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function(){
    return({
      beers: BeerStore.all(),
      beer_id: 0,
      body: "",
      rating: 0,
      author_id: this.props.currentUser.id
    });
  },

  _onChange: function(){
    this.setState({
      beers: BeerStore.all(),
      beer_id: 0,
      body: "",
      rating: 0,
      author_id: this.props.currentUser.id
    });
  },

  componentDidMount: function(){
    this.BeerToken = BeerStore.addListener(this._onChange);
    this.ReviewToken = ReviewStore.addListener(this._onChange);
  },
  componentWillUnmount: function(){
    this.BeerToken.remove();
    this.ReviewToken.remove();
  },

  filteredState: function () {
    return {
      beer_id: this.state.beer_id,
      body: this.state.body,
      rating: this.state.rating,
      author_id: this.state.author_id
    };
  },

  handleSubmit: function(e) {
    e.preventDefault;

    Object.assign({}, this.state)
    ReviewUtil.createReview(this.filteredState());
  },

  handleBeerChange: function(event) {
    this.setState({beer_id: event.target.value});
  },

  handleRatingChange: function(event) {
    this.setState({rating: event.target.value});
  },


  render: function() {

    return(
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
          <textarea className="form-control" id="reviewBody" valueLink={this.linkState('body')} ></textarea>

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
    );

  }

});

module.exports = ReviewForm;
