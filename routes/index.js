var express = require('express');

var router = express.Router();

var request = require('request');

var React = require('react');

var ReactDOMServer = require('react-dom/server');

var http = require('http');

var App = React.createFactory(require('../app/components/helloMessage'));

/* GET home page. */
router.get('/', function(req, res) {

  // http.request('http://www.baidu.com',function(){

  // });
 
  request('https://buy.duitang.com/napi/inventory/detail/?id=4904', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var a = JSON.parse(body);
      // var shopDescData = require('../app/data/shopDescData.js'); 
      var reactHtml = ReactDOMServer.renderToString(App({data: a.data}));
      // var reactHtml = ReactDOMServer.renderToString(<App data={shopDescData.shopDescData}/>);
      res.render('index', { reactOutput: reactHtml});
    }
  });

});

module.exports = router;
