var express = require('express');
var router = express.Router();
var mysql =require("mysql");
var con = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"zhao19940801",
    database:"aaa"
})

/* GET home page. */
router.get('/cou', function(req, res, next) {
  res.header("Access-Control-Allow-Origin","*")
  con.query("SELECT COUNT(*) FROM jingguanran",function (err,rows) {
      res.send(rows)
  })
});
router.post('/click', function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*");
    console.log(req.body.a)
    con.query("SELECT * FROM jingguanran LIMIT "+req.body.a+",2",function (err,rows) {
        res.send(rows)
    })
});

module.exports = router;
