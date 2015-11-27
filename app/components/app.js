var React = require('react');
var Shop = require('./shop');

var App = React.createClass({
  render: function () {
    return (
      <div className="App">
        {Shop}
      </div>
    )
  }
});

module.exports = App;

