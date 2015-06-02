var AppDispatcher = require('../dispatchers/app_dispatcher');
var AppConstants = require('../constants/app_constants');
var merge = require('lodash').extend;
var EventEmitter = require('events').EventEmitter;
var LocalStorageService = require('../utils/local_storage_service');

//data logic, maybe some REST api
var array_data = ['people', 'girls', 'github', 'twitter', 'John Lindquist', 'ReactJS', 'AngularJS'];
var data = 'world';
function _get_new_value(){
	var index = Math.floor(Math.random() * (array_data.length + 1));
	return array_data[index];
}
function _get_value(){
	return data;
}
function _set_value(value){
	data = value;
}

var AppStore = merge(EventEmitter.prototype, {

	//listener fns
	emitChange: function(){
		this.emit(AppConstants.CHANGE_EVENT_APP);
	},
	addChangeListener: function(callback){
		this.on(AppConstants.CHANGE_EVENT_APP, callback);
	},
	removeChangeListener: function(callback){
		this.removeListener(AppConstants.CHANGE_EVENT_APP, callback);
	},
	dispatcherIndex:AppDispatcher.register(function(payload){
		var action =  payload.action;
		switch(action.actionType){

			case AppConstants.FIRST_ACTION: 
				_set_value(payload.action.value);
			break;


			/*
			 * other actions
			 */

		}
		AppStore.emitChange();
		return true;
	}),

	//custom fns
	get_value: function(){
		return _get_value();
	},
	get_new_value: function(){
		return _get_new_value();
	}
	
});

module.exports = AppStore;