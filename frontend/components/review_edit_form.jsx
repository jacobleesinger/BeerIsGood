var React = require('react');
var BeerStore = require('../stores/beer_store');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ReviewUtil = require('../util/review_util');
var ReviewStore = require('../stores/review_store');
var ReviewIndexItem = require('./reviewIndexItem');
var Modal = require('react-bootstrap/lib/Modal');
var Button = require('react-bootstrap/lib/Button');


var ReviewEditForm = React.createClass({

  mixins: [LinkedStateMixin],

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function(){
    return({
      beers: BeerStore.all(),
      beer_id: this.props.review.beer_id,
      body: this.props.review.body,
      rating: this.props.review.rating,
      author_id: this.props.review.author_id,
      id: this.props.review.id

    });
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
debugger;
    Object.assign({}, this.state);
    ReviewUtil.updateReview(this.filteredState());
    ReviewIndexItem.closeEdit();
  },

  handleBeerChange: function(event) {
    this.setState({beer_id: event.target.value});
  },

  handleRatingChange: function(event) {
    this.setState({rating: event.target.value});
  },

  closeEdit: function() {
    this.setState({ showModal: false });
    },

    openEdit: function() {
      this.setState({ showModal: true });
    },

  render: function() {

    return(

      <Modal show={this.state.showModal} onHide={this.closeEdit}>

        <Modal.Header closeButton>
          <Modal.Title>Edit Review</Modal.Title>
        </Modal.Header>

        <Modal.Body>
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
        </Modal.Body>

      <Modal.Footer>
        <Button onClick={this.closeEdit}>Close</Button>
      </Modal.Footer>

      </Modal>
    );

  }

});

module.exports = ReviewEditForm;
