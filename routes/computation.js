var express = require('express');
var router = express.Router();
var x=Math.random();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  res.send('cos applied to'+ x + 'is'+ Math.cos(x));
});

module.exports = router;