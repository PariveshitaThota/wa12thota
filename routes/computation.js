var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  var x=Math.random();
  
  res.send('cos applied to'+ x + 'is'+ Math.cos(x));
});

module.exports = router;