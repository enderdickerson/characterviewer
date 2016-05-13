var express = require('express');
var router = express.Router();
var characters = require('./models/character');

router.get('/', index);
router.use('/data', characters);
router.get('/*', index);

function index(req, res){
  res.render('index', { title: 'Express' });
}

module.exports = router;