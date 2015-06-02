var AppConstants = require('../constants/app_constants');
var AppDispatcher = require('../dispatchers/app_dispatcher');

var AppActions = {
    first_action: function (value) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.FIRST_ACTION,
            value: value
        });
    }
};

module.exports = AppActions;