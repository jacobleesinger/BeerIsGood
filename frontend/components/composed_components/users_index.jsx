import React, { Component } from 'react';
import UsersIndex from '../users_index';
import AuthenticatedComponent from '../authenticated_component';

export default AuthenticatedComponent(class ComposedUsersIndex extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <UsersIndex currentUser={this.props.currentUser} />
    );
  }
});
