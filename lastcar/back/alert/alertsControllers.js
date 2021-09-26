var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
var Alerts = require('./alertModel');

router.get('/', function (req,res){
    Alerts.getAlerts(function(err,rows){
        if(err){
            res.status(400).json(err);
        }else{
            res.json(rows)
        }
    });
});

router.post('/', function (req){
    Alerts.createAlerts(req.body,(err,rows) => {});
});



router.delete('/', function (req, res){
    Alerts.deleteAlerts(req.body,(err,count) => {});
});

module.exports = router;