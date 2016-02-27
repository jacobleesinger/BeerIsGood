import React, { Component } from 'react';
import AuthenticatedComponent from '../authenticated_component';
import UserProfile from '../new_user_profile';

export default AuthenticatedComponent(class Home extends Component {
  render() {
;
     // Here, we display the user information
    return (<UserProfile currentUser={this.props.currentUser} />);
  }
});
