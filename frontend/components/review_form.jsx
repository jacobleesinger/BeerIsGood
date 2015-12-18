var React = require('react');

var ReviewForm = React.createClass({

  render: function() {

    return(
      <form className="form-group reviewForm">

          <label htmlFor="reviewBeer">What are you drinking?</label>
          <input className="form-control" type="text" id="reviewBeer" />

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
