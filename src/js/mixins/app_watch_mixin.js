var AppWatchMixin = function(callback, store){
	return {
		getInitialState: function(){
			return callback();
		},
		componentWillMount: function(){
			store.addChangeListener(this._onChange);
		},
		componentWillUnmount: function(){
			store.removeChangeListener(this._onChange)
		},
		_onChange: function(){	
			this.setState(callback());
		}
	}
}

module.exports = AppWatchMixin;