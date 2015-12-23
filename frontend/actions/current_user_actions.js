var Dispatcher = require('../dispatcher/dispatcher');
var CurrentUserConstants = require('../constants/current_user_constants');

var CurrentUserActions = {

  setCurrentUser: function(user) {
    Dispatcher.dispatch({
      actionType: CurrentUserConstants.CURRENT_USER_SET,
      currentUser: user
    });
  },

  resetCurrentUser: function () {
    Dispatcher.dispatch({
      actionType: CurrentUserConstants.CURRENT_USER_RESET,
    })
  }


};

module.exports = CurrentUserActions;
