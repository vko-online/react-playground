/*** @jsx React.DOM */
var APP = require('./components/app'),
    React = require('react');


//require adapters (self registerable)
require('./adapters/local');

React.render(
    <APP />,
    document.querySelector('main'));