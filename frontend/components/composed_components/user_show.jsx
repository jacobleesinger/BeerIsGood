import React, { Component } from 'react';
import AuthenticatedComponent from '../authenticated_component';
import UserShow from '../new_user_show';

export default AuthenticatedComponent(class Home extends Component {
  render() {

     // Here, we display the user information
    return (<UserShow
      user={this.props.user}
      currentUser={this.props.currentUser} />);
  }
});
