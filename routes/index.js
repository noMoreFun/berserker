var express = require('express');
var router = express.Router();
var request = require('request');
var React = require('react');

var App = React.createFactory(require('../app/components/app'));

// console.log(App);
/* GET home page. */
router.get('/', function(req, res) {

  // request('https://buy.duitang.com/napi/inventory/detail/?id=4904', function (error, response, body) {
  //   if (!error && response.statusCode == 200) {
  //     // console.log(body);
  //     // Show the HTML for the Google homepage.
      
  //   }
  // });
  // 
  // var reactHtml = React.renderToString(FrankyApp({})); 
  
  res.render('index', { title: 'test' });
});

module.exports = router;
