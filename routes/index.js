var express = require('express');
var router = express.Router();
var request = require('request');

// 
// 
/* GET home page. */
router.get('/', function(req, res) {
  request('https://buy.duitang.com/napi/inventory/detail/?id=4904', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log(body);
      // Show the HTML for the Google homepage.
      res.render('index', { title: 'Express' });
    }
  });
  
});

module.exports = router;
