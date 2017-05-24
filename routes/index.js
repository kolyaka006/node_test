var express = require('express');
var router = express.Router();
var models = require('../app/db');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/create-url', function(req, res, next) {
    models.Urls.create(req.body, function(err, data){
      res.send(data)
    })
})

router.get('/generate-short', function(req, res, next) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  function generate() {
    for( var i=0; i < 10; i++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    models.Urls.findOne({short: text}).then(function () {
      generate();
    }, function(){
      res.send({url: text})
    })
  }

  generate();
});

router.get('/:url', function(req, res, next) {
  models.Urls.findOne({$or: [{short: req.params.url}, {real: req.params.url}]}, function (res) {
    console.log('...........', res)
  })
  res.render('index', { title: req.params.url });
});

module.exports = router;
