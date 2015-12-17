var ApiActions = require('../actions/api_actions');

var ApiUtil = {

createUser: function (data) {
    $.post("api/users", { user: data }, function (user) {
      ApiAction.receiveSingleUser(user);
      ApiAction.receiveSession(session);
    });
  }

};

window.ApiUtil = ApiUtil;
module.exports = ApiUtil;
