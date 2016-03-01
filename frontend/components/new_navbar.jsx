import React, { Component } from 'react';
import { Link } from 'react-router';
import BeerSearch from './new_beer_search';
import SessionUtil from '../util/session_util';

var browserHistory = require('react-router').browserHistory;


class Navbar extends Component {

  constructor(props) {
    super(props);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }
  handleSignOut() {
    // history.pushState(null, '/');
    SessionUtil.destroySession();
  }

  handleSearchClick(beerId) {

    let url = "/beer/" + beerId;
    history.pushState(null, '/beer/1');
  }

  render() {
    const profileUrl = "/user/" + this.props.currentUser.id;
    return (
      <div className="navbar">
        <div className="fixedWidth">
          <div className="navbarHeader navbarLinks">
              <Link className="logo"
                to={profileUrl}
                >
                <h1>BeerisGood</h1></Link>

          </div>

          <div className="navbarContent">

            <ul className="navbarLinksUl">

              

              <li className="navbarLinks">
                <Link
                  to="/usersindex"

                  >
                  Find Friends
                </Link>
              </li>

              <li>
                <BeerSearch
                  onClick={this.handleSearchClick}

                  className=""
                  />
              </li>

              <li>
                <button
                  className="btn btn-sm btn-1 signOutButton" onClick={this.handleSignOut}>Sign Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
