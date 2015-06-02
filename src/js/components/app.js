/*** @jsx React.DOM */
var React = require('react'),

AppWatchMixin = require('../mixins/app_watch_mixin'),
AppStore = require('../stores/app_store'),
AppActions = require('../actions/app_actions');

var style = {
    color: 'red'
};

function _state_watcher() {
    return {
        value: AppStore.get_value()
    }
}

var APP =
React.createClass({
    mixins: [AppWatchMixin(_state_watcher, AppStore)],
    handleAction: function(){
        var new_value = AppStore.get_new_value();
        AppActions.first_action(new_value);
    },
    render: function () {
        return  <div style={style}>
                    <h1>hello {this.state.value}</h1>
                    <button onClick={this.handleAction}>Click me</button>
                </div>
    }
});
module.exports = APP;