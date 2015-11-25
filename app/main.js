/* @jsx React.DOM */

var React = require('react');
var ReactDOM = require('react-dom');

var mountNode = document.getElementById("react-main-mount");

var HelloMessage = require('./components/helloMessage');

var Shop = require('./components/Shop');

ReactDOM.render(<Shop />, mountNode);