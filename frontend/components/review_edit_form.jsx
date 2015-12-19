var React = require('react');
var BeerStore = require('../stores/beer_store');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ReviewUtil = require('../util/review_util');
var ReviewStore = require('../stores/review_store');
var reviewIndexItem = require('./reviewIndexItem');


var ReviewEditForm = React.createClass({

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
      author_id: this.props.user.id,
      id: this.props.review.id,

    });
  },

  _onChange: function(){
    this.setState({
      beers: BeerStore.all(),
      beer_id: 0,
      body: "",
      rating: 0,
      author_id: this.props.user.id
    });
  },

  componentDidMount: function(){
    this.BeerToken = BeerStore.addListener(this._onChange);
    this.ReviewToken = ReviewStore.addListener(this._onChange);
  },
  componentWillUnmount: function(){
    this.BeerToken.remove();
  },

  filteredState: function() {
    filteredState = {};
    for (key in this.state) {
      if (this.state.hasOwnProperty(key)){

        if (key !== "beers") {
          filteredState[key] = this.state[key];
        }
      }
    }
    return filteredState;
  },

  handleSubmit: function(e) {
    e.preventDefault;

    var reviewData = Object.assign({}, this.state);
    ReviewUtil.updateReview(this.filteredState());
    ReviewIndexItem.closeEdit();
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

          <label htmlFor="reviewBody">What do you think?</label>
          <textarea className="form-control" id="reviewBody" valueLink={this.linkState('body')} ></textarea>

          <label htmlFor="reviewRating">Your Rating</label>
            <select onChange={this.handleRatingChange}>
              <option value="0">rate beer</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>


          <input className="btn btn-success" type="submit" value="Update Review" onClick={this.handleSubmit}/>

      </form>
    );

  }

});

module.exports = ReviewEditForm;
