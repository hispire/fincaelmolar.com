var express = require('express');
var router = express.Router();

/* GET home page. */
function render(template, req, res) {
  //if (req.params.locale) res.cookie('locale', req.params.locale);
  if ( req.headers['x-pjax']) {
    res.render(template, {layout: null});
  }
  else {
    res.render(template);
  };

}

router.use(function (req, res, next) {
    // mustache helper
    res.locals.lg = '/';

    next();
});

router.param('locale', function(req, res, next, locale) {
  res.cookie('locale', locale);
  res.setLocale(locale);
  res.locals.lg =  '/' + req.getLocale()  + '/';
  next();
})


router.get('/', function(req, res) {
  //console.log(req);
  render('index', req, res);
});

router.get('/:locale?', function(req, res, next) {
  if (req.params.locale == 'es' || req.params.locale == 'en') {
    render('index', req, res);
  }
  else next();
})

router.get('/:locale?/wines', function(req, res) {
  //console.log(req);
   render('products', req, res);
});

router.get('/:locale?/wines/quantum', function(req, res) {
   render('quantum', req, res);
});

router.get('/:locale?/wines/finca', function(req, res) {
   render('finca', req, res);
});

router.get('/:locale?/wines/quantum-ice', function(req, res) {
   render('quantum-ice', req, res);
});

router.get('/:locale?/tourism', function(req, res) {
   render('tourism', req, res);
});

router.get('/:locale?/about', function(req, res) {
   render('about', req, res);
});

router.get('/:locale?/organic-production', function(req, res) {
   render('organic', req, res);
});

router.get('/:locale?/winery', function(req, res) {
   render('winery', req, res);
});


module.exports = router;
