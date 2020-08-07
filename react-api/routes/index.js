var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'react-接口测试中心' });
});
router.get('/api/todos', function(req, res, next) {
  const data = require('../data/todo');
  res.json(data)
});
module.exports = router;
