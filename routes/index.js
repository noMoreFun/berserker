var express = require('express');

var router = express.Router();

var request = require('request');

var React = require('react');

var ReactDOMServer = require('react-dom/server');

var http = require('http');

var App = React.createFactory(require('../app/components/shop'));

/* GET home page. */
router.get('/', function(req, res) {

  // http.request('http://www.baidu.com',function(){

  // });
  
  request('https://buy.duitang.com/napi/inventory/detail/?id=4904', function (error, response, jsn) {
    if (!error && response.statusCode == 200) {
      var shopDescData = require('../app/data/shopDescData.js');

 
      var reactHtml = ReactDOMServer.renderToString(App({data: shopDescData.shopDescData}));
      // var reactHtml = ReactDOMServer.renderToString(<App data={shopDescData.shopDescData}/>);
      console.log(reactHtml);
      // Show the HTML for the Google homepage.
      res.render('index', { reactOutput: reactHtml,data:shopDescData.shopDescData });
    }
  });

});

module.exports = router;
