import React, { Component } from 'react';
import AuthenticatedComponent from '../authenticated_component';
import BeerShow from '../new_beer_show';

var BeerStore = require('../../stores/beer_store');

export default AuthenticatedComponent(class Home extends Component {
  componentWillReceiveProps(){
    this.forceUpdate();
  }
  render() {
    let beer = BeerStore.find(this.props.params.id);
    return (
      <BeerShow
        currentUser={this.props.currentUser}
        beer={BeerStore.find(this.props.params.id)} />);
  }
});
