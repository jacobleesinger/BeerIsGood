var React = require('react');
var BeerStore = require('../stores/beer_store');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../util/api_util');


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
      author_id: this.props.user.id
    });
  },

  _onChange: function(){
    this.setState({
      beers: BeerStore.all()
    });
  },

  componentDidMount: function(){
    this.BeerToken = BeerStore.addListener(this._onChange);
  },
  componentWillUnmount: function(){
    this.BeerToken.remove();
  },

  handleSubmit: function(e) {
    e.preventDefault;

    var reviewData = Object.assign({}, this.state)
    ApiUtil.createReview(reviewData);
  },

  handleChange: function(event) {
    this.setState({beer_id: event.target.value});
  },


  render: function() {

    return(
      <form className="form-group reviewForm">

          <label htmlFor="reviewBeer">What are you drinking?</label>
            <select value={this.state.beer_id} onChange={this.handleChange}>
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

          <label htmlFor="reviewRating">Your Rating</label>
          <input className="form-control" type="integer" id="reviewRating" valueLink={this.linkState('rating')} />

          <input className="btn btn-success" type="submit" value="Add your review!" onClick={this.handleSubmit}/>

      </form>
    );

  }

});

module.exports = ReviewForm;
