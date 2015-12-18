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
      beer: {},
      body: "",
      rating: 0
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
    debugger;

    var beerData = Object.assign({}, this.state)
  },


  render: function() {

    return(
      <form className="form-group reviewForm">

          <label htmlFor="reviewBeer">What are you drinking?</label>
            <select className="form-control" name="select" >
              {this.state.beers.map(function(beer){
                return (
                  <option key={beer.id} valueLink={this.linkState('beer')}>{beer.name}</option>
                  )
              }.bind(this)
            )}

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
