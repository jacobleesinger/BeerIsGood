var React = require('react');


var ReviewDisplay = React.createClass({
<div className="reviewContainer col-md-12" >
  <div className="reviewContent col-md-12">
    <div className="reviewHeader col-md-12">
      {this.state.beer.name}

      <div onClick={this.handleDeleteClick.bind(this, this.props.review)} className="deleteReviewButton" value={this.props.review}>delete</div>

      <div onClick={this.handleEditClick.bind(this, this.props.review)} className="editReviewButton" value={this.props.review}>edit</div>

    </div>

    <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div className="modal-dialog" role="document">
        <div className="modal-content">

          <div className="modal-header">
            <h4 className="modal-title" id="myModalLabel">Edit Review</h4>
          </div>

          <div className="modal-body">
            <form className="form-group reviewForm">




              <label htmlFor="reviewBody">What do you think?</label>
              <textarea className="form-control" id="reviewBody" valueLink={this.linkState('body')} ></textarea>

              <label htmlFor="reviewRating">Your Rating</label>
                <select onChange={this.handleRatingChange} value={this.state.rating} onChange={this.handleRatingChange}>

                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>

                </select>

              <input className="btn btn-success" type="submit" defaultValue="Update Review" onClick={this.handleSubmit}/>

          </form>
      </div>

    <div className="modal-footer">

        <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>

    </div>

  </div>
</div>
</div>

    <div className="reviewBody col-md-12">
      Review: {this.props.review.body}
    </div>

    <div className="reviewFooter col-md-12">
      <div className="reviewFooterItem col-md-4">
        Rating: {this.props.review.rating}
      </div>

      <div className="reviewFooterItem col-md-4">
        toasts: {this.state.toasts.length}
      </div>

    </div>
  </div>

  <div className="reviewCommentsIndex col-md-12">
    <h4>Comments</h4>
    {
      this.state.comments.map(function(comment) {
          return (<Comment comment={comment} key={comment.id} />);
        }.bind(this)
      )
    }
  </div>

</div>

});

module.exports = ReactDisplay;
