var Dispatcher = require('./dispatcher');
var _ = require('lodash');
var merge = _.extend;

var AppDispatcher = merge(Dispatcher.prototype, {
	handleViewAction: function(action){
		this.dispatch({
			source: 'VIEW_ACTION',
			action: action
		});
	}
});

module.exports = AppDispatcher;