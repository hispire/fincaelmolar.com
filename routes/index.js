var express = require('express');
var router = express.Router();
var app = require('../app');

/* GET home page. */
function render(template, req, res) {
  if ( req.headers['x-pjax']) {
    res.render(template, {layout: null});
  }
  else {
    res.render(template);
  };

}

router.use(function(req, res, next) {
  console.log(req.getLocale());
  next();
})

router.get('/', function(req, res) {
  console.log(req.getLocale());
  render('index', req, res);
});

router.get('/lang/:locale', function(req, res, next) {
  res.cookie('locale', req.params.locale);
  res.redirect('back');
})

router.get('/wines', function(req, res) {
   render('products', req, res);
});

router.get('/wines/quantum', function(req, res) {
   render('quantum', req, res);
});

router.get('/wines/finca', function(req, res) {
   render('finca', req, res);
});

router.get('/wines/quantum-ice', function(req, res) {
   render('quantum-ice', req, res);
});

router.get('/tourism', function(req, res) {
   render('tourism', req, res);
});

router.get('/about', function(req, res) {
   render('about', req, res);
});

router.get('/organic-production', function(req, res) {
   render('organic', req, res);
});

router.get('/winery', function(req, res) {
   render('winery', req, res);
});


module.exports = router;
