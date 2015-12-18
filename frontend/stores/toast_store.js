var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var ToastConstants = require('../constants/toast_constants');

var _toasts = [];

var ToastStore = new Store(AppDispatcher);

var addAllToasts = function (toasts) {
  toasts.forEach(function(toast){
    _toasts[toast.id] = toast;
  });
};

var addSingleToast = function(toast) {
  _toasts[toast.id] = toast;
};

ToastStore.all = function() {
  return _toasts;
};

ToastStore.find = function (toastId) {
  return _toasts[toastId];
}

ToastStore.__onDispatch = function(payload) {

  switch(payload.actionType) {
    case ToastConstants.TOASTS_RECEIVED:
      addAllToasts(payload.toasts)
      ToastStore.__emitChange();
      break;
    case ToastConstants.TOAST_RECEIVED:
      addSingleToast(payload.toast);
      ToastStore.__emitChange();
      break;

  };
};

module.exports = ToastStore;
