import React, { Component } from 'react';

import ReviewsIndex from './reviewsIndex';
import Navbar from './new_navbar';
import Footer from './footer';

var BeerStore = require('../stores/beer_store');

class BeerShow extends Component {
  constructor(props) {

    super(props);

    this.state = {
      beer: this.props.beer
    }
  }

  componentWillReceiveProps(){
    this.forceUpdate();
  }

  render() {
// debugger;
    return (
      <div className="mainPage">
          <Navbar currentUser={this.props.currentUser}/>
          <div className="row fixedWidth">
            <ReviewsIndex
              currentUser={this.props.currentUser}
              beer={this.props.beer}/>
          </div>
          <Footer />
      </div>

    );
}
};

export default BeerShow;
