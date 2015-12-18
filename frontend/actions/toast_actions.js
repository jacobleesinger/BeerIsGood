var Dispatcher = require('../dispatcher/dispatcher');
var ToastConstants = require('../constants/toast_constants');

var ToastActions = {

  receiveAllToasts: function(toasts) {
    Dispatcher.dispatch({
      actionType: ToastConstants.TOASTS_RECEIVED,
      toasts: toasts
    });
  },

  receiveSingleToast: function(toast) {
    var action = {
      actionType: ToastConstants.TOAST_RECEIVED,
      toast: toast
    };
    Dispatcher.dispatch(action);
  }

};

module.exports = ToastActions;
