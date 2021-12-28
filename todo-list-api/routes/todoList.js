var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({todo:[
      {id: 1, title: "掃除"},
      {id: 2, title: "買い物"},
      {id: 3, title: "料理"}
    ] })
});

module.exports = router;
