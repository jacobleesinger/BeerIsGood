var React = require('react');
var BeerStore = require('../stores/beer_store');

var ReviewForm = React.createClass({

  getInitialState: function(){
    return({
      beers: BeerStore.all()
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


  render: function() {

    return(
      <form className="form-group reviewForm">

          <label htmlFor="reviewBeer">What are you drinking?</label>
            <select className="form-control" name="select">
              {this.state.beers.map(function(beer){
                return (
                  <option key={beer.id}>{beer.name}</option>
                  )
              }.bind(this)
            )}

            </select>


          <label htmlFor="reviewBody">What do you think?</label>
          <textarea className="form-control"></textarea>

          <label htmlFor="reviewRating">Your Rating</label>
          <input className="form-control" type="integer" id="reviewRating" />

          <input className="btn btn-success" type="submit" value="Add your review!" />

      </form>
    );

  }

});

module.exports = ReviewForm;
