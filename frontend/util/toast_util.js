var ToastActions = require('../actions/toast_actions');

var ToastUtil = {

  fetchAllToasts: function() {
    $.get('../api/toasts', function (toasts) {
      ToastActions.receiveAllToasts(toasts);
    });
  },

  createToast: function(toast) {

    $.post('../api/toasts', { toast: toast }, function(toast) {
       ToastActions.receiveSingleToast(toast)
     });
   },

   destroyToast: function(toast){
     $.ajax({
       url: "../api/toast/" + toast.id,
       type: 'DELETE',
       success: function(review){
         ReviewActions.receiveSingleReview(review);
       }
     });
   }

};

module.exports = ToastUtil;
