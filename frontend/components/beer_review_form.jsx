var React = require('react');

var BeerReviewForm = React.createClass({

  render: function () {

    return (
      <div className="">
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

            <input className="btn btn-2" type="submit" value="Update Review" onClick={this.handleSubmit}/>

        </form>
      </div>
    )
  }

});

module.exports = BeerReviewForm;
