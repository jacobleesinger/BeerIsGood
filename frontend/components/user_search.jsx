import React, { Component } from 'react';
import UserStore from '../stores/user_store';

class UserSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      term: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSearch(UserStore.filterBySearchTerm(this.state.term));
  }

  render() {
    return (
      <div className="userSearch">
        <form className="form-group has-feedback" onSubmit={this.handleSubmit}>
          <div className="col-md-6 col-md-offset-2">
            <input
              type="text"
              placeholder="search for a user"
              value={this.state.term}
              onChange={this.handleChange}
              className="form-control" />

            <i className="glyphicon glyphicon-search form-control-feedback searchIcon userSearchIcon"></i>
            </div>
            <div className="col-md-2">
              <button type="submit" className="btn btn-1">Search</button>


          </div>

        </form>
      </div>
    );
  }
}

export default UserSearch;
