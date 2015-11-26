var React = require('react/addons'),

App = React.createFactory(require('../components/App'));

module.exports = function(app) {

  app.get('/', function(req, res){
    // React.renderToString takes your component
      // and generates the markup
    var reactHtml = React.renderToString(ReactApp({}));
      // Output html rendered by react
    // console.log(myAppHtml);
      res.render('index.ejs', {reactOutput: reactHtml});
  });

  app.get('/franky', function(req, res){
    // React.renderToString takes your component
      // and generates the markup
    var reactHtml = React.renderToString(FrankyApp({}));
      // Output html rendered by react
    // console.log(myAppHtml);
      res.render('franky.ejs', {reactOutput: reactHtml});
  });

};