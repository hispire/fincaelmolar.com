var express = require('express');
var router = express.Router();

/* GET home page. */
function render(template, data, req, res) {
  if ( req.headers['x-pjax']) {
    data.layout = null;
    res.render(template, data);
  }
  else {
    res.render(template, data);
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
  render('index', { title: 'Finca El Molar - ' + req.__('title') }, req, res);
});

router.get('/:locale?', function(req, res, next) {
  if (req.params.locale == 'es' || req.params.locale == 'en') {
    render('index', { title: 'Finca El Molar - ' + req.__('title') }, req, res);
  }
  else next();
})

router.get('/:locale?/wines', function(req, res) {
  //console.log(req);
   render('products', { title: 'Finca El Molar - ' + req.__('our wines') }, req, res);
});

router.get('/:locale?/wines/quantum', function(req, res) {
  console.log(req);
   render('quantum', { title: 'Finca El Molar - ' + req.__('our wines') +  ' |  Quantum 2012' }, req, res);
});

router.get('/:locale?/wines/finca', function(req, res) {
   render('finca', { title: 'Finca El Molar - ' + req.__('our wines') +  ' |  Finca el molar 2013' }, req, res);
});

router.get('/:locale?/wines/quantum-ice', function(req, res) {
   render('quantum-ice', { title: 'Finca El Molar - ' + req.__('our wines') + ' | ' +  req.__('quantum hielo') }, req, res);
});

router.get('/:locale?/tourism', function(req, res) {
   render('tourism',  { title: 'Finca El Molar' + ' | ' + req.__('roural tourism') }, req, res);
});

router.get('/:locale?/about', function(req, res) {
   render('about', { title: 'Finca El Molar' + ' | ' + req.__('our history') }, req, res);
});

router.get('/:locale?/organic-production', function(req, res) {
   render('organic',  { title: 'Finca El Molar' + ' | ' + req.__('organic production') },req, res);
});

router.get('/:locale?/winery', function(req, res) {
   render('winery',  { title: 'Finca El Molar' + ' | ' + req.__('winery and wineyards') },req, res);
});


module.exports = router;
