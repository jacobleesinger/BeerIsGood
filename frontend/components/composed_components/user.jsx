import React, { Component } from 'react';
import AuthenticatedComponent from '../authenticated_component';
import User from '../user';
import UserUtil from '../../util/user_util';
var UserStore = require('../../stores/user_store');

export default AuthenticatedComponent(class Home extends Component {

  constructor(props) {
    super(props);


  }
  render() {
     // Here, we display the user information
      let user = UserStore.findById(this.props.params.id);

    return (<User user={ user } currentUser={ this.props.currentUser } />);
  }
});
