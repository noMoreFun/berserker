/* @jsx React.DOM */

var React = require('react');
var ReactDOM = require('react-dom');

var mountNode = document.getElementById("react-main-mount");

var shopDescData = require('./data/shopDescData.js');

// console.log(shopDescData.shopDescData);

var Shop = require('./components/helloMessage');

ReactDOM.render(<Shop data={shopDescData.shopDescData} />, mountNode);