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


router.get('/:locale?', function(req, res) {
  res.cookie('locale', req.params.locale);
  render('index', req, res);
});

router.get('/lang/:locale', function(req, res, next) {
  res.cookie('locale', req.params.locale);
  res.redirect('/' + req.params.locale);
})

router.get('/:locale/wines', function(req, res) {
  res.cookie('locale', req.params.locale);
   render('products', req, res);
});

router.get('/:locale/wines/quantum', function(req, res) {
  res.cookie('locale', req.params.locale);
   render('quantum', req, res);
});

router.get('/:locale/wines/finca', function(req, res) {
  res.cookie('locale', req.params.locale);
   render('finca', req, res);
});

router.get('/:locale/wines/quantum-ice', function(req, res) {
  res.cookie('locale', req.params.locale);
   render('quantum-ice', req, res);
});

router.get('/:locale/tourism', function(req, res) {
  res.cookie('locale', req.params.locale);
   render('tourism', req, res);
});

router.get('/:locale/about', function(req, res) {
  res.cookie('locale', req.params.locale);
   render('about', req, res);
});

router.get('/:locale/organic-production', function(req, res) {
  res.cookie('locale', req.params.locale);
   render('organic', req, res);
});

router.get('/:locale/winery', function(req, res) {
  res.cookie('locale', req.params.locale);
   render('winery', req, res);
});


module.exports = router;
